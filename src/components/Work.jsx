import React from 'react'

const Work = () => {
  const projects = [
    {
      title: 'AIFortess — Governance Infrastructure for AI Systems',
      description: 'A platform designed to help teams operationalize AI governance by translating regulatory intent into enforceable controls and audit-ready evidence.',
      details: [
        'Status: In development. Early access available.'
      ],
      link: null
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
      description: 'Released tools such as k8s-scanner to support transparent, auditable security practices without vendor dependency.',
      details: [],
      link: 'https://github.com/rohit-kaundal/k8s-scanner'
    }
  ]

  return (
    <section id="work" className="py-32 px-6">
      <div className="prose">
        <h2 className="text-4xl mb-12 font-light">Selected Work</h2>

        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.title} className="border-l-2 border-institutional-accent pl-8">
              <h3 className="text-2xl mb-4 font-normal">{project.title}</h3>

              <p className="text-institutional-white/70 mb-4 leading-relaxed">
                {project.description}
              </p>

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
