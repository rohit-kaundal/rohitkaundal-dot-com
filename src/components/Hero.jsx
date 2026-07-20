import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { PORTRAIT, ASSESSMENT_URL } from '../data/site'

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
            <span>The Cyber Operating System</span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-8 font-light text-veil">
            Rohit Kaundal
          </h1>

          <p className="text-2xl mb-10 text-varuna font-light leading-snug">
            Security stopped being a project. It became an operating system.
          </p>

          <p className="text-xl mb-8 text-veil/85 leading-relaxed">
            AI companies rarely lose enterprise deals on product. They lose them
            in the security review — six weeks after the demo, in a questionnaire
            nobody owns.
          </p>

          <p className="text-lg text-saturn leading-relaxed mb-12">
            Compliance was designed for an annual audit. Enterprise buyers now ask
            questions only continuous governance can answer. I build the system
            that answers them — engineered, automated, and running every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
            <a
              href={ASSESSMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-varuna/60 text-varuna hover:bg-varuna hover:text-rahu-void hover:border-varuna transition-colors duration-200 text-center"
            >
              Take the free Readiness Assessment
            </a>

            <a
              href="#perspective"
              className="inline-block text-saturn hover:text-varuna transition-colors duration-200 text-center"
            >
              Read the thinking
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
