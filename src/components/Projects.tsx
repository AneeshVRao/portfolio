import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ui/ProjectCard'
import FadeUp from './ui/FadeUp'
import SectionEyebrow from './ui/SectionEyebrow'

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false)
  const featured = projects.filter(p => p.featured)
  const standard = projects.filter(p => !p.featured)

  return (
    <section id="projects" style={{ background: 'var(--bg-white)', padding: '80px 0' }}>
      <div className="container">
        <FadeUp>
          <SectionEyebrow>Projects</SectionEyebrow>
          <h2 className="section-heading">Things I've Built</h2>
          <p className="section-sub">A selection of real products, tools, and experiments.</p>
        </FadeUp>

        {/* Featured grid — 2 columns */}
        <div className="projects-featured-grid">
          {featured.map((p, i) => (
            <FadeUp key={p.id} delay={i * 0.1}>
              <ProjectCard project={p} variant="featured" />
            </FadeUp>
          ))}
        </div>

        {/* Standard grid under toggle — 3 columns */}
        {standard.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: '100%', overflow: 'hidden' }}
                >
                  <div className="projects-standard-grid" style={{ paddingTop: '24px' }}>
                    {standard.map((p, i) => (
                      <FadeUp key={p.id} delay={i * 0.05}>
                        <ProjectCard project={p} variant="standard" />
                      </FadeUp>
                    ))}
                    
                    {/* GitHub Redirect Card */}
                    <FadeUp delay={standard.length * 0.05}>
                      <a
                        href="https://github.com/AneeshVRao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card project-card--standard github-more-card"
                      >
                        <div className="github-icon-circle">
                          <GithubIcon size={28} />
                        </div>
                        <h3 className="project-card__title">For further more projects</h3>
                        <p className="project-card__tagline">
                          Click here to explore my other repositories, open-source work, and codebases on GitHub.
                        </p>
                        <span className="project-btn project-btn--ghost">
                          Click Here
                        </span>
                      </a>
                    </FadeUp>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="project-btn"
              style={{
                marginTop: '40px',
                padding: '12px 28px',
                fontSize: '14px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '2px solid var(--accent)',
                color: 'var(--accent)',
                background: 'transparent',
                fontWeight: 'bold',
                borderRadius: '999px',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent)'
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--accent)'
              }}
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  More Projects <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

