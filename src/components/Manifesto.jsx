import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const failures = [
  'Compliance is treated as an annual event. Enterprise risk is continuous.',
  'Security lives in documents instead of code. Documents enforce nothing.',
  'Governance belongs to no one — until a deal stalls, and it belongs to the founder.',
]

const Manifesto = () => {
  return (
    <section id="perspective" className="py-32 px-6">
      <div className="prose">
        <SectionHeading number="01" title="Perspective" />

        <div className="space-y-7 text-body leading-relaxed">
          <Reveal>
            <p className="text-xl text-veil/90">
              Something changed in the last two years. Enterprise buyers stopped
              asking AI companies for a certificate and started asking how the
              system actually works. Most teams have an answer for the first
              question and nothing for the second.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-saturn">
              I have watched the same three failures repeat, almost without
              exception:
            </p>
          </Reveal>

          {/* Numbered as clauses rather than bullets — this is a position, not a list. */}
          <ol className="space-y-5 my-10">
            {failures.map((failure, i) => (
              <Reveal key={failure} delay={0.1 + i * 0.07}>
                <li className="flex gap-5 items-baseline">
                  <span className="font-mono text-xs text-varuna/70 shrink-0 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-veil/85">{failure}</span>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <p>
              None of these are compliance problems. They are engineering
              problems wearing a compliance costume. So I stopped treating
              security as a document to produce and started treating it as a
              system to run — policy expressed as code, evidence generated
              automatically, controls that report their own state.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-saturn">
              That system is what I call a Cyber Operating System. Not a
              framework you adopt. Infrastructure you operate.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="pt-6">
              <hr className="oath-rule mb-8" />
              <p className="text-xl text-dharma font-light leading-relaxed">
                A checklist tells you what you had. An operating system tells you
                what you have.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Manifesto
