import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FadeUp({ children, delay = 0, className }: Props) {
  const shouldReduce = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduce ? {} : { opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={shouldReduce ? { duration: 0 } : {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 0.8,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
