import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { SOCIAL, PGP_FINGERPRINT, PGP_URL, LOCATION } from '../data/site'

const links = [
  { href: SOCIAL.github, label: 'GitHub', Icon: Github },
  { href: SOCIAL.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: SOCIAL.twitter, label: 'Twitter / X', Icon: Twitter },
]

const Footer = () => (
  <footer className="px-6 lg:px-10 pt-14 pb-10 border-t border-rahu-border">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <p className="text-veil text-lg">Rohit Kaundal</p>
          <p className="text-saturn text-sm mt-1">Cybersecurity &amp; AI Builder · Founder, AIFortess</p>
          <div className="flex gap-2 mt-6">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="grid place-items-center w-10 h-10 border border-rahu-border text-saturn hover:text-varuna hover:border-varuna/40 transition-colors duration-200"
              >
                <item.Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:text-right">
          <p className="label mb-2">PGP</p>
          <a
            href={PGP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-saturn-dim hover:text-varuna transition-colors duration-200 break-all"
          >
            {PGP_FINGERPRINT}
          </a>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-rahu-border flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-saturn-dim font-mono">
        <p>© {new Date().getFullYear()} Rohit Kaundal</p>
        <p>{LOCATION}</p>
      </div>
    </div>
  </footer>
)

export default Footer
