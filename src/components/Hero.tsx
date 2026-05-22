import { motion } from 'framer-motion'
import heroPhoto from '../assets/images/hero-photo.jpg'

const roles = [
  { num: '01', label: 'Full-Stack Engineer',       active: false },
  { num: '02', label: 'AI Systems Builder',         active: true  },
  { num: '03', label: 'Open Source Contributor',    active: false },
]

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Blended Background Photo */}
      <img
        src={heroPhoto}
        className="hero-photo"
        alt="Aneesh Venkatesha Rao"
      />

      {/* Gradient Color Overlay */}
      <div className="hero-overlay" />

      {/* Background Watermark */}
      <div className="hero-watermark">
        <span className="hero-watermark-row">ANEESH</span>
        <span className="hero-watermark-row">VENKATESHA RAO</span>
      </div>

      {/* Glass Greeting Bubble Card */}
      <motion.div 
        className="hero-greeting"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <p style={{ fontFamily: 'var(--font-script)', fontSize: 22, color: '#fff', marginBottom: 8 }}>
          I'm Aneesh!
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
          Building AI-powered products, scalable systems,
          and open-source tools that ship fast and last.
        </p>
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
