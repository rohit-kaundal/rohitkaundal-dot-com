import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { EMAIL, ASSESSMENT_URL, AIFORTESS_PILOT_URL } from '../data/site'

// Grand-slam offer: one named outcome and a stack of deliverables, each tied to
// the problem it removes.
const stack = [
  {
    name: 'AI Threat Model',
    body: 'Every model, agent, tool and data flow mapped against the OWASP LLM Top 10 and MITRE ATLAS, ranked by business impact rather than by CVSS score.',
    removes: 'Removes: "We don\'t know what we\'re exposed to."',
  },
  {
    name: 'Target Security Architecture',
    body: 'A reference architecture for your actual stack: trust boundaries, identity for agents, guardrails, logging and isolation. Your engineers can build directly from it.',
    removes: 'Removes: "We don\'t know what good looks like."',
  },
  {
    name: 'Enterprise Answer Pack',
    body: 'Architecture diagrams, an AI governance narrative and a pre-answered security questionnaire that your sales team can send the same day a buyer asks.',
    removes: 'Removes: the six-week security-review stall.',
  },
  {
    name: 'Governance-as-Code Starter',
    body: 'Your first controls running in CI/CD, mapped to ISO 42001 and SOC 2 and producing evidence from day one.',
    removes: 'Removes: the scramble before every audit.',
  },
  {
    name: '90-Day Roadmap',
    body: 'What to build next, ranked by revenue at risk, so your team never spends a sprint on a control that does not matter.',
    removes: 'Removes: security work that does not move the business.',
  },
]

const ladder = [
  {
    tier: 'Start here · Free',
    name: 'AI Security Score',
    body: 'Seventeen questions, three minutes, scored out of 100, with the single most important thing to fix next.',
    href: ASSESSMENT_URL,
    cta: 'Take the assessment',
    external: true,
  },
  {
    tier: 'Core',
    name: 'AI Security Architecture Sprint',
    body: 'The full stack above, delivered with your team. You finish with a working architecture, not a slide deck.',
    href: `mailto:${EMAIL}?subject=Architecture%20Sprint`,
    cta: 'Apply for a sprint',
    featured: true,
  },
  {
    tier: 'Ongoing',
    name: 'Fractional AI Security Architect',
    body: 'Security judgement in your engineering leadership meetings, without a full-time hire. I own the security story for buyers and keep the architecture moving with the product.',
    href: `mailto:${EMAIL}?subject=Fractional%20AI%20Security%20Architect`,
    cta: 'Ask about availability',
  },
  {
    tier: 'Product · via AIFortess',
    name: '14-Day AI Agent Pilot',
    body: 'Your security team is drowning in routine work rather than missing an architecture? AIFortess puts an AI agent on one workflow (alert triage, vulnerability ranking, audit evidence or questionnaires) for a fixed fee from AED 4,900. The success metric is agreed on Day 1, or you don\'t pay.',
    href: AIFORTESS_PILOT_URL,
    cta: 'See the pilot',
    external: true,
  },
]

const forYou = [
  'You sell an AI product, or use AI heavily, and your buyers are enterprises.',
  'A deal has stalled, or is about to stall, in security review.',
  'You ship agents, RAG or fine-tuned models into production.',
  'You want a system your team runs, not a report it files.',
]

const notForYou = [
  'You need a certificate as cheaply as possible and nothing else.',
  'You want someone to fill in a questionnaire for you.',
  'You are not ready to let security change how you build.',
]

const Offer = () => {
  return (
    <section id="offer" className="py-32 px-6">
      <div className="prose">
        <SectionHeading number="04" title="The Offer" />

        <Reveal>
          <p className="text-xl text-veil/90 leading-relaxed mb-6">
            The AI Security Architecture Sprint.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-body text-saturn leading-relaxed mb-14">
            A fixed-scope engagement that takes an AI product from &ldquo;we
            think it&apos;s secure&rdquo; to an architecture you can defend in
            front of any enterprise buyer, auditor or board, with the first
            controls already running.
          </p>
        </Reveal>

        <Reveal>
          <h3 className="text-2xl mb-8 text-veil font-light">What you get</h3>
        </Reveal>

        <div className="space-y-10">
          {stack.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <div className="border-l border-varuna/30 pl-6">
                <h4 className="text-lg font-medium mb-2 text-veil">
                  <span className="font-mono text-xs text-varuna/70 mr-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.name}
                </h4>
                <p className="text-saturn text-base leading-relaxed mb-2">{item.body}</p>
                <p className="text-sm text-varuna/90">{item.removes}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Risk reversal. */}
        <Reveal>
          <div className="mt-16 border border-dharma/40 p-8">
            <div className="doctrine-label mb-4">
              <span className="veil-ring" aria-hidden="true" />
              <span>The Guarantee</span>
            </div>
            <p className="text-lg text-dharma font-light leading-relaxed">
              If your team cannot hand the Answer Pack to an enterprise buyer at
              the end of the sprint, I keep working with you until you can, at
              no extra cost. The risk sits with me, not with you.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <Reveal>
            <h3 className="text-xl mb-5 text-veil font-light">This is for you if</h3>
            <ul className="space-y-3">
              {forYou.map((line) => (
                <li key={line} className="flex gap-3 text-saturn text-base leading-relaxed">
                  <span className="text-varuna shrink-0" aria-hidden="true">✓</span>
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="text-xl mb-5 text-veil font-light">It is not for you if</h3>
            <ul className="space-y-3">
              {notForYou.map((line) => (
                <li key={line} className="flex gap-3 text-saturn-dim text-base leading-relaxed">
                  <span className="shrink-0" aria-hidden="true">×</span>
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <h3 className="text-2xl mt-20 mb-8 text-veil font-light">Four ways in</h3>
        </Reveal>

        <div className="space-y-6">
          {ladder.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <div
                className={`p-6 border transition-colors duration-200 ${
                  item.featured
                    ? 'border-varuna/50 bg-rahu-deep/60'
                    : 'border-rahu-border hover:border-varuna/30'
                }`}
              >
                <div className="font-mono text-xs uppercase tracking-doctrine text-saturn-dim mb-2">
                  {item.tier}
                </div>
                <h4 className="text-xl text-veil mb-2">{item.name}</h4>
                <p className="text-saturn text-base leading-relaxed mb-4">{item.body}</p>
                <a
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group inline-flex items-center gap-2 text-varuna hover:text-varuna-bright transition-colors"
                >
                  {item.cta}
                  <span
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-saturn-dim text-sm mt-8 leading-relaxed">
            I run a small number of sprints each quarter, because the work only
            compounds when I am close enough to build it with your team.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Offer
