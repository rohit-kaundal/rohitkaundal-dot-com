import React from 'react'

const Work = () => {
  const projects = [
    {
      title: 'AIFortess — Systems for AI Security and Governance',
      description: 'A product-first company building tools and frameworks for teams working at the intersection of AI, security, and governance. Not consulting, not generic AI — opinionated systems built for practitioners who need clarity.',
      products: [
        {
          name: 'AIFortess Assessor',
          summary: 'A lightweight ISO 42001 readiness tool for independent consultants and small AI teams. Define AI systems, assess risks and controls, identify gaps, and export readiness insights — no spreadsheets, no enterprise bloat.'
        },
        {
          name: 'Vertias AI',
          summary: 'An AI agent authorization and governance platform. Sits between your AI agents and the tools they use — enforcing least privilege, routing risky actions to humans for approval, and keeping a tamper-evident audit trail of every action. Built for teams deploying agents in production who need real control. Waitlist open at vertias.ai.'
        },
        {
          name: 'AIFortess Compass',
          summary: 'A free 3-minute Agentic AI Readiness Scorecard for AI and security leaders. 17 questions across deployment inventory, governance controls, and regulatory readiness. Instant score out of 100 with a personalized next step. Based on OWASP State of Agentic AI Security and Governance 2.01.'
        }
      ],
      details: [],
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
