import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const layers = [
  {
    title: 'Secure-by-Design AI Systems',
    description:
      'Threat models for LLM applications and agents, mapped to the OWASP LLM Top 10 and MITRE ATLAS. Trust boundaries, scoped tool permissions, isolation and human-in-the-loop checkpoints, all decided before code is written.',
    outcome: 'An injected prompt cannot escalate.',
  },
  {
    title: 'Model & Data Supply Chain',
    description:
      'Provenance for every model, dataset and fine-tune. Signed artifacts, lineage you can trace, and evaluation gates that block a regression or a poisoned model before it reaches production.',
    outcome: 'You can say exactly what is running, and why you trust it.',
  },
  {
    title: 'Governance as Code',
    description:
      'ISO 42001, ISO 27001, SOC 2 and the EU AI Act, turned into controls that run in your pipeline and produce evidence automatically. The policy is enforced by the system, not by memory.',
    outcome: 'Audit readiness is a permanent state, not a project.',
  },
  {
    title: 'AI-Augmented Defence',
    description:
      'Runtime monitoring for model behaviour, abuse and drift, plus AI agents that triage alerts, rank vulnerabilities and collect evidence, with a person approving anything consequential. This is the layer I build at AIFortess.',
    outcome: 'Your security team scales with compute instead of headcount.',
  },
]

const DomainsOfFocus = () => {
  return (
    <section id="architecture" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="03" title="The Architecture" align="center" />

        <Reveal>
          <p className="text-body text-saturn text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            Four layers that together make an AI system secure, provable and
            ready for enterprise buyers. Each one is designed to keep working
            after I hand it over.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
          {layers.map((layer, i) => (
            <Reveal key={layer.title} delay={(i % 2) * 0.08}>
              <div className="border-t border-rahu-border pt-6 space-y-4 h-full">
                <span className="font-mono text-xs text-varuna/70">
                  Layer {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-medium text-veil">{layer.title}</h3>
                <p className="text-saturn leading-relaxed">{layer.description}</p>
                <p className="text-varuna text-sm leading-relaxed">→ {layer.outcome}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DomainsOfFocus
