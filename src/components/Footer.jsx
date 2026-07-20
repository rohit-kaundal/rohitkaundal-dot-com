import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'
import {
  EMAIL,
  SOCIAL,
  PGP_FINGERPRINT,
  PGP_URL,
  LOCATION,
  NEWSLETTER_URL,
  ASSESSMENT_URL,
} from '../data/site'

const links = [
  { href: SOCIAL.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: SOCIAL.github, label: 'GitHub', Icon: Github },
  { href: SOCIAL.twitter, label: 'Twitter / X', Icon: Twitter },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="px-6 pt-16 pb-12 border-t border-rahu-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <div className="text-lg font-light text-veil">Rohit Kaundal</div>
            <p className="mt-4 max-w-md text-saturn leading-relaxed">
              Building the Cyber Operating System — continuous governance,
              security engineering, and automation that make AI companies
              enterprise-ready. Founder of AIFortess.
            </p>
            <div className="mt-6 flex flex-col gap-2 items-start">
              <a
                href={ASSESSMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-varuna hover:text-varuna-bright transition-colors"
              >
                Free Readiness Assessment
              </a>
              <a
                href={NEWSLETTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-varuna hover:text-varuna-bright transition-colors"
              >
                Newsletter — The Cyber Operating System
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-varuna hover:text-varuna-bright transition-colors"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="doctrine-label mb-4">
              <span className="veil-ring" aria-hidden="true" />
              <span>Connect</span>
            </div>
            <div className="flex gap-3">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="grid place-items-center w-11 h-11 border border-rahu-border text-saturn hover:text-varuna hover:border-varuna/40 transition-colors duration-200"
                >
                  <item.Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>

            <div className="doctrine-label mt-8 mb-3">
              <span className="veil-ring" aria-hidden="true" />
              <span>PGP</span>
            </div>
            <a
              href={PGP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-mono text-xs text-saturn-dim hover:text-varuna transition-colors break-all max-w-xs leading-relaxed"
            >
              {PGP_FINGERPRINT}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-rahu-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-saturn-dim">
          <p>© {year} Rohit Kaundal</p>
          <p>{LOCATION}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
