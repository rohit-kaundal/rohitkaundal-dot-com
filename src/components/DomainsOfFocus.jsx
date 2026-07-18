import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const domains = [
  {
    title: 'AI Governance & Model Security',
    description:
      'The controls, documentation practices, and accountability structures that make AI systems auditable and defensible — adversarial robustness, model provenance, training data integrity, and post-deployment risk.',
  },
  {
    title: 'Cyber Risk & Decision Support',
    description:
      'Translating technical vulnerabilities into language that supports governance decisions, so technical leaders and operators can see exposure, responsibility, and control boundaries clearly.',
  },
  {
    title: 'Regulatory Interpretation',
    description:
      'Preparing teams for emerging AI-specific regulation by building documentation, audit trails, and governance practice ahead of enforcement timelines rather than behind them.',
  },
  {
    title: 'Secure Intelligence Infrastructure',
    description:
      'Cloud and data environments built for AI workloads that hold up under confidentiality, integrity, supply chain, and cross-border data pressure.',
  },
]

const DomainsOfFocus = () => {
  return (
    <section id="domains" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="02" title="Domains of Focus" align="center" />

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
