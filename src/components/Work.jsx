import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { AIFORTESS_URL, AIFORTESS_AGENTS_URL, ASSESSMENT_URL, SOCIAL } from '../data/site'

const credentials = [
  { value: '15 years', label: 'Pentesting, forensics, DevSecOps and SOC' },
  { value: 'CSA', label: 'AI Trustworthy Pledge signatory' },
  { value: 'Hub71', label: 'Perks & Services partner' },
  { value: 'Dubai', label: 'Built here, serving the GCC' },
]

const projects = [
  {
    title: 'AIFortess: AI agents that do cybersecurity work',
    description:
      'The architecture I recommend, built into a company. AIFortess builds AI agents that take the endless, copy-paste work off security teams: alert triage, scanner exports, audit evidence and questionnaires. Every agent runs with least-privilege access, read-only by default, and a person approves anything consequential.',
    products: [
      {
        name: 'Exposure & Threat Intel Agent',
        summary:
          'Watches everything about your company that is visible from the internet and reports each week what changed and what matters: exposed services, newly exploited CVEs, leaked credentials and lookalike domains.',
      },
      {
        name: 'Vulnerability Prioritization Agent',
        summary:
          'Turns thousands of scanner findings into a short fix list ranked by known exploitation (KEV, EPSS), exposure and asset value, with Jira or GitHub tickets drafted for approval.',
      },
      {
        name: 'Compliance Evidence Agent',
        summary:
          'Maps ISO 27001, ISO 42001, SOC 2 or UAE IAS controls to your systems, collects timestamped evidence on a schedule, flags drift and drafts questionnaire answers that cite their sources.',
      },
      {
        name: 'AI Agent Security Agent',
        summary:
          'Finds the AI agents and MCP servers running in your company, maps what each can reach against OWASP Agentic AI guidance, and tests whether it can be talked into misusing that access.',
      },
      {
        name: 'SOC Investigation Agent',
        summary:
          'Investigates SIEM and EDR alerts the way a Tier-1 analyst would, and writes a verdict with evidence and a recommended next step. It never contains anything without approval. Currently being built with design partners.',
      },
    ],
    note: 'Companies start with a fixed-fee, 14-day pilot on one workflow. The success metric is agreed in writing on Day 1. If the agent does not hit it, AIFortess keeps working at no charge, and refunds the fee if it still cannot.',
    link: AIFORTESS_AGENTS_URL,
    linkLabel: 'See the agents',
    secondaryLink: AIFORTESS_URL,
    secondaryLabel: 'Visit aifortess.com',
  },
  {
    title: 'AIFortess Compass and Assessor',
    description:
      'Compass is a free Agentic AI Readiness Scorecard: seventeen questions on deployment inventory, governance controls and regulatory readiness, built on the OWASP State of Agentic AI Security and Governance. Assessor takes ISO 42001 readiness out of spreadsheets for AI teams and independent advisors.',
    link: ASSESSMENT_URL,
    linkLabel: 'Get your free score',
  },
  {
    title: 'Enterprise readiness for AI companies',
    description:
      'Seed to Series B teams whose enterprise pipeline was blocked by security review. Each time the approach is the same: find out what the buyer actually needs proven, design the architecture that proves it, and hand over a system the team can run without me.',
  },
  {
    title: 'Frameworks implemented as running controls',
    description:
      'ISO 27001, ISO 42001, SOC 2 and GDPR, implemented as controls that run, not as binders on a shelf. The certificate is a by-product. The architecture is what I deliver, and it is still accurate the day after the audit closes.',
  },
  {
    title: 'Open-source security tooling',
    description:
      'k8s-scanner, an agentless Kubernetes security scanner, released for free. Infrastructure security is the foundation every AI workload runs on.',
    link: `${SOCIAL.github}/k8s-scanner`,
    linkLabel: 'View on GitHub',
  },
]

const Work = () => {
  return (
    <section id="proof" className="py-32 px-6">
      <div className="prose">
        <SectionHeading number="05" title="Proof, Not Promises" />

        <Reveal>
          <p className="text-body text-saturn mb-14 leading-relaxed">
            Anyone can call themselves an architect. Judge me by what I have
            built and released.
          </p>
        </Reveal>

        <Reveal>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
            {credentials.map((item) => (
              <div key={item.value} className="border-t border-rahu-border pt-3">
                <dt className="text-xl text-veil font-light">{item.value}</dt>
                <dd className="text-xs text-saturn leading-relaxed mt-1">{item.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

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

                {project.note && (
                  <p className="text-sm text-dharma/90 leading-relaxed mb-6 border-l border-dharma/40 pl-4">
                    {project.note}
                  </p>
                )}

                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  {[
                    [project.link, project.linkLabel],
                    [project.secondaryLink, project.secondaryLabel],
                  ]
                    .filter(([href]) => href)
                    .map(([href, label]) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 mt-2 text-varuna hover:text-varuna-bright transition-colors"
                      >
                        {label}
                        <span
                          className="transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </a>
                    ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
