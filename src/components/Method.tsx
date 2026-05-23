import { methodData } from '../data/method'
import FadeUp from './ui/FadeUp'
import SectionEyebrow from './ui/SectionEyebrow'
import { getImageUrl } from '../utils/images'

export default function Method() {
  return (
    <section id="method" aria-label="Core Engineering Methodology" style={{ background: 'var(--bg-light)', padding: '80px 0' }}>
      <div className="container">
        {/* Top Header Grid */}
        <div className="method-grid-top">
          <FadeUp>
            <SectionEyebrow>{methodData.eyebrow}</SectionEyebrow>
            <h2 className="section-heading">{methodData.title}</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="section-sub" style={{ margin: 0, paddingTop: 16 }}>
              {methodData.sub}
            </p>
          </FadeUp>
        </div>

        {/* Bottom Cards Grid */}
        <div className="method-cards">
          {methodData.steps.map((step, index) => (
            <FadeUp key={index} delay={index * 0.15}>
              <div className="method-card">
                <img 
                  src={getImageUrl(step.image)} 
                  alt={step.title} 
                  className="method-card__image"
                  loading="lazy"
                  width={400}
                  height={220}
                />
                <div className="method-card__body">
                  <div className="method-card__num">{step.num}</div>
                  <h3 className="method-card__title">{step.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{step.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
