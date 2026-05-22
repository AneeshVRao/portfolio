import { Download } from 'lucide-react'
import { painPoints } from '../data/painPoints'
import FadeUp from './ui/FadeUp'
import SectionEyebrow from './ui/SectionEyebrow'

export default function PainPoints() {
  return (
    <section id="hurdles" style={{ background: 'var(--bg-white)', padding: '80px 0' }}>
      <div className="container">
        <div className="pain-grid">
          {/* Left Column: Heading + Empathy + CTA */}
          <FadeUp>
            <SectionEyebrow>Hurdles</SectionEyebrow>
            <h2 className="section-heading">Why Aren't You Shipping?</h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>
              You deliver exceptional code at your day job and solve complex issues. Yet, when it comes to launching your own products, you find yourself stuck in a cycle of tutorial loops, architectural doubt, and unfinished drafts. It's time to transition from constant planning to active launching.
            </p>
            <a 
              href="https://github.com/AneeshVRao/portfolio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pain__checklist-btn"
            >
              <Download size={16} /> Download Free Checklist
            </a>
          </FadeUp>

          {/* Right Column: 2x2 Grid of Cards */}
          <div className="pain-cards">
            {painPoints.map((point, index) => (
              <FadeUp key={index} delay={index * 0.08}>
                <div className="pain-card">
                  <div className="pain-card__icon">{point.icon}</div>
                  <h4 className="pain-card__title">{point.title}</h4>
                  <p className="pain-card__sub">{point.sub}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
