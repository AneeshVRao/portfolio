import { ExternalLink } from 'lucide-react'
import type { Project } from '../../data/projects'

const GithubIcon = ({ size = 14 }: { size?: number }) => (
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

const STATUS_LABELS = {
  'shipped':     { label: 'Shipped',      color: '#1a7a6a', bg: 'rgba(26,122,106,0.10)' },
  'in-progress': { label: 'In Progress',  color: '#c0520a', bg: 'rgba(192,82,10,0.10)'  },
  'archived':    { label: 'Archived',     color: '#888',    bg: 'rgba(0,0,0,0.06)'       },
}

interface Props {
  project: Project
  variant: 'featured' | 'standard'
  onClick?: () => void
}

// Dynamically import all images in assets/images using Vite's glob import
const projectImages = import.meta.glob<{ default: string }>('../../assets/images/projects/*.{png,jpg,jpeg,svg,gif,webp}', { eager: true })

const getImageUrl = (imagePath: string) => {
  const key = `../../assets/images/${imagePath}`
  return projectImages[key]?.default || ''
}

export default function ProjectCard({ project, variant, onClick }: Props) {
  const status = STATUS_LABELS[project.status]

  return (
    <article 
      className={`project-card project-card--${variant}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {project.image && (
        <div className="project-card__image-wrap">
          <img 
            src={getImageUrl(project.image)} 
            alt={project.title} 
            loading="lazy"
            width={600}
            height={338}
          />
        </div>
      )}
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-status-pill" style={{ color: status.color, background: status.bg }}>
            {status.label}
          </span>
          <span className="project-year">{project.year}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
        <div className="project-card__tags">
          {project.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
        </div>
        <div className="project-card__actions">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-btn project-btn--primary"
              aria-label={`View live demo of ${project.title} (opens in a new tab)`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} /> Live
            </a>
          )}
          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-btn project-btn--ghost"
              aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon size={14} /> GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
