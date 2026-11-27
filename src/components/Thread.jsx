import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// The ideas that keep turning up across the builds, each with the evidence.
const threads = [
  {
    idea: 'Least privilege, everywhere.',
    body: 'Vertias gives each agent an explicit allowlist and nothing else. Handler applies the same rule to attention: in execution, every other part of your life is unreachable.',
    seen: ['Vertias', 'Handler'],
  },
  {
    idea: 'Humans decide the consequential things.',
    body: 'Automation should take the tedious work. When an agent wants to do something irreversible, or an assessment needs a judgement call, a person makes it.',
    seen: ['Vertias', 'AIFortess', 'Assessor'],
  },
  {
    idea: 'Fail closed, keep the record.',
    body: 'Fifteen years of forensics taught me that the worst incidents are the ones nobody can reconstruct. So decisions get logged, evidence gets linked, and errors default to "no".',
    seen: ['Vertias', 'Assessor'],
  },
  {
    idea: 'Your data stays yours.',
    body: 'Handler has no account, no server and no network calls. Hacker Cam’s telemetry is off until you say yes, and it never sends video, images or anything you type.',
    seen: ['Handler', 'Hacker Cam'],
  },
  {
    idea: 'Ship it properly.',
    body: 'Even a joke project gets installers for three operating systems, a CI pipeline and a privacy policy. How you build the small things is how you build the big ones.',
    seen: ['Hacker Cam'],
  },
]

const Thread = () => (
  <section id="thread" className="relative px-6 lg:px-10 py-28 lg:py-40 border-t border-rahu-border">
    <div className="max-w-7xl mx-auto">
      <SectionHeading number="04" eyebrow="The thread">
        What carries across <span className="voice text-varuna">everything</span> I build.
      </SectionHeading>

      <ol className="border-t border-rahu-border">
        {threads.map((t, i) => (
          <Reveal as="li" key={t.idea} delay={i * 0.04}>
            <div className="group grid md:grid-cols-12 gap-4 md:gap-10 py-9 border-b border-rahu-border">
              <span className="md:col-span-1 font-mono text-xs text-saturn-dim pt-2">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="md:col-span-4 text-2xl lg:text-3xl font-light text-veil leading-snug group-hover:text-varuna transition-colors duration-200">
                {t.idea}
              </h3>
              <p className="md:col-span-5 text-saturn leading-relaxed">{t.body}</p>
              <ul className="md:col-span-2 flex md:flex-col flex-wrap gap-x-4 gap-y-1 md:items-end pt-1">
                {t.seen.map((s) => (
                  <li key={s} className="label !text-[0.625rem] !tracking-[0.14em]">{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
)

export default Thread
