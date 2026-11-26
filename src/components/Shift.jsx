import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// 2x thinking optimises the existing process. 10x thinking removes the need for it.
const shifts = [
  {
    old: 'Answer security questionnaires faster.',
    next: 'Publish a trust architecture buyers can verify, so the questionnaire becomes a formality.',
  },
  {
    old: 'Put an LLM firewall in front of the model.',
    next: 'Give agents least-privilege tools and hard trust boundaries, so an injected prompt finds nothing worth taking.',
  },
  {
    old: 'Hire another analyst to triage alerts.',
    next: 'AI agents triage and humans decide. Defence that grows with compute, not headcount.',
  },
  {
    old: 'Spend a month preparing for the audit.',
    next: 'Controls that emit their own evidence. The audit becomes a query.',
  },
  {
    old: 'Write an AI acceptable-use policy.',
    next: 'Policy as code, enforced in CI/CD and at inference time, whether or not anyone remembers it.',
  },
]

const Shift = () => {
  return (
    <section id="shift" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="02" title="The 10x Shift" align="center" />

        <Reveal>
          <p className="text-body text-saturn text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            Most security advice makes the current process a little better. That
            gets you 2x at best. A 10x result comes from asking a different
            question: what would make this work unnecessary?
          </p>
        </Reveal>

        <div className="hidden md:grid grid-cols-2 gap-12 mb-6 px-1">
          <div className="doctrine-label">
            <span>2x</span>
            <span>Incremental</span>
          </div>
          <div className="doctrine-label">
            <span className="veil-ring" aria-hidden="true" />
            <span>10x</span>
            <span>Architectural</span>
          </div>
        </div>

        <div className="space-y-0">
          {shifts.map((row, i) => (
            <Reveal key={row.old} delay={i * 0.05}>
              <div className="grid md:grid-cols-2 gap-3 md:gap-12 border-t border-rahu-border py-7">
                <p className="text-saturn-dim leading-relaxed">
                  <span className="md:hidden font-mono text-xs mr-2">2x</span>
                  <span className="line-through decoration-saturn-dim/40">{row.old}</span>
                </p>
                <p className="text-veil/90 leading-relaxed">
                  <span className="md:hidden font-mono text-xs text-varuna mr-2">10x</span>
                  {row.next}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <hr className="oath-rule mb-8" />
            <p className="text-xl text-dharma font-light leading-relaxed">
              You don&apos;t get 10x by working ten times harder on security. You
              get it by designing the problem out of the system.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Shift
