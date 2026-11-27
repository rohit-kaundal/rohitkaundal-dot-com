import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import {
  AIFORTESS_URL,
  AIFORTESS_AGENTS_URL,
  ASSESSMENT_URL,
  REPOS,
} from '../data/site'

// Everything here is shipped, public, or in use. Status says which.
const flagship = {
  name: 'AIFortess',
  status: 'Founder · In production',
  summary:
    'A company built around one idea: security teams should not spend their days on copy-paste work. AIFortess builds AI agents that take it on. Every agent is read-only by default, gets the narrowest access the job needs, and waits for a person before doing anything consequential.',
  stack: ['LLM agents', 'Tool use', 'Human-in-the-loop', 'Evidence pipelines'],
  agents: [
    {
      name: 'Exposure & Threat Intel',
      body: 'Watches your internet-facing footprint and reports what changed each week: exposed services, newly exploited CVEs, leaked credentials, lookalike domains.',
    },
    {
      name: 'Vulnerability Prioritization',
      body: 'Ranks thousands of scanner findings by known exploitation (KEV, EPSS), exposure and asset value, then drafts Jira or GitHub tickets for approval.',
    },
    {
      name: 'Compliance Evidence',
      body: 'Maps ISO 27001, ISO 42001, SOC 2 and UAE IAS controls to real systems, collects timestamped evidence on a schedule and flags drift.',
    },
    {
      name: 'AI Agent Security',
      body: 'Finds the agents and MCP servers running in a company, maps what each can reach, and tests whether it can be talked into misusing that access.',
    },
    {
      name: 'SOC Investigation',
      body: 'Works SIEM and EDR alerts like a Tier-1 analyst and writes a verdict with evidence. It never contains anything without approval. In development with design partners.',
    },
  ],
  links: [
    [AIFORTESS_AGENTS_URL, 'See the agents'],
    [AIFORTESS_URL, 'aifortess.com'],
  ],
}

const builds = [
  {
    name: 'k8s-scanner',
    status: 'Open source · Go',
    summary:
      'A Kubernetes security scanner that checks clusters against the CIS Kubernetes Benchmark and NIST SP 800-190. Rules live in JSON, so new checks need no code change. Output is text, JSON, YAML or HTML, ready to drop into CI.',
    stack: ['Go', 'Kubernetes', 'CIS', 'NIST 800-190'],
    links: [[REPOS.k8sScanner, 'View on GitHub']],
  },
  {
    name: 'digitalocean-mcp-server',
    status: 'Open source · Go',
    summary:
      'A Model Context Protocol server that gives AI agents 48 tools across seven DigitalOcean services: droplets, volumes, firewalls, load balancers, Kubernetes and the container registry. This is how an agent gets real infrastructure access through one interface you can audit.',
    stack: ['Go', 'MCP', 'Agents', 'Cloud APIs'],
    links: [[REPOS.doMcp, 'View on GitHub']],
  },
  {
    name: 'AIFortess Compass',
    status: 'Live · Free',
    summary:
      'An Agentic AI readiness scorecard: seventeen questions on deployment inventory, governance controls and regulatory readiness, built on OWASP\'s State of Agentic AI Security and Governance. Scored out of 100, with the one thing to fix next.',
    stack: ['OWASP Agentic AI', 'ISO 42001', 'Web app'],
    links: [[ASSESSMENT_URL, 'Get your score']],
  },
  {
    name: 'Hacker Cam',
    status: 'Side build · Python',
    summary:
      'A virtual camera for Zoom, Teams and Meet that plays a terminal "breach" intro and then switches to your real webcam, with live effects on hotkeys. A cross-platform desktop app with installers for macOS, Windows and Linux built by GitHub Actions. Built for fun, shipped properly anyway.',
    stack: ['Python', 'OpenGL', 'Virtual camera', 'CI packaging'],
    links: [[REPOS.hackerCam, 'View on GitHub']],
  },
]

const Tags = ({ items }) => (
  <ul className="flex flex-wrap gap-2" aria-label="Stack">
    {items.map((tag) => (
      <li
        key={tag}
        className="font-mono text-xs text-saturn border border-rahu-border px-2 py-1"
      >
        {tag}
      </li>
    ))}
  </ul>
)

const Links = ({ links }) => (
  <div className="flex flex-wrap gap-x-8 gap-y-2">
    {links.map(([href, label]) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-varuna hover:text-varuna-bright transition-colors"
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
)

const Status = ({ children }) => (
  <div className="font-mono text-xs uppercase tracking-doctrine text-saturn-dim mb-3">
    {children}
  </div>
)

const Builds = () => {
  return (
    <section id="builds" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="01" title="What I've Built" />

        <Reveal>
          <p className="text-body text-saturn max-w-2xl mb-16 leading-relaxed">
            Judge me by the code. These are running, public, or both.
          </p>
        </Reveal>

        <Reveal>
          <article className="border border-varuna/40 bg-rahu-deep/60 p-8 md:p-10 mb-16">
            <Status>{flagship.status}</Status>
            <h3 className="text-3xl font-light text-veil mb-4">{flagship.name}</h3>
            <p className="text-saturn leading-relaxed mb-6 max-w-3xl">{flagship.summary}</p>
            <div className="mb-8">
              <Tags items={flagship.stack} />
            </div>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 mb-8">
              {flagship.agents.map((agent) => (
                <div key={agent.name} className="border-t border-rahu-border pt-4">
                  <h4 className="text-lg font-medium text-veil/90 mb-1">{agent.name}</h4>
                  <p className="text-saturn text-base leading-relaxed">{agent.body}</p>
                </div>
              ))}
            </div>

            <Links links={flagship.links} />
          </article>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
          {builds.map((build, i) => (
            <Reveal key={build.name} delay={(i % 2) * 0.08}>
              <article className="border-t border-rahu-border pt-6 h-full flex flex-col">
                <Status>{build.status}</Status>
                <h3 className="text-2xl font-normal text-veil mb-3 font-mono">{build.name}</h3>
                <p className="text-saturn leading-relaxed mb-5">{build.summary}</p>
                <div className="mb-5">
                  <Tags items={build.stack} />
                </div>
                <div className="mt-auto">
                  <Links links={build.links} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Builds
