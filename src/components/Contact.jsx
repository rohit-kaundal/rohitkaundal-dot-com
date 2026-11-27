import React from 'react'
import Reveal from './Reveal'
import { EMAIL, SOCIAL, AIFORTESS_URL } from '../data/site'

const reasons = [
  'You are building with AI agents and want to talk about what they should be allowed to do.',
  'You want to be an early user or design partner for Vertias or Assessor.',
  'You are working on security tooling and want to compare notes or collaborate.',
  'You want a technical talk on AI security, agent authorization or governance that isn’t a sales pitch.',
]

const Contact = () => (
  <section id="contact" className="relative px-6 lg:px-10 py-28 lg:py-40 border-t border-rahu-border overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
      <Reveal className="lg:col-span-7">
        <div className="label flex items-center gap-4 mb-6">
          <span className="text-varuna">05</span>
          <span className="h-px w-10 bg-rahu-border" aria-hidden="true" />
          <span>Open channel</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-veil leading-[1.08] mb-10">
          Building something at the edge of AI and security?{' '}
          <span className="voice text-varuna">Write to me.</span>
        </h2>
        <a
          href={`mailto:${EMAIL}`}
          className="group inline-flex items-baseline gap-4 text-2xl sm:text-3xl lg:text-4xl font-light text-varuna hover:text-varuna-bright transition-colors duration-200 break-all"
        >
          {EMAIL}
          <span aria-hidden="true" className="text-xl transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
        <p className="mt-5 text-saturn">It reaches me directly. No form, no assistant.</p>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="link-arrow">GitHub <span aria-hidden="true">↗</span></a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="link-arrow">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href={AIFORTESS_URL} target="_blank" rel="noopener noreferrer" className="link-arrow">AIFortess <span aria-hidden="true">↗</span></a>
        </div>
      </Reveal>

      <Reveal className="lg:col-span-5 lg:pt-20" delay={0.08}>
        <p className="label mb-6">Good reasons to get in touch</p>
        <ul className="space-y-5">
          {reasons.map((r, i) => (
            <li key={r} className="flex gap-4 text-saturn leading-relaxed">
              <span className="font-mono text-xs text-varuna/70 pt-1.5">{String(i + 1).padStart(2, '0')}</span>
              {r}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
)

export default Contact
