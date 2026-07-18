import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { AIFORTESS_URL, SOCIAL } from '../data/site'

const projects = [
  {
    title: 'AIFortess — Systems for AI Security and Governance',
    description:
      'A product-first company building tools and frameworks for teams working where AI, security, and governance meet. Not consulting, not generic AI — opinionated systems built for practitioners who need clarity.',
    products: [
      {
        name: 'AIFortess Assessor',
        summary:
          'A lightweight ISO 42001 readiness tool for independent consultants and small AI teams. Define AI systems, assess risks and controls, identify gaps, and export readiness insights — no spreadsheets, no enterprise bloat.',
      },
      {
        name: 'AIFortess Compass',
        summary:
          'A free 3-minute Agentic AI Readiness Scorecard. 17 questions across deployment inventory, governance controls, and regulatory readiness, scored out of 100 with a personalised next step. Based on OWASP State of Agentic AI Security and Governance 2.01.',
      },
    ],
    link: AIFORTESS_URL,
    linkLabel: 'Visit aifortess.com',
  },
  {
    title: 'Cyber Forensic Systems',
    description:
      'Forensic infrastructure for organisations operating under legal and evidentiary constraint — built for defensibility, integrity, and chain of custody.',
  },
  {
    title: 'Security & Compliance Frameworks',
    description:
      'Information security governance aligned to ISO 27001, GDPR, and related standards, weighted toward operational risk posture over checkbox compliance.',
  },
  {
    title: 'Open-Source Security Tooling',
    description:
      'Tools such as k8s-scanner, an agentless Kubernetes security scanner, released to support transparent and auditable security practice without vendor dependency.',
    link: `${SOCIAL.github}/k8s-scanner`,
    linkLabel: 'View on GitHub',
  },
]

const Work = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="prose">
        <SectionHeading number="04" title="Selected Work" />

        <div className="space-y-16">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <article className="border-l border-varuna/40 pl-8">
                <h3 className="text-2xl mb-4 font-normal text-veil">
                  {project.title}
                </h3>

                <p className="text-saturn mb-6 leading-relaxed">
                  {project.description}
                </p>

                {project.products && (
                  <div className="space-y-5 mb-6">
                    {project.products.map((product) => (
                      <div key={product.name}>
                        <h4 className="text-lg font-medium text-veil/90 mb-1">
                          {product.name}
                        </h4>
                        <p className="text-saturn text-base leading-relaxed">
                          {product.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 mt-2 text-varuna hover:text-varuna-bright transition-colors"
                  >
                    {project.linkLabel}
                    <span
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
