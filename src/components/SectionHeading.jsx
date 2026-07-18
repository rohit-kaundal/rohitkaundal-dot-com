import React from 'react'
import Reveal from './Reveal'

// Section eyebrow in the doctrine register: number, veil ring, title.
// `align="center"` centers the block for full-width sections.
const SectionHeading = ({ number, title, align = 'left', className = '' }) => {
  const centered = align === 'center'

  return (
    <Reveal className={`mb-14 ${centered ? 'text-center' : ''} ${className}`}>
      <div className={`doctrine-label mb-4 ${centered ? 'justify-center' : ''}`}>
        <span>{number}</span>
        <span className="veil-ring" aria-hidden="true" />
      </div>
      <h2 className="text-4xl font-light text-veil">{title}</h2>
    </Reveal>
  )
}

export default SectionHeading
