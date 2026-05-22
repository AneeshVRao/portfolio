import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import FadeUp from './ui/FadeUp'
import SectionEyebrow from './ui/SectionEyebrow'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="testimonials" style={{ background: 'var(--bg-white)', padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <FadeUp>
            <SectionEyebrow>Testimonials</SectionEyebrow>
            <h2 className="section-heading">Proof That Great Code Changes Everything</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Here is what tech leaders and platform engineers say about working with me.
            </p>
          </FadeUp>
        </div>

        {/* Desktop grid & Mobile slider view */}
        <div className="testimonials__slider">
          {/* Desktop Grid Layout (hidden on mobile, uses CSS to adjust grid columns) */}
          <div className="testimonials__grid-container">
            {/* On mobile, we only display the active card. On desktop, we show all */}
            <div className="testimonials__grid">
              {testimonials.map((t, index) => {
                // Mobile active state handling
                const isActiveOnMobile = index === activeIndex
                const cardClass = `testimonial-card ${isActiveOnMobile ? 'testimonial-card--mobile-active' : 'testimonial-card--mobile-hidden'}`
                
                return (
                  <FadeUp key={t.id} delay={index * 0.1} className={cardClass}>
                    <div className="testimonial-card__quote-icon">“</div>
                    <p className="testimonial-card__quote">"{t.quote}"</p>
                    <div className="testimonial-card__author">
                      <img src={t.avatar} alt={t.author} className="testimonial-card__avatar" />
                      <div>
                        <h4 className="testimonial-card__name">{t.author}</h4>
                        <div className="testimonial-card__role">{t.role}</div>
                      </div>
                    </div>
                  </FadeUp>
                )
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="testimonials__nav">
            <button 
              className="testimonials__nav-btn" 
              onClick={handlePrev} 
              aria-label="Previous Testimonial"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              className="testimonials__nav-btn" 
              onClick={handleNext} 
              aria-label="Next Testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* Testimonials Responsive Styling Helper */
        @media (max-width: 1024px) {
          .testimonial-card--mobile-hidden {
            display: none !important;
          }
          .testimonial-card--mobile-active {
            display: flex !important;
            width: 100%;
          }
          .testimonials__grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
