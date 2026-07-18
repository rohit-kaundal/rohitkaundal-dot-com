import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Scroll-triggered fade/rise. Fires once. No-ops when the user prefers reduced motion.
const Reveal = ({ children, delay = 0, y = 20, className = '', as = 'div' }) => {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
