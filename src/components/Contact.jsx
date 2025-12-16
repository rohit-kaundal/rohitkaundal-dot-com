import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mb-12 font-light">Contact</h2>

        <div className="space-y-8">
          <div>
            <p className="text-body mb-4 text-institutional-white/70">
              For advisory inquiries, institutional governance projects, or strategic collaboration:
            </p>
            <a
              href="mailto:rohit@vassagoconsultancy.com"
              className="text-2xl text-institutional-accent hover:text-institutional-gold transition-colors"
            >
              rohit@vassagoconsultancy.com
            </a>
          </div>

          <div className="pt-8 space-y-4 text-institutional-white/60">
            <p className="text-sm leading-relaxed">
              I work with organizations facing AI governance questions that cannot be
              answered with existing frameworks.
            </p>

            <p className="text-sm leading-relaxed">
              This is institutional work—not project-based consulting.
            </p>

            <p className="text-sm leading-relaxed">
              If your organization needs tactical implementation, vendor services, or
              short-term security assessments, there are better-suited resources available.
            </p>
          </div>

          <hr className="border-institutional-border my-12" />

          <div className="space-y-4 text-institutional-white/60">
            <p className="text-sm">
              PGP Key Fingerprint:
              <a
                href="https://keybase.io/rohitkaundal/pgp_keys.asc"
                className="text-institutional-accent hover:underline ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                0BE2 9B1D 0BE2 E92B 94A4 457D 7930 6F4C 3DDE B1BD
              </a>
            </p>

            <div className="flex space-x-6 text-sm">
              <a
                href="https://github.com/rohit-kaundal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-institutional-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/rohitkaundal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-institutional-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/rohitkaundal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-institutional-accent transition-colors"
              >
                Twitter/X
              </a>
            </div>

            <p className="text-sm pt-4">
              Location: India | Dubai
            </p>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-institutional-border text-sm text-institutional-white/50">
          <p>© 2025 Rohit Kaundal</p>
          <p className="mt-2">AI Governance & Cyber Defense Authority</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
