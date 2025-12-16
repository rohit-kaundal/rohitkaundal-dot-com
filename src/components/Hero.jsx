import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="prose">
        <motion.h1
          className="text-5xl md:text-6xl mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Rohit Kaundal
        </motion.h1>

        <motion.p
          className="text-2xl mb-6 text-institutional-accent font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          AI Governance & Cyber Defense Authority
        </motion.p>

        <motion.p
          className="text-xl mb-12 text-institutional-white/80 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          The question is no longer whether AI systems will be attacked,
          but whether they were designed to be defensible.
        </motion.p>

        <motion.p
          className="text-lg text-institutional-white/70 leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I work at the intersection of artificial intelligence, cyber risk,
          and institutional accountability—defining the governance frameworks
          that make AI systems auditable, defensible, and aligned with
          regulatory reality.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
