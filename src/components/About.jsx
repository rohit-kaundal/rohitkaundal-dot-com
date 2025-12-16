import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="prose">
        <h2 className="text-4xl mb-12 font-light">About</h2>

        <div className="space-y-6 text-body leading-relaxed">
          <p>
            I believe that AI governance is the defining security challenge of this decade.
          </p>

          <p>
            Not because AI is inherently dangerous—but because organizations are
            deploying intelligent systems without the institutional architecture
            to govern them.
          </p>

          <p>
            They lack accountability frameworks for model behavior. They lack risk
            postures that account for adversarial AI. They lack regulatory readiness
            for AI-specific compliance regimes. They lack the ability to audit what
            their models learn, use, and expose.
          </p>

          <p>My work addresses this gap.</p>

          <hr className="border-institutional-border my-12" />

          <p>
            I spent the first decade of my career in digital forensics, cybercrime
            investigation, and infrastructure security—learning how systems fail,
            how adversaries think, and how governance collapses under pressure.
          </p>

          <p>
            The second decade has been spent translating that operational reality
            into governance doctrine: designing frameworks that allow boards,
            regulators, and technical leaders to make defensible decisions about AI risk.
          </p>

          <p>
            This is not about tools. Tools operationalize governance—they do not create it.
          </p>

          <p>
            AIFortess, the platform I built, emerged from this principle: governance
            must be codified, not improvised. It translates regulatory intent into
            enforceable technical controls, allowing organizations to govern AI systems
            the way they govern financial systems—with transparency, accountability,
            and auditability.
          </p>

          <p>
            But the platform is secondary. The primary work is defining what "secure AI"
            actually means in a world where regulators, adversaries, and enterprises
            are all moving at different speeds.
          </p>

          <hr className="border-institutional-border my-12" />

          <p className="font-medium">
            I advise organizations that need to answer questions like:
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>How do we prove our AI system is compliant before regulators define compliance?</li>
            <li>How do we defend models against adversarial manipulation?</li>
            <li>Who is accountable when an AI system fails?</li>
            <li>What does "AI security" mean beyond penetration testing?</li>
          </ul>

          <p className="text-institutional-white/60 italic">
            This work is institutional, not transactional. It is about building
            worldviews, not dashboards.
          </p>

          <hr className="border-institutional-border my-12" />

          <h3 className="text-2xl mb-6">Background & Standards Alignment</h3>

          <p>
            My work is grounded in 17 years of operational security practice across
            digital forensics, infrastructure security, and regulated industries.
          </p>

          <p>
            I hold certifications in information security management (ISO 27001),
            network security, penetration testing, and GDPR compliance. I have worked
            with law enforcement, enterprise security teams, and regulatory bodies.
          </p>

          <p>
            But credentials do not create governance frameworks—principles do.
          </p>

          <p>
            The value I bring is not in certifications, but in the ability to translate
            operational security reality into institutional doctrine that withstands
            regulatory, adversarial, and fiduciary scrutiny.
          </p>

          <hr className="border-institutional-border my-12" />

          <h3 className="text-2xl mb-6">Areas of Application</h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-medium mb-2">Advisory & Governance Design</h4>
              <p className="text-institutional-white/70">
                Working with boards, CISOs, and general counsel to define AI risk postures,
                accountability frameworks, and regulatory strategies. This is institutional
                architecture, not implementation.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">AI Security & Defense Strategy</h4>
              <p className="text-institutional-white/70">
                Designing adversarial threat models for AI systems, defining what "defensible"
                means in the context of model manipulation, data poisoning, and inference
                attacks. Translating academic research into operational doctrine.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Regulatory & Compliance Translation</h4>
              <p className="text-institutional-white/70">
                Interpreting emerging AI regulations (EU AI Act, algorithmic accountability
                mandates, sector-specific rules) and translating them into actionable
                governance requirements. This is not checklist compliance—it is strategic
                positioning ahead of enforcement.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Institutional Readiness Assessments</h4>
              <p className="text-institutional-white/70">
                Evaluating whether an organization's governance, documentation, and control
                environment can withstand regulatory scrutiny, investor due diligence, or
                adversarial pressure. Identifying gaps that create existential risk, not
                just technical debt.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Platform-Enabled Governance</h4>
              <p className="text-institutional-white/70">
                For organizations that need governance operationalized at scale, AIFortess
                provides the infrastructure to codify policies, automate compliance evidence
                generation, and maintain audit trails for AI system behavior. This is
                governance-as-code, not security-as-a-service.
              </p>
            </div>
          </div>

          <p className="text-institutional-white/60 italic mt-12">
            This is not consulting in the traditional sense. It is advisory work for
            organizations that understand governance is not optional.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
