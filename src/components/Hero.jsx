import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { PORTRAIT } from '../data/site'

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
            <span>AI Governance &amp; Cyber Defense</span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-8 font-light text-veil">
            Rohit Kaundal
          </h1>

          <p className="text-2xl mb-10 text-varuna font-light leading-snug">
            Designing secure and governable AI systems.
          </p>

          <p className="text-xl mb-8 text-veil/85 leading-relaxed">
            The question is no longer whether AI systems will be attacked. It is
            whether they were built to be defensible, auditable, and accountable
            before anyone thought to ask.
          </p>

          <p className="text-lg text-saturn leading-relaxed mb-12">
            I work where artificial intelligence, cyber risk, and governance meet —
            on what it takes to deploy intelligent systems responsibly when
            regulation, adversaries, and technology each move at a different speed.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
            <a
              href="#perspective"
              className="inline-block px-8 py-3 border border-varuna/60 text-varuna hover:bg-varuna hover:text-rahu-void hover:border-varuna transition-colors duration-200 text-center"
            >
              Read the perspective
            </a>

            <a
              href="#work"
              className="inline-block text-saturn hover:text-varuna transition-colors duration-200 text-center"
            >
              Selected work
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
