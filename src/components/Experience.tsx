import { experienceData } from '../data/experience'
import FadeUp from './ui/FadeUp'
import SectionEyebrow from './ui/SectionEyebrow'

export default function Experience() {
  return (
    <section id="experience" aria-label="Work and Academic History" style={{ background: 'var(--bg-light)', padding: '80px 0', overflow: 'hidden' }}>
      <div className="container">
        <FadeUp>
          <SectionEyebrow>Journey</SectionEyebrow>
          <h2 className="section-heading">Experience & Timeline</h2>
          <p className="section-sub">
            A chronological summary of my academic milestones, independent engineering work, and leadership credentials.
          </p>
        </FadeUp>

        <div className="timeline-container">
          {/* Vertical Spine */}
          <div className="timeline-spine"></div>

          <div className="timeline-list">
            {experienceData.map((item, index) => {
              const isLeft = index % 2 === 0
              return (
                <div 
                  key={item.id} 
                  className={`timeline-row ${isLeft ? 'timeline-row--left' : 'timeline-row--right'}`}
                >
                  {/* Spine Dot Marker */}
                  <div className="timeline-dot">
                    <span className="timeline-dot-inner">{item.icon}</span>
                  </div>

                  {/* Spacer for structural balance */}
                  <div className="timeline-spacer"></div>

                  {/* Card Content wrapper */}
                  <div className="timeline-card-wrapper">
                    <FadeUp delay={index * 0.15}>
                      <div className={`timeline-card ${item.accent ? 'timeline-card--accent' : ''}`}>
                        <div className="timeline-card__header">
                          <span className="timeline-card__period">{item.period}</span>
                          <span className="timeline-card__badge" style={{
                            background: item.type === 'education' ? 'rgba(26,122,106,0.08)' : 'rgba(192,82,10,0.08)',
                            color: item.type === 'education' ? 'var(--accent-green, #1a7a6a)' : 'var(--accent)'
                          }}>
                            {item.type === 'education' ? 'Education' : 'Achievement & Work'}
                          </span>
                        </div>
                        <h3 className="timeline-card__title">{item.title}</h3>
                        <h4 className="timeline-card__subtitle">{item.subtitle}</h4>
                        {item.description && <p className="timeline-card__desc">{item.description}</p>}
                        
                        {item.highlights && item.highlights.length > 0 && (
                          <ul className="timeline-card__highlights">
                            {item.highlights.map((highlight, hIdx) => {
                              // If it is the special scholar award highlight on DPS item, we render it below as a visual chain instead of duplicating
                              if (item.id === 'dps' && highlight.includes('Special Scholar Award')) {
                                return null;
                              }
                              return (
                                <li key={hIdx}>{highlight}</li>
                              )
                            })}
                          </ul>
                        )}

                        {/* Scholar Award Progression Visual Chain */}
                        {item.id === 'dps' && (
                          <div className="scholar-ladder">
                            <div className="scholar-ladder__title">
                              🏅 Special Scholar Award Chain
                            </div>
                            <div className="scholar-ladder__subtitle">
                              Sustained academic excellence over 6 consecutive years
                            </div>
                            <div className="scholar-ladder__steps">
                              {[
                                { class: 'Yr 1-3', label: 'Blue Blazer', desc: 'Grade 7–9 continuous scholar list' },
                                { class: 'Yr 4', label: 'Blue Tie', desc: 'Grade 10 academic distinction' },
                                { class: 'Yr 5', label: 'Gold Medal', desc: 'Grade 11 national academic ranking' },
                                { class: 'Yr 6', label: 'Special Award', desc: 'Grade 12 pinnacle honors list' }
                              ].map((step, sIdx) => (
                                <div key={sIdx} className="scholar-ladder__step">
                                  <div className="scholar-ladder__node">
                                    <div className="scholar-ladder__dot"></div>
                                  </div>
                                  <div className="scholar-ladder__body">
                                    <span className="scholar-ladder__label">{step.label}</span>
                                    <span className="scholar-ladder__desc">({step.class}) — {step.desc}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {item.tags && item.tags.length > 0 && (
                          <div className="timeline-card__tags">
                            {item.tags.map(tag => (
                              <span key={tag} className="timeline-card__tag">{tag}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </FadeUp>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
