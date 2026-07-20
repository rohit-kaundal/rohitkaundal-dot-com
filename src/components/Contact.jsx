import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { EMAIL, ASSESSMENT_URL, NEWSLETTER_URL } from '../data/site'

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="prose">
        <SectionHeading number="05" title="Contact" />

        <Reveal>
          <p className="text-body text-saturn mb-10 leading-relaxed">
            Start with Compass, the free readiness assessment. Seventeen
            questions, about three minutes, scored out of 100 — it shows you
            where the gaps are whether or not we ever speak.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <a
            href={ASSESSMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-baseline gap-3 text-2xl lg:text-3xl font-light text-varuna hover:text-varuna-bright transition-colors"
          >
            Take the free Readiness Assessment
            <span
              className="text-lg transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-body text-saturn mt-14 mb-6 leading-relaxed">
            If the assessment surfaces something worth fixing, email me. Tell me
            what stage you are at and which deal stalled. No form, no discovery
            call before the conversation — it reaches me directly.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-baseline gap-3 text-xl lg:text-2xl font-light text-varuna hover:text-varuna-bright transition-colors"
          >
            {EMAIL}
            <span
              className="text-base transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-body text-saturn mt-14 leading-relaxed">
            Not ready for either? I write{' '}
            <a
              href={NEWSLETTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-varuna hover:text-varuna-bright transition-colors border-b border-varuna/30 hover:border-varuna"
            >
              The Cyber Operating System
            </a>{' '}
            — a newsletter on building living security programs, where trust
            becomes an operational advantage instead of an annual compliance
            exercise.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <hr className="oath-rule mb-8" />
            <p className="text-lg text-dharma font-light leading-relaxed">
              I take a small number of engagements at a time. The work only
              compounds when I am close enough to the team to build the system
              with them — so I would rather do this properly for a few companies
              than superficially for many.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
