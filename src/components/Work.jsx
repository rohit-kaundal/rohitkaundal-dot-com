import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { AIFORTESS_URL, SOCIAL } from '../data/site'

const projects = [
  {
    title: 'AIFortess — The Cyber Operating System, as Software',
    description:
      'Everything I argue for on this page, built into a product. AIFortess turns governance into something a team runs rather than something a consultant delivers. Policy becomes code. Evidence generates itself. Readiness becomes a number you can check on a Tuesday.',
    products: [
      {
        name: 'AIFortess Assessor',
        summary:
          'ISO 42001 readiness for AI teams and independent advisors. Map your AI systems, assess risks and controls, see the gaps, export the evidence. No spreadsheets. No enterprise bloat.',
      },
      {
        name: 'AIFortess Compass',
        summary:
          'A free 3-minute Agentic AI Readiness Scorecard. 17 questions across deployment inventory, governance controls, and regulatory readiness — scored out of 100, with the one thing to fix next. Built on the OWASP State of Agentic AI Security and Governance 2.01.',
      },
    ],
    link: AIFORTESS_URL,
    linkLabel: 'Visit aifortess.com',
  },
  {
    title: 'Enterprise Readiness for AI Companies',
    description:
      'Seed to Series B teams whose enterprise pipeline was blocked by security review. The work is the same each time: find what the buyer actually needs proven, build the system that proves it continuously, and hand the team something they can operate without me.',
  },
  {
    title: 'Governance That Survives Contact',
    description:
      'ISO 27001, ISO 42001, SOC 2, GDPR — implemented as running controls rather than binders. The certificate is a by-product. The operating system is the deliverable, and it is still true the day after the audit closes.',
  },
  {
    title: 'Open-Source Security Tooling',
    description:
      'k8s-scanner, an agentless Kubernetes security scanner, released free. Automation that only works when you pay for it is not automation. It is a subscription to someone else’s leverage.',
    link: `${SOCIAL.github}/k8s-scanner`,
    linkLabel: 'View on GitHub',
  },
]

const Work = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="prose">
        <SectionHeading number="04" title="What I've Built" />

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
