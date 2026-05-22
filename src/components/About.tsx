import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { aboutData } from '../data/about'
import FadeUp from './ui/FadeUp'
import SectionEyebrow from './ui/SectionEyebrow'

function StatCounter({ target, valueString }: { target: number; valueString: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  // Extract suffix (like +, K+) from valueString
  const suffix = valueString.replace(/[0-9]/g, '')

  useEffect(() => {
    if (!inView) return
    const end = target
    const duration = 1200 // milliseconds
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing out quad
      const easeProgress = progress * (2 - progress)
      
      const currentCount = Math.floor(easeProgress * end)
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, target])

  return (
    <span ref={ref} className="stat-val">
      {count}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-light)', padding: '80px 0' }}>
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Headline copy */}
          <FadeUp>
            <SectionEyebrow>{aboutData.eyebrow}</SectionEyebrow>
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
              // Parse the number from the string
              const targetNum = parseInt(stat.value.replace(/[^0-9]/g, ''), 10)
              return (
                <FadeUp key={index} delay={index * 0.1}>
                  <div className="stat-card">
                    <StatCounter target={targetNum} valueString={stat.value} />
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
