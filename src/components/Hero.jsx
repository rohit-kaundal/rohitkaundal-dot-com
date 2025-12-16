import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="prose"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl mb-8 font-light">
          Rohit Kaundal
        </h1>

        <p className="text-2xl mb-6 text-institutional-accent font-light">
          AI Governance & Cyber Defense Authority
        </p>

        <p className="text-xl mb-12 text-institutional-white/80 leading-relaxed">
          The question is no longer whether AI systems will be attacked,
          but whether they were designed to be defensible.
        </p>

        <p className="text-lg text-institutional-white/70 leading-relaxed mb-12">
          I work at the intersection of artificial intelligence, cyber risk,
          and institutional accountability—defining the governance frameworks
          that make AI systems auditable, defensible, and aligned with
          regulatory reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#manifesto"
            className="inline-block px-8 py-3 border border-institutional-accent text-institutional-accent hover:bg-institutional-accent hover:text-institutional-charcoal transition-colors duration-200 text-center"
          >
            Read the Manifesto
          </a>

          <a
            href="#work"
            className="inline-block px-8 py-3 text-institutional-white/70 hover:text-institutional-accent transition-colors duration-200 text-center"
          >
            View Selected Work
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
