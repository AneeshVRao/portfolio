import { useEffect, useState, useRef } from 'react'
import { useInView, motion, AnimatePresence } from 'framer-motion'
import { aboutData } from '../data/about'
import FadeUp from './ui/FadeUp'
import SectionEyebrow from './ui/SectionEyebrow'

function StatCounter({ target, valueString }: { target: number; valueString: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const suffix = valueString.replace(/[0-9]/g, '')

  useEffect(() => {
    if (!inView) return
    const end = target
    const duration = 1200
    const startTime = performance.now()
    let frameId: number

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easeProgress = progress * (2 - progress)
      const currentCount = Math.floor(easeProgress * end)
      setCount(currentCount)

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    frameId = requestAnimationFrame(animate)
    return () => {
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [inView, target])

  return (
    <span ref={ref} className="stat-val">
      {count}
      {suffix}
    </span>
  )
}

interface ContributionDay {
  date: string
  count: number
  level: number
}

interface GithubContributionsResponse {
  total: {
    [year: string]: number
  }
  contributions: ContributionDay[]
}

function validateContribData(data: unknown): GithubContributionsResponse | null {
  if (!data || typeof data !== 'object') return null
  const d = data as Record<string, unknown>
  if (!d.total || typeof d.total !== 'object') return null
  
  const totalObj = d.total as Record<string, unknown>
  for (const key in totalObj) {
    if (typeof totalObj[key] !== 'number') return null
  }
  
  if (!Array.isArray(d.contributions)) return null
  for (const c of d.contributions) {
    if (!c || typeof c !== 'object') return null
    const day = c as Record<string, unknown>
    if (typeof day.date !== 'string' || typeof day.count !== 'number' || typeof day.level !== 'number') {
      return null
    }
  }
  
  return data as GithubContributionsResponse
}

function GithubContributions({
  data,
  totalContributions,
  loading,
  error,
}: {
  data: GithubContributionsResponse | null
  totalContributions: number
  loading: boolean
  error: boolean
}) {
  if (error) return null // Fail silently to keep layout clean

  const lastYearContribs = data?.contributions
    ? [...data.contributions]
        .sort((a, b) => a.date.localeCompare(b.date))
        .filter(c => c.date <= new Date().toISOString().split('T')[0])
        .slice(-371)
    : []

  return (
    <div className="github-contrib-card">
      <div className="github-contrib-header">
        <h4 className="github-contrib-title">Open Source Activity</h4>
        <span className="github-contrib-count">
          {loading ? 'Fetching...' : `${totalContributions} contributions since first activity`}
        </span>
      </div>

      <div className="github-contrib-scroll">
        {loading ? (
          <div className="github-contrib-loading">
            <div className="github-contrib-spinner"></div>
            <span>Syncing activity with GitHub...</span>
          </div>
        ) : (
          <div className="github-contrib-grid">
            {lastYearContribs.map((day) => (
              <div
                key={day.date}
                className={`contrib-cell contrib-level-${day.level}`}
                title={`${day.count} contributions on ${day.date}`}
              />
            ))}
          </div>
        )}
      </div>

      {!loading && (
        <div className="github-contrib-footer">
          <div className="github-contrib-legend">
            <span>Less</span>
            <div className="contrib-cell contrib-level-0" />
            <div className="contrib-cell contrib-level-1" />
            <div className="contrib-cell contrib-level-2" />
            <div className="contrib-cell contrib-level-3" />
            <div className="contrib-cell contrib-level-4" />
            <span>More</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default function About() {
  const [contribData, setContribData] = useState<GithubContributionsResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const totalContributions = contribData?.total
    ? Object.values(contribData.total).reduce((sum, val) => sum + val, 0)
    : 500

  useEffect(() => {
    const controller = new AbortController()
    fetch('https://github-contributions-api.jogruber.de/v4/AneeshVRao', { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('API response error')
        return res.json()
      })
      .then((resData: unknown) => {
        const validated = validateContribData(resData)
        if (validated) {
          setContribData(validated)
          setLoading(false)
        } else {
          throw new Error('API response failed validation')
        }
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error('Error fetching contributions:', err)
          setError(true)
          setLoading(false)
        }
      })
    return () => controller.abort()
  }, [])

  return (
    <section id="about" style={{ background: 'var(--bg-light)', padding: '80px 0' }} aria-label="About Aneesh">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Headline copy */}
          <FadeUp>
            <SectionEyebrow>{aboutData.eyebrow}</SectionEyebrow>
            <h2 id="about-heading" className="sr-only">About Me</h2>
            <h3 className="about__headline">
              {aboutData.headline.map((part, index) => (
                part.bold ? (
                  <strong key={index}>{part.text}</strong>
                ) : (
                  <span key={index}>{part.text}</span>
                )
              ))}
            </h3>
          </FadeUp>

          {/* Right Column: Statistics Grid */}
          <div className="stats-grid">
            {aboutData.stats.map((stat, index) => {
              return (
                <FadeUp key={index} delay={index * 0.1}>
                  <div className="stat-card">
                    <StatCounter target={stat.numericValue} valueString={stat.value} />
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </FadeUp>
              )
            })}
            
            {/* Interactive 4th block for GitHub Contributions */}
            <FadeUp delay={0.3}>
              <button 
                className={`stat-card stat-card--interactive ${isExpanded ? 'stat-card--active' : ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ 
                  cursor: 'pointer', 
                  width: '100%', 
                  textAlign: 'left',
                  border: isExpanded ? '1px solid var(--accent)' : '1px solid var(--border)',
                  display: 'block'
                }}
                aria-expanded={isExpanded}
                aria-controls="github-contributions-panel"
                aria-label="Toggle GitHub Contributions details"
              >
                <div className="stat-val" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  {loading ? (
                    <span style={{ fontSize: '28px', color: 'var(--text-secondary)' }}>Syncing...</span>
                  ) : error ? (
                    <span>500+</span>
                  ) : (
                    <StatCounter target={totalContributions} valueString={`${totalContributions}+`} />
                  )}
                </div>
                <div className="stat-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <span>GitHub Activity</span>
                  <span style={{ 
                    fontSize: '10px', 
                    color: 'var(--accent)', 
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    marginLeft: '8px'
                  }}>
                    ▼
                  </span>
                </div>
              </button>
            </FadeUp>
          </div>
        </div>

        {/* Collapsible GitHub Contribution Chart below About Grid */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              id="github-contributions-panel"
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 48 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <GithubContributions data={contribData} totalContributions={totalContributions} loading={loading} error={error} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
