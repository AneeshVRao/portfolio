import { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../data/faqs'
import FadeUp from './ui/FadeUp'
import SectionEyebrow from './ui/SectionEyebrow'

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" aria-label="Frequently asked questions" style={{ background: 'var(--bg-white)', padding: '80px 0' }}>
      <div className="container">
        <div className="faq-grid">
          {/* Left Column: Heading + Call to Action */}
          <FadeUp>
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>
              Have questions about my technical background, development workflows, or availability? Let's clear them up. If your question isn't answered here, feel free to drop me an email directly.
            </p>
            <motion.a 
              whileTap={{ scale: 0.97 }}
              href="mailto:aneeshvrao2017@gmail.com" 
              className="pain__checklist-btn"
              style={{ display: 'inline-flex', marginTop: 0 }}
            >
              Ask a Question
            </motion.a>
          </FadeUp>

          {/* Right Column: Accordion List */}
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeId === faq.id
              return (
                <FadeUp key={faq.id} delay={index * 0.08}>
                  <div className="faq-item">
                    <button 
                      id={`faq-trigger-${faq.id}`}
                      className="faq-item__header" 
                      onClick={() => toggleFAQ(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${faq.id}`}
                    >
                      <span>{faq.q}</span>
                      <span className="faq-item__icon" style={{
                        transform: isOpen ? 'rotate(135deg)' : 'rotate(0deg)',
                        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        display: 'inline-block'
                      }}>
                        <Plus size={18} />
                      </span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${faq.id}`}
                          role="region"
                          aria-labelledby={`faq-trigger-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="faq-item__panel-motion"
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="faq-item__content">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
