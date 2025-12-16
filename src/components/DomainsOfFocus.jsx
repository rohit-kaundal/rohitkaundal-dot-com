import React from 'react'

const DomainsOfFocus = () => {
  const domains = [
    {
      title: 'AI Governance & Model Security',
      description: 'Defining the standards, controls, and accountability structures that make AI systems auditable and defensible. This includes adversarial robustness, model provenance, training data governance, and post-deployment risk management.'
    },
    {
      title: 'Cyber Risk & Institutional Accountability',
      description: 'Translating technical vulnerabilities into board-level risk language. Designing governance frameworks that align security postures with fiduciary duty, regulatory expectations, and enterprise risk tolerance.'
    },
    {
      title: 'Regulatory Readiness for Intelligent Systems',
      description: 'Preparing organizations for AI-specific compliance regimes—EU AI Act, algorithmic accountability laws, sector-specific regulations. Building documentation, audit trails, and control environments before mandates arrive.'
    },
    {
      title: 'Secure Intelligence Infrastructure',
      description: 'Architecting cloud and data environments that support AI workloads while maintaining confidentiality, integrity, and sovereignty. Addressing supply chain risk, vendor dependencies, and cross-border data governance.'
    }
  ]

  return (
    <section id="domains" className="py-32 px-6 bg-institutional-hover">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mb-16 text-center font-light">
          Domains of Focus
        </h2>

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
