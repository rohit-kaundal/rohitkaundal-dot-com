import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 py-24">
      <motion.div
        className="max-w-6xl mx-auto w-full grid gap-12 lg:gap-20 md:grid-cols-[minmax(0,400px)_1fr] items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://pub-60aaac775e4b4f4f81808c3434b5d92c.r2.dev/WhatsApp%20Image%202026-04-09%20at%2019.52.14.jpeg"
          alt="Rohit Kaundal"
          className="w-full max-w-[300px] md:max-w-none border border-institutional-border grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          loading="eager"
        />

        <div>
          <h1 className="text-5xl md:text-6xl mb-8 font-light">
            Rohit Kaundal
          </h1>

          <p className="text-2xl mb-6 text-institutional-accent font-light">
            Designing Secure & Governable AI Systems
          </p>

          <p className="text-xl mb-12 text-institutional-white/80 leading-relaxed">
            The question is no longer whether AI systems will be attacked —
            but whether they were designed to be defensible, auditable, and accountable in the first place.
          </p>

          <p className="text-lg text-institutional-white/70 leading-relaxed mb-12">
            I work at the intersection of artificial intelligence, cyber risk, and governance —
            exploring what it means to deploy intelligent systems responsibly when regulation,
            adversaries, and technology evolve at different speeds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="inline-block px-8 py-3 border border-institutional-accent text-institutional-accent hover:bg-institutional-accent hover:text-institutional-charcoal transition-colors duration-200 text-center"
            >
              View work
            </a>

            <a
              href="#perspective"
              className="inline-block px-8 py-3 text-institutional-white/70 hover:text-institutional-accent transition-colors duration-200 text-center"
            >
              Read perspective
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
