import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const domains = [
  {
    title: 'Continuous Governance',
    description:
      'Point-in-time compliance proves you were secure on one day last year. Continuous governance proves it today. Controls that run on a schedule, generate their own evidence, and fail loudly when they drift.',
  },
  {
    title: 'Security Engineering',
    description:
      'Policy as code, not policy as PDF. A control that lives in a document depends on someone remembering it. A control that lives in the pipeline enforces itself whether anyone is watching or not.',
  },
  {
    title: 'AI Governance',
    description:
      'Model provenance, data lineage, evaluation records, and clear accountability for system behaviour. Enterprise buyers are starting to ask how your AI makes decisions. That answer has to exist before they ask.',
  },
  {
    title: 'Enterprise Trust',
    description:
      'Trust is not a feeling. It is evidence a buyer can verify without taking your word for it. The goal is a security review that shortens the sales cycle instead of stalling it.',
  },
]

const DomainsOfFocus = () => {
  return (
    <section id="domains" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="02" title="Four Layers of the System" align="center" />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
          {domains.map((domain, i) => (
            <Reveal key={domain.title} delay={(i % 2) * 0.08}>
              <div className="border-t border-rahu-border pt-6 space-y-4 h-full">
                <h3 className="text-xl font-medium text-veil">{domain.title}</h3>
                <p className="text-saturn leading-relaxed">{domain.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DomainsOfFocus
