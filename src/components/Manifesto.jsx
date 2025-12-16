import React from 'react'

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-32 px-6">
      <div className="prose">
        <h2 className="text-4xl mb-12 font-light">
          What This Work Is
        </h2>

        <div className="space-y-6 text-body leading-relaxed">
          <p>AI governance is the defining security challenge of this decade.</p>

          <p>
            Not because AI is inherently dangerous—but because organizations
            are deploying intelligent systems without the institutional
            architecture to govern them.
          </p>

          <p>
            They lack accountability frameworks for model behavior. They lack
            risk postures that account for adversarial AI. They lack regulatory
            readiness for compliance regimes that do not yet exist.
          </p>

          <p>
            My work addresses this gap—not through tools, but through governance
            doctrine that tools can operationalize.
          </p>

          <p>
            I define what "secure AI" means for boards, regulators, and
            technical leaders who must make defensible decisions about
            systems they do not fully control.
          </p>

          <p className="text-institutional-white/60 italic">
            This is not consulting. It is institutional advisory work for
            organizations that understand governance is not optional.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Manifesto
