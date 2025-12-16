import React from 'react'

const Work = () => {
  const projects = [
    {
      title: 'AIFortess: Governance Infrastructure for AI Systems',
      description: 'A platform that operationalizes AI governance principles. AIFortess translates regulatory requirements into enforceable technical controls, generates compliance evidence, and maintains audit trails for model behavior. It exists because governance cannot be manual in an environment where AI deployments scale faster than oversight.',
      details: [
        'What it does: Codifies policies, automates risk assessment, tracks model provenance, and prepares organizations for regulatory examination.',
        'What it represents: The principle that AI systems must be governed the way financial systems are—with transparency, accountability, and institutional control.',
        'Status: In development. Early access available to qualifying organizations.'
      ],
      link: null
    },
    {
      title: 'Cyber Forensic Infrastructure for Law Enforcement',
      description: 'Designed and implemented digital forensic capabilities for law enforcement agencies, including mobile forensics, cybercrime investigation protocols, and evidence recovery systems. This work involved translating forensic science into operational governance for institutions operating under legal and evidentiary constraints.',
      details: [
        'Impact: Enabled prosecution of cybercrime cases by ensuring chain-of-custody, evidence integrity, and defensibility under legal scrutiny.'
      ],
      link: null
    },
    {
      title: 'Enterprise Security & Compliance Governance',
      description: 'Implemented information security management systems (ISO 27001, GDPR, PCI DSS) for regulated organizations. This work focused on institutional risk posture, not technical controls—designing governance frameworks that align security operations with fiduciary duty and regulatory expectations.',
      details: [
        'Outcome: Organizations achieved not just compliance, but defensible governance that withstands audit, investor due diligence, and regulatory examination.'
      ],
      link: null
    },
    {
      title: 'AI & Blockchain Security Advisory',
      description: 'Conducted security assessments for smart contracts, decentralized systems, and AI-driven platforms. This work addressed systemic risk in emerging technology environments where governance frameworks did not yet exist.',
      details: [
        'Approach: Defined threat models, accountability boundaries, and governance principles where none previously existed.'
      ],
      link: null
    },
    {
      title: 'k8s-scanner: Open-Source Kubernetes Security Assessment',
      description: 'An agentless security scanner for Kubernetes environments, focused on best practices validation and CVE detection. Released as open-source infrastructure for organizations that need to assess container security without vendor dependencies.',
      details: [
        'Philosophy: Security tooling should be transparent, auditable, and independent of commercial interests.'
      ],
      link: 'https://github.com/rohit-kaundal/k8s-scanner'
    }
  ]

  return (
    <section id="work" className="py-32 px-6">
      <div className="prose">
        <h2 className="text-4xl mb-12 font-light">Selected Work & Systems</h2>

        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.title} className="border-l-2 border-institutional-accent pl-8">
              <h3 className="text-2xl mb-4 font-normal">{project.title}</h3>

              <p className="text-institutional-white/70 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 text-institutional-white/60 text-sm">
                {project.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-institutional-accent hover:text-institutional-gold transition-colors"
                >
                  View Project →
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
