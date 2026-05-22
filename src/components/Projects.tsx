import { projects } from '../data/projects'
import ProjectCard from './ui/ProjectCard'
import FadeUp from './ui/FadeUp'
import SectionEyebrow from './ui/SectionEyebrow'

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const standard = projects.filter(p => !p.featured)

  return (
    <section id="projects" style={{ background: 'var(--bg-white)', padding: '80px 0' }}>
      <div className="container">
        <FadeUp>
          <SectionEyebrow>Projects</SectionEyebrow>
          <h2 className="section-heading">Things I've Shipped</h2>
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

        {/* Standard grid — 3 columns */}
        {standard.length > 0 && (
          <div className="projects-standard-grid">
            {standard.map((p, i) => (
              <FadeUp key={p.id} delay={i * 0.08}>
                <ProjectCard project={p} variant="standard" />
              </FadeUp>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
