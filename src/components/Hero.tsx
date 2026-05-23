import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import heroPhoto from '../assets/images/hero-photo.jpg'

const roles = [
  { num: '01', label: 'Full-Stack Engineer',       active: false },
  { num: '02', label: 'AI Systems Builder',         active: true  },
  { num: '03', label: 'Open Source Contributor',    active: false },
]

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [startTyping, setStartTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const phrase = "Hi, I'm Aneesh"

  useEffect(() => {
    // Delay start of typing until after page load curtain slides up
    const t = window.setTimeout(() => setStartTyping(true), 1800)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!startTyping) return

    if (typedText.length === phrase.length) {
      // Hide cursor 1 second after typing finishes
      const cursorTimer = window.setTimeout(() => setShowCursor(false), 1000)
      return () => window.clearTimeout(cursorTimer)
    }

    const timer = window.setTimeout(() => {
      setTypedText(phrase.substring(0, typedText.length + 1))
    }, 100)

    return () => window.clearTimeout(timer)
  }, [startTyping, typedText])

  return (
    <section id="hero" className="hero">
      {/* Blended Background Photo — cinematic scale-in */}
      <motion.img
        src={heroPhoto}
        className="hero-photo"
        alt="Aneesh Venkatesha Rao"
        initial={{ opacity: 0, scale: 1.35, x: '-50%', y: '-50%' }}
        animate={{ opacity: 0.9, scale: 1.2, x: '-50%', y: '-50%' }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Gradient Color Overlay */}
      <motion.div
        className="hero-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Background Watermark — staggered slide-in */}
      <div className="hero-watermark">
        <motion.span
          className="hero-watermark-row"
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          ANEESH
        </motion.span>
        <motion.span
          className="hero-watermark-row"
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          VENKATESHA RAO
        </motion.span>
      </div>

      {/* Glass Greeting Bubble Card & Location Wrapper */}
      <motion.div 
        className="hero-greeting-wrapper"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-greeting">
          <p style={{ fontFamily: 'var(--font-script)', fontSize: 22, color: '#fff', marginBottom: 8, minHeight: '32px', display: 'flex', alignItems: 'center' }}>
            {typedText}
            {showCursor && <span className="typewriter-cursor">|</span>}
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
            Building AI-powered products, scalable systems,
            and open-source tools that ship fast and last.
          </p>
        </div>

        {/* Location pulse bar moved below the greeting card */}
        <div className="hero-location-bar">
          <span className="location-pulse"></span>
          <span className="location-text">Location: Warangal, India (NIT Warangal)</span>
        </div>
      </motion.div>

      {/* Role Badges */}
      <div className="hero-roles">
        {roles.map((r, index) => (
          <motion.div 
            key={r.num}
            className={`role-line ${r.active ? 'active' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="role-num">{r.num}</span>
            <span>{r.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
