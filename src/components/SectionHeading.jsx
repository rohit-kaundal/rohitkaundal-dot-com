import React from 'react'
import Reveal from './Reveal'

// Section opener: a mono index line, then a large light headline.
// Pass the headline as children so one word can carry the serif voice.
const SectionHeading = ({ number, eyebrow, children, lede, className = '' }) => (
  <Reveal className={`mb-16 lg:mb-20 ${className}`}>
    <div className="label flex items-center gap-4 mb-6">
      <span className="text-varuna">{number}</span>
      <span className="h-px w-10 bg-rahu-border" aria-hidden="true" />
      <span>{eyebrow}</span>
    </div>
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-veil leading-[1.08] max-w-4xl">
      {children}
    </h2>
    {lede && <p className="mt-6 text-lg text-saturn max-w-2xl leading-relaxed">{lede}</p>}
  </Reveal>
)

export default SectionHeading
