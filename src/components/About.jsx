import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="prose">
        <div className="mb-12">
          <div className="text-xs font-mono tracking-[0.2em] text-institutional-accent/70 mb-3">03</div>
          <h2 className="text-4xl font-light">About</h2>
        </div>

        <div className="space-y-6 text-body leading-relaxed">
          <p>
            I believe the hardest part of AI security is not the technology —
            it is the absence of clear governance under pressure.
          </p>

          <p>
            I began my career in digital forensics, cybercrime investigation, and
            infrastructure security. That work taught me how systems fail, how
            adversaries exploit ambiguity, and how governance collapses when
            accountability is unclear.
          </p>

          <p>
            Over time, my focus shifted toward translating that operational reality
            into practical frameworks — structures that help teams reason about AI
            risk before incidents, audits, or regulations force the conversation.
          </p>

          <p>
            This perspective led to AIFortess — a platform I'm building to codify
            governance concepts into usable systems. The platform exists to support
            governance, not replace it.
          </p>

          <p className="text-institutional-white/60 italic">
            Tools operationalize decisions.
            They do not make them.
          </p>

          <hr className="border-institutional-border my-12" />

          <h3 className="text-2xl mb-6">The Questions I'm Working On</h3>

          <ul className="space-y-2 list-disc list-inside">
            <li>How can an organization demonstrate AI accountability before compliance standards fully mature?</li>
            <li>What does "defensible AI" mean beyond penetration testing?</li>
            <li>How should responsibility be defined when intelligent systems fail?</li>
            <li>How can governance keep pace when AI systems evolve faster than oversight?</li>
          </ul>

          <p className="text-institutional-white/60 italic mt-8">
            This work is systems-oriented, not transactional.
            It prioritizes clarity, structure, and long-term defensibility.
          </p>

          <hr className="border-institutional-border my-12" />

          <h3 className="text-2xl mb-6">Background</h3>

          <p>
            My work is grounded in over a decade of operational security experience —
            forensics, infrastructure security, and regulated environments.
          </p>

          <p>
            I hold certifications in information security management, network security,
            penetration testing, and data protection. These inform my thinking — but
            they are not the foundation of it.
          </p>

          <p className="text-institutional-white/60 italic">
            Governance frameworks endure because they reflect reality, not credentials.
          </p>

          <hr className="border-institutional-border my-12" />

          <h3 className="text-2xl mb-6">How I Work</h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-medium mb-2">Governance Design</h4>
              <p className="text-institutional-white/70">
                Working with technical leaders to design AI risk postures, accountability
                structures, and governance approaches suited to real-world constraints.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Security Reasoning for AI Systems</h4>
              <p className="text-institutional-white/70">
                Developing threat models for AI systems — including adversarial manipulation,
                data poisoning, and inference risks — and translating research into practical
                security thinking.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Regulatory Translation</h4>
              <p className="text-institutional-white/70">
                Helping teams interpret emerging AI regulations and convert them into
                governance requirements that make sense operationally, not just on paper.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Readiness Assessments</h4>
              <p className="text-institutional-white/70">
                Evaluating whether governance, documentation, and controls can withstand
                scrutiny — regulatory, investor, or adversarial.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Platform-Supported Governance</h4>
              <p className="text-institutional-white/70">
                For practitioners who need governance operationalized consistently, AIFortess
                provides infrastructure to codify policies, generate evidence, and maintain
                audit trails for AI systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
