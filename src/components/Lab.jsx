import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import AssessorMap from './instruments/AssessorMap'
import VertiasGateway from './instruments/VertiasGateway'
import HandlerSectors from './instruments/HandlerSectors'
import HackerCamReel from './instruments/HackerCamReel'
import FortessLab from './instruments/FortessLab'
import { projects } from '../data/projects'
import { AIFORTESS_URL } from '../data/site'

const INSTRUMENTS = {
  assessor: AssessorMap,
  vertias: VertiasGateway,
  fortess: FortessLab,
  handler: HandlerSectors,
  hackercam: HackerCamReel,
}

const byId = Object.fromEntries(projects.map((p) => [p.id, p]))

const Status = ({ status }) => (
  <span className={`label inline-flex items-center gap-2 ${status.tone === 'build' ? '!text-signal' : '!text-varuna'}`}>
    <span className="pulse-dot" aria-hidden="true" />
    {status.label}
  </span>
)

const Links = ({ project }) => (
  <div className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-2">
    {project.links.map((l) => (
      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link-arrow">
        {l.label} <span aria-hidden="true">↗</span>
      </a>
    ))}
    {project.repo.public ? (
      <a href={project.repo.href} target="_blank" rel="noopener noreferrer" className="link-arrow">
        GitHub <span aria-hidden="true">↗</span>
      </a>
    ) : (
      <span className="label !text-saturn-dim">Source · private</span>
    )}
  </div>
)

// The written half of a chapter. `compact` drops the capability list for the
// full-width layout, where it is shown in its own column.
const Facts = ({ project, compact = false }) => (
  <div className="space-y-6">
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      <span className="font-mono text-xs text-saturn-dim">{project.index}</span>
      <span className="label">{project.kind}</span>
    </div>
    <h3 className="text-4xl lg:text-5xl font-light text-veil">{project.name}</h3>
    <Status status={project.status} />
    <p className="text-xl lg:text-2xl font-light text-veil/90 leading-snug">{project.oneLiner}</p>
    <div className="space-y-4 text-base text-saturn leading-relaxed">
      <p>
        <span className="label !text-[0.625rem] block mb-1 !text-veil/60">The problem</span>
        {project.problem}
      </p>
      <p>
        <span className="label !text-[0.625rem] block mb-1 !text-veil/60">What it does</span>
        {project.what}
      </p>
      {project.maturity && (
        <p className="border-l border-signal/60 pl-4 text-sm">
          <span className="label !text-[0.625rem] block mb-1 !text-signal">Where it stands</span>
          {project.maturity}
        </p>
      )}
    </div>
    {!compact && <Capabilities project={project} />}
    <Links project={project} />
  </div>
)

const Capabilities = ({ project }) => (
  <div>
    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 border-t border-rahu-border pt-5">
      {project.capabilities.map((c) => (
        <li key={c} className="flex gap-3 text-sm text-veil/80">
          <span className="text-varuna/70 font-mono" aria-hidden="true">+</span>
          {c}
        </li>
      ))}
    </ul>
    <p className="mt-4 font-mono text-xs text-saturn-dim">{project.stack.join(' · ')}</p>
  </div>
)

const Chapter = ({ id, flip = false }) => {
  const project = byId[id]
  const Instrument = INSTRUMENTS[id]
  return (
    <article id={id} className="scroll-mt-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <Reveal className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
        <Facts project={project} />
      </Reveal>
      <Reveal className={`lg:col-span-7 ${flip ? 'lg:order-1' : ''}`} delay={0.08}>
        <Instrument />
        <p className="mt-3 text-xs text-saturn-dim">
          {id === 'vertias'
            ? 'Interactive simulation of the v1 design. Hashes are computed in your browser.'
            : id === 'fortess'
              ? 'The Floor 1 defense lab, with the same attack suite as the game.'
              : 'Interactive model of the real product. Sample data only.'}
        </p>
      </Reveal>
    </article>
  )
}

const Lab = () => {
  const hackercam = byId.hackercam
  return (
    <section id="lab" className="relative px-6 lg:px-10 py-28 lg:py-40">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="01"
          eyebrow="The Lab · projects, experiments & systems"
          lede="Five builds, five different problems. Each one below is a working model of how the real thing behaves, so you can try it instead of reading about it."
        >
          Things I&apos;m <span className="voice text-varuna">building.</span>
        </SectionHeading>

        <Reveal>
          <div className="mb-24 lg:mb-32 grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-baseline border-y border-rahu-border py-7">
            <p className="label !text-dharma">Founder venture</p>
            <p className="text-lg text-veil/85 leading-relaxed max-w-3xl">
              Most of this comes out of{' '}
              <a href={AIFORTESS_URL} target="_blank" rel="noopener noreferrer" className="text-varuna hover:text-varuna-bright transition-colors duration-200">
                AIFortess
              </a>
              , the company I founded in Dubai in December 2025. It builds AI
              security and governance infrastructure, including AI agents for
              security work, with a person approving anything consequential.
            </p>
          </div>
        </Reveal>

        <div className="space-y-32 lg:space-y-44">
          <Chapter id="assessor" />
          <Chapter id="vertias" flip />
          <Chapter id="fortess" />
          <Chapter id="handler" flip />

          {/* Hacker Cam breaks the rhythm: the frames get the full width. */}
          <article id="hackercam" className="scroll-mt-24">
            <Reveal>
              <HackerCamReel />
              <p className="mt-3 text-xs text-saturn-dim">Real frames from the app. Pick an effect or play the intro.</p>
            </Reveal>
            <div className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-16">
              <Reveal className="lg:col-span-7">
                <Facts project={hackercam} compact />
              </Reveal>
              <Reveal className="lg:col-span-5 lg:pt-28" delay={0.08}>
                <Capabilities project={hackercam} />
              </Reveal>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Lab
