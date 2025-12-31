import React from 'react'

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-32 px-6">
      <div className="prose">
        <h2 className="text-4xl mb-12 font-light">
          What This Work Is
        </h2>

        <div className="space-y-6 text-body leading-relaxed">
          <p>AI governance is emerging as one of the defining security challenges of this decade.</p>

          <p>
            Not because AI is inherently dangerous —
            but because intelligent systems are being deployed faster than the structures needed to govern them.
          </p>

          <p>The problems are real and recurring:</p>

          <ul className="list-disc list-inside space-y-2 text-institutional-white/80">
            <li>Accountability for model behavior remains undefined in most organizations</li>
            <li>Risk postures rarely account for adversarial AI scenarios</li>
            <li>Regulatory scrutiny is arriving before teams know what readiness looks like</li>
          </ul>

          <p>
            My work focuses on closing this gap — not through tooling or frameworks alone,
            but by helping practitioners reason clearly about how AI systems should be
            secured, governed, and evaluated in practice.
          </p>

          <p className="text-institutional-white/60 italic">
            The goal is not theoretical governance.
            It is defensible decision-making under real-world constraints.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Manifesto
