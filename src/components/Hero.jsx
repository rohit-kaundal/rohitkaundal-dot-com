import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { PORTRAIT, ASSESSMENT_URL } from '../data/site'

// Hormozi value equation, made visible: dream outcome and likelihood up,
// time delay and effort down.
const valueEquation = [
  { label: 'Outcome', value: 'The security review closes the deal instead of stalling it' },
  { label: 'Certainty', value: 'Mapped to OWASP LLM Top 10, MITRE ATLAS, ISO 42001' },
  { label: 'Speed', value: 'An architecture in weeks, not a programme in quarters' },
  { label: 'Effort', value: 'Built into your pipeline, not added to your backlog' },
]

const Hero = () => {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="min-h-screen flex items-center px-6 py-24">
      <motion.div
        className="max-w-6xl mx-auto w-full grid gap-12 lg:gap-20 md:grid-cols-[minmax(0,360px)_1fr] items-center"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.21, 0.6, 0.35, 1] }}
      >
        {/* Portrait sits behind a veil until attended to — the reveal is
            deliberate rather than decorative. */}
        <div className="relative group w-full max-w-[300px] md:max-w-none">
          <div
            className="absolute -inset-px border border-varuna/25 pointer-events-none transition-colors duration-700 group-hover:border-varuna/50"
            aria-hidden="true"
          />
          <img
            src={PORTRAIT}
            alt="Rohit Kaundal"
            className="w-full grayscale contrast-[1.05] opacity-75 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
            loading="eager"
          />
        </div>

        <div>
          <div className="doctrine-label mb-8">
            <span className="veil-ring" aria-hidden="true" />
            <span>AI Security Architect</span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-8 font-light text-veil">
            Rohit Kaundal
          </h1>

          <p className="text-2xl mb-10 text-varuna font-light leading-snug">
            I architect AI systems that pass the enterprise security review the
            first time, and stay secure after they ship.
          </p>

          <p className="text-xl mb-8 text-veil/85 leading-relaxed">
            Your AI product is ready. Your security architecture isn&apos;t.
            Agents with tool access, models pulled from public hubs, prompts
            carrying customer data: enterprise buyers now want to know how all
            of it is controlled.
          </p>

          <p className="text-lg text-saturn leading-relaxed mb-10">
            I design the architecture that answers them, then build it into your
            pipeline so it keeps running every day.
          </p>

          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mb-12">
            {valueEquation.map((item) => (
              <div key={item.label} className="border-t border-rahu-border pt-3">
                <dt className="font-mono text-xs uppercase tracking-doctrine text-varuna/80 mb-1">
                  {item.label}
                </dt>
                <dd className="text-sm text-saturn leading-relaxed">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
            <a
              href={ASSESSMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-varuna/60 text-varuna hover:bg-varuna hover:text-rahu-void hover:border-varuna transition-colors duration-200 text-center"
            >
              Get your free AI Security Score
            </a>

            <a
              href="#offer"
              className="inline-block text-saturn hover:text-varuna transition-colors duration-200 text-center"
            >
              See the Architecture Sprint →
            </a>
          </div>

          <p className="mt-10 text-sm text-saturn-dim leading-relaxed">
            15 years in pentesting, forensics, DevSecOps and SOC · Founder of
            AIFortess · CSA AI Trustworthy Pledge signatory
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
