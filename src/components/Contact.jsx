import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { EMAIL } from '../data/site'

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="prose">
        <SectionHeading number="05" title="Contact" />

        <Reveal>
          <p className="text-body text-saturn mb-10 leading-relaxed">
            If this work resonates — whether you are building AI systems, advising
            teams through governance, or working these problems independently — I
            am open to the conversation. Email reaches me directly.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-baseline gap-3 text-2xl lg:text-3xl font-light text-varuna hover:text-varuna-bright transition-colors"
          >
            {EMAIL}
            <span
              className="text-lg transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <hr className="oath-rule mb-8" />
            <p className="text-lg text-dharma font-light leading-relaxed">
              This is institutional work — not project-based consulting. I take on
              engagements where the governance question is real and the outcome has
              to hold up under scrutiny.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
