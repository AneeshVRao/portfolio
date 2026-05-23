import { ExternalLink } from 'lucide-react'
import type { Project } from '../../data/projects'
import { GithubIcon } from './icons'
import { getImageUrl } from '../../utils/images'

const STATUS_LABELS = {
  'shipped':     { label: 'Shipped',      color: 'var(--icon-teal)', bg: 'var(--icon-teal-bg)' },
  'in-progress': { label: 'In Progress',  color: 'var(--accent)',    bg: 'var(--accent-light)'  },
  'archived':    { label: 'Archived',     color: 'var(--text-muted)', bg: 'var(--bg-ghost-hover)' },
}

interface Props {
  project: Project
  variant: 'featured' | 'standard'
  onClick?: () => void
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
