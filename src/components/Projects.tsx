import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown, ChevronUp, X, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import ProjectCard from './ui/ProjectCard'
import FadeUp from './ui/FadeUp'
import SectionEyebrow from './ui/SectionEyebrow'
import { GithubIcon } from './ui/icons'
import { getImageUrl } from '../utils/images'

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const featured = projects.filter(p => p.featured)
  const standard = projects.filter(p => !p.featured)

  const reduceMotion = useReducedMotion()
  const modalRef = useRef<HTMLDivElement>(null)

  // Focus trap hook
  useEffect(() => {
    if (!selectedProject || !modalRef.current) return
    const el = modalRef.current
    const focusable = el.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    function handleKey(e: KeyboardEvent) {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    el.addEventListener('keydown', handleKey)
    const previouslyFocused = document.activeElement as HTMLElement
    first.focus()

    return () => {
      el.removeEventListener('keydown', handleKey)
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus()
      }
    }
  }, [selectedProject])

  // Scroll lock hook
  useEffect(() => {
    if (!selectedProject) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [selectedProject])

  // Escape key close hook
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    if (selectedProject) {
      window.addEventListener('keydown', onKey)
    }
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedProject])

  return (
    <section id="projects" aria-label="Software Projects" style={{ background: 'var(--bg-white)', padding: '80px 0' }}>
      <div className="container">
        <FadeUp>
          <SectionEyebrow>Projects</SectionEyebrow>
          <h2 className="section-heading">Things I've Built</h2>
          <p className="section-sub">A selection of real products, tools, and experiments. Click any card to view detailed specifications.</p>
        </FadeUp>

        {/* Featured grid — 2 columns */}
        <div className="projects-featured-grid">
          {featured.map((p, i) => (
            <FadeUp key={p.id} delay={i * 0.1}>
              <ProjectCard project={p} variant="featured" onClick={() => setSelectedProject(p)} />
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
                        <ProjectCard project={p} variant="standard" onClick={() => setSelectedProject(p)} />
                      </FadeUp>
                    ))}
                    
                    {/* GitHub Redirect Card */}
                    <FadeUp delay={standard.length * 0.05}>
                      <a
                        href="https://github.com/AneeshVRao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card project-card--standard github-more-card"
                        aria-label="Explore more repositories on GitHub (opens in a new tab)"
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
              className="projects-more-btn"
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

      {/* Project Detail Modal */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
            <motion.div
              ref={modalRef}
              className="project-modal-content"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={reduceMotion ? { opacity: 0 } : { scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { scale: 0.95, opacity: 0, y: 16 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="project-modal__close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {selectedProject.image && (
                <div className="project-modal__image-wrap">
                  <img
                    src={getImageUrl(selectedProject.image)}
                    alt={selectedProject.title}
                  />
                </div>
              )}

              <div className="project-modal__body">
                <div className="project-modal__meta">
                  <span className="project-status-pill" style={{
                    color: selectedProject.status === 'shipped' ? '#1a7a6a' : selectedProject.status === 'in-progress' ? '#c0520a' : '#888',
                    background: selectedProject.status === 'shipped' ? 'rgba(26,122,106,0.1)' : selectedProject.status === 'in-progress' ? 'rgba(192,82,10,0.1)' : 'rgba(0,0,0,0.06)'
                  }}>
                    {selectedProject.status === 'shipped' ? 'Shipped' : selectedProject.status === 'in-progress' ? 'In Progress' : 'Archived'}
                  </span>
                  <span className="project-year">{selectedProject.year}</span>
                </div>

                <h3 id="project-modal-title" className="project-modal__title">{selectedProject.title}</h3>
                <p className="project-modal__tagline">{selectedProject.tagline}</p>
                
                <p className="project-modal__desc">{selectedProject.description}</p>

                <div className="project-modal__tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {selectedProject.tags.map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>

                <div className="project-modal__actions" style={{ display: 'flex', gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn--primary"
                      aria-label={`View live demo of ${selectedProject.title} (opens in a new tab)`}
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  {selectedProject.repoUrl && (
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn--ghost"
                      aria-label={`View ${selectedProject.title} source code on GitHub (opens in a new tab)`}
                    >
                      <GithubIcon size={14} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

