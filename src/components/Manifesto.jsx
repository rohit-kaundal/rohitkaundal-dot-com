import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// The new attack surface: what AI added that the old security programme never modelled.
const surface = [
  {
    name: 'Agents with real permissions',
    body: 'An agent that can call tools can be talked into calling the wrong one. Prompt injection is no longer a chatbot curiosity. It is remote code execution in plain English.',
  },
  {
    name: 'A model supply chain nobody audits',
    body: 'Weights from public hubs, datasets of unknown origin, fine-tunes with no lineage. Most teams cannot say where their model came from or what it was trained on.',
  },
  {
    name: 'Data leaking through context',
    body: 'RAG pipelines and long context windows move customer data into places your access controls never reach. The leak looks like a helpful answer.',
  },
  {
    name: 'Decisions nobody can reconstruct',
    body: 'When an autonomous system acts and something goes wrong, you need the prompt, the context, the model version and the tool call. Most logs keep none of them.',
  },
]

const costs = [
  'The enterprise deal that stalls in procurement for a quarter.',
  'The incident your team cannot explain to the customer, or to the board.',
  'The regulator asking for EU AI Act and ISO 42001 evidence you never produced.',
]

const Manifesto = () => {
  return (
    <section id="problem" className="py-32 px-6">
      <div className="prose">
        <SectionHeading number="01" title="The Problem" />

        <div className="space-y-7 text-body leading-relaxed">
          <Reveal>
            <p className="text-xl text-veil/90">
              Every AI feature you ship adds attack surface your security
              programme was never designed for. Firewalls, SOC 2 and a pen test
              were built for deterministic software. Your product is not
              deterministic any more.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-saturn">
              There are four new exposures. Most AI companies are covering none
              of them:
            </p>
          </Reveal>

          <div className="space-y-8 my-10">
            {surface.map((item, i) => (
              <Reveal key={item.name} delay={0.05 + i * 0.06}>
                <div className="flex gap-5 items-baseline">
                  <span className="font-mono text-xs text-varuna/70 shrink-0 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-veil mb-1">{item.name}</h3>
                    <p className="text-saturn text-base leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-veil/90">
              Ignoring it does not make it free. The cost just shows up later, in
              one of three places:
            </p>
          </Reveal>

          <ul className="space-y-3 border-l border-varuna/30 pl-6">
            {costs.map((cost, i) => (
              <Reveal key={cost} delay={i * 0.05}>
                <li className="text-saturn">{cost}</li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.05}>
            <div className="pt-6">
              <hr className="oath-rule mb-8" />
              <p className="text-xl text-dharma font-light leading-relaxed">
                Security added after launch is the most expensive security you
                will ever buy. Security designed in costs almost nothing extra.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Manifesto
