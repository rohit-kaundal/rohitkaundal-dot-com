import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { EMAIL, ASSESSMENT_URL, NEWSLETTER_URL } from '../data/site'

const steps = [
  {
    title: 'Get your score',
    body: 'Take the free AI Security Score. Three minutes, and you see your gaps whether or not we ever speak.',
  },
  {
    title: 'Send one email',
    body: 'Tell me your stage, your AI stack, and which deal is stuck or at risk. No form, no gatekeeper. It reaches me directly.',
  },
  {
    title: 'Get a straight answer',
    body: 'I reply with whether a sprint is the right fit, what it would fix first, and what it costs. If it is not the right fit, I will tell you that too.',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="prose">
        <SectionHeading number="08" title="Start Here" />

        <Reveal>
          <p className="text-xl text-veil/90 mb-12 leading-relaxed">
            Every week your AI ships without a security architecture, the cost of
            adding one later goes up. Here is the shortest path to fixing that.
          </p>
        </Reveal>

        <ol className="space-y-8 mb-14">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05}>
              <li className="flex gap-5 items-baseline">
                <span className="font-mono text-xs text-varuna/70 shrink-0 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-veil mb-1">{step.title}</h3>
                  <p className="text-saturn text-base leading-relaxed">{step.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.05}>
          <a
            href={ASSESSMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-baseline gap-3 text-2xl lg:text-3xl font-light text-varuna hover:text-varuna-bright transition-colors"
          >
            Get your free AI Security Score
            <span
              className="text-lg transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8">
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
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-body text-saturn mt-14 leading-relaxed">
            Not ready yet? Read{' '}
            <a
              href={NEWSLETTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-varuna hover:text-varuna-bright transition-colors border-b border-varuna/30 hover:border-varuna"
            >
              The Cyber Operating System
            </a>
            , my newsletter on AI security architecture: the patterns, the
            failures and the controls that work, sent before your buyers start
            asking about them.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <hr className="oath-rule mb-8" />
            <p className="text-lg text-dharma font-light leading-relaxed">
              I take a small number of engagements at a time. I would rather
              architect this properly for a few companies than superficially for
              many.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
