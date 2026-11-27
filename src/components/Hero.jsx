import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import HeroLattice from './HeroLattice'
import { AIFORTESS_URL } from '../data/site'

// Where each project sits on the lattice's shell (x right, y up, z toward you).
const ANCHORS = [
  { id: 'assessor', label: 'Assessor', href: '#assessor', position: [0.5, 0.62, 0.6] },
  { id: 'vertias', label: 'Vertias AI', href: '#vertias', position: [0.88, -0.05, 0.47] },
  { id: 'handler', label: 'Handler', href: '#handler', position: [0.12, -0.78, 0.6] },
  { id: 'hackercam', label: 'Hacker Cam', href: '#hackercam', position: [-0.62, 0.22, 0.75] },
]

// Capitalised aliases: the lint config cannot see lower-case JSX member usage.
const MotionP = motion.p
const MotionH1 = motion.h1
const MotionDiv = motion.div

const LEGEND = [
  ['bg-varuna', 'allowed'],
  ['bg-signal', 'escalated'],
  ['bg-alarm', 'blocked'],
]

const Hero = () => {
  const reduce = useReducedMotion()
  const enter = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.21, 0.6, 0.35, 1] },
        }

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 lg:left-[30%] opacity-70 lg:opacity-100">
        <HeroLattice anchors={ANCHORS} />
      </div>
      <div className="hero-veil pointer-events-none absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-[100svh] flex flex-col justify-end lg:justify-center pt-32 pb-14 pointer-events-none">
        <div className="max-w-2xl pointer-events-auto">
          <MotionP className="label flex items-center gap-3 mb-8" {...enter(0)}>
            <span className="text-varuna"><span className="pulse-dot" /></span>
            Rohit Kaundal · Cybersecurity &amp; AI Builder
          </MotionP>

          <MotionH1
            className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.6rem] font-light text-veil mb-8"
            {...enter(0.08)}
          >
            I build systems,
            <br />
            break them,
            <br />
            and make them <span className="voice text-varuna">smarter.</span>
          </MotionH1>

          <MotionP className="text-lg lg:text-xl text-veil/80 leading-relaxed max-w-xl mb-6" {...enter(0.16)}>
            Developer first, then fifteen years on both sides of the attack:
            penetration testing, forensics, cybercrime investigation, DevSecOps
            and the SOC. Now I build AI governance and agent security systems.
          </MotionP>

          <MotionP className="text-base text-saturn mb-10" {...enter(0.2)}>
            Founder of{' '}
            <a
              href={AIFORTESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-veil border-b border-varuna/40 hover:border-varuna hover:text-varuna transition-colors duration-200"
            >
              AIFortess
            </a>
            , building AI-driven security and trust infrastructure from Dubai.
          </MotionP>

          <MotionDiv className="flex flex-wrap items-center gap-x-8 gap-y-4" {...enter(0.26)}>
            <a
              href="#lab"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-varuna text-rahu-void font-medium hover:bg-varuna-bright transition-colors duration-200"
            >
              Enter the lab
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
            </a>
            <a href="#evolution" className="link-arrow">
              How I got here <span aria-hidden="true">→</span>
            </a>
          </MotionDiv>
        </div>

        <MotionDiv
          className="pointer-events-auto mt-16 lg:mt-0 lg:absolute lg:bottom-10 lg:right-10 lg:text-right max-w-xs lg:max-w-sm"
          {...enter(0.5)}
        >
          <ul className="flex lg:justify-end gap-5 mb-2" aria-label="Signal legend">
            {LEGEND.map(([color, name]) => (
              <li key={name} className="label flex items-center gap-2 !tracking-[0.14em]">
                <span className={`w-1.5 h-1.5 rounded-full ${color}`} aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
          <p className="text-xs text-saturn-dim leading-relaxed">
            Every signal in the lattice passes a policy core before it reaches
            anything that matters. That is the kind of system I build.
          </p>
        </MotionDiv>
      </div>
    </section>
  )
}

export default Hero
