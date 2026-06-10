import React from 'react'

const DomainsOfFocus = () => {
  const domains = [
    {
      title: 'AI Governance & Model Security',
      description: 'Exploring the controls, documentation practices, and accountability structures that make AI systems auditable and defensible. This includes work on adversarial robustness, model provenance, training data integrity, and post-deployment risk.'
    },
    {
      title: 'Cyber Risk & Decision Support',
      description: 'Translating technical vulnerabilities into language that supports governance decisions. Designing structures that help technical leaders and operators understand exposure, responsibility, and control boundaries.'
    },
    {
      title: 'Regulatory Interpretation',
      description: 'Helping teams prepare for emerging AI-specific regulations by building documentation, audit trails, and governance practices before enforcement timelines arrive.'
    },
    {
      title: 'Secure Intelligence Infrastructure',
      description: 'Designing cloud and data environments that support AI workloads while addressing confidentiality, integrity, supply chain risk, and cross-border data considerations.'
    }
  ]

  return (
    <section id="domains" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <div className="text-xs font-mono tracking-[0.2em] text-institutional-accent/70 mb-3">02</div>
          <h2 className="text-4xl font-light">Domains of Focus</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {domains.map((domain) => (
            <div key={domain.title} className="space-y-4">
              <h3 className="text-xl font-medium">{domain.title}</h3>
              <p className="text-institutional-white/70 leading-relaxed">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DomainsOfFocus
