import { motion } from 'framer-motion'

export default function PageCurtain() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: '-100%',
        transition: { 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1] 
        } 
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'var(--bg-dark)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Animated Monogram Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '56px',
            fontWeight: 900,
            color: 'var(--text-on-dark)',
            letterSpacing: '0.1em',
            marginBottom: '20px',
            textShadow: '0 4px 20px rgba(192, 82, 10, 0.3)',
          }}
        >
          AVR
        </motion.div>

        {/* Loading progress indicator */}
        <div style={{ position: 'relative', width: '120px', height: '2px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '999px', overflow: 'hidden' }}>
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: 0,
              width: '50%',
              height: '100%',
              background: 'var(--accent)',
              borderRadius: '999px',
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}
