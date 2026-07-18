import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const failures = [
  'Accountability for model behaviour remains undefined in most organisations.',
  'Risk postures rarely account for adversarial AI scenarios.',
  'Regulatory scrutiny arrives before teams know what readiness looks like.',
]

const Manifesto = () => {
  return (
    <section id="perspective" className="py-32 px-6">
      <div className="prose">
        <SectionHeading number="01" title="Perspective" />

        <div className="space-y-7 text-body leading-relaxed">
          <Reveal>
            <p className="text-xl text-veil/90">
              AI governance is becoming the defining security problem of this decade —
              not because intelligent systems are dangerous by nature, but because
              they are being deployed faster than the structures meant to govern them.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-saturn">Three failures recur, almost without exception:</p>
          </Reveal>

          {/* Numbered as clauses rather than bullets — this is a position, not a list. */}
          <ol className="space-y-5 my-10">
            {failures.map((failure, i) => (
              <Reveal key={failure} delay={0.1 + i * 0.07}>
                <li className="flex gap-5 items-baseline">
                  <span className="font-mono text-xs text-varuna/70 shrink-0 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-veil/85">{failure}</span>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <p>
              My work closes that gap. Not through tooling or frameworks alone, but
              by helping practitioners reason clearly about how AI systems should be
              secured, governed, and evaluated in practice.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="pt-6">
              <hr className="oath-rule mb-8" />
              <p className="text-xl text-dharma font-light leading-relaxed">
                The goal is not theoretical governance. It is defensible
                decision-making under real constraints.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Manifesto
