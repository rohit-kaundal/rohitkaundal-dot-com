import React from 'react'

const Work = () => {
  const projects = [
    {
      title: 'AIFortess — Governance Infrastructure for AI Systems',
      description: 'A platform that helps teams operationalize AI governance — translating regulatory intent into enforceable controls and audit-ready evidence.',
      products: [
        {
          name: 'AIFortess Assessor',
          summary: 'ISO 42001 readiness for small teams. Risk assessment, gap identification, and structured export workflows.'
        },
        {
          name: 'Vertias AI',
          summary: 'Cloud security posture across AWS, GCP, and Azure with CIS, SOC 2, and NIST scanning and AI-assisted remediation.'
        }
      ],
      details: [
        'Status: In active development. Early access available.'
      ],
      link: 'https://aifortess.com',
      linkLabel: 'Visit aifortess.com →'
    },
    {
      title: 'Cyber Forensic Systems',
      description: 'Designed and implemented forensic infrastructure for organizations operating under legal and evidentiary constraints — prioritizing defensibility, integrity, and chain-of-custody.',
      details: [],
      link: null
    },
    {
      title: 'Security & Compliance Frameworks',
      description: 'Built information security governance aligned with ISO 27001, GDPR, and related standards — with emphasis on operational risk posture over checkbox compliance.',
      details: [],
      link: null
    },
    {
      title: 'Open-Source Security Tooling',
      description: 'Released tools such as k8s-scanner — an agentless Kubernetes security scanner — to support transparent, auditable security practices without vendor dependency.',
      details: [],
      link: 'https://github.com/rohit-kaundal/k8s-scanner',
      linkLabel: 'View on GitHub →'
    }
  ]

  return (
    <section id="work" className="py-32 px-6">
      <div className="prose">
        <div className="mb-12">
          <div className="text-xs font-mono tracking-[0.2em] text-institutional-accent/70 mb-3">04</div>
          <h2 className="text-4xl font-light">Selected Work</h2>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.title} className="border-l-2 border-institutional-accent pl-8">
              <h3 className="text-2xl mb-4 font-normal">{project.title}</h3>

              <p className="text-institutional-white/70 mb-6 leading-relaxed">
                {project.description}
              </p>

              {project.products && (
                <div className="space-y-5 mb-6">
                  {project.products.map((product) => (
                    <div key={product.name}>
                      <h4 className="text-lg font-medium text-institutional-white/90 mb-1">
                        {product.name}
                      </h4>
                      <p className="text-institutional-white/65 text-base leading-relaxed">
                        {product.summary}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {project.details.length > 0 && (
                <div className="space-y-2 text-institutional-white/60 text-sm">
                  {project.details.map((detail, i) => (
                    <p key={i} className="italic">{detail}</p>
                  ))}
                </div>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-institutional-accent hover:text-institutional-gold transition-colors"
                >
                  {project.linkLabel || 'View project →'}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
