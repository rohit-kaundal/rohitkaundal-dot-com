import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { phases, record } from '../data/evolution'

/*
 * The evolution of a builder. On large screens a sticky stage on the left
 * shows the current phase as one oversized word, and the journey rail tracks
 * progress as each phase scrolls into the reading line.
 */

const Evolution = () => {
  const [active, setActive] = useState(0)
  const refs = useRef([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          if (item.isIntersecting) setActive(Number(item.target.dataset.index))
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const phase = phases[active]

  return (
    <section id="evolution" className="relative px-6 lg:px-10 py-28 lg:py-40 border-t border-rahu-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="03"
          eyebrow="The evolution of a builder"
          lede="Not a résumé. Each phase built something, and each left behind one idea that carried into the next."
        >
          Software → Security → Systems → <span className="voice text-varuna">Intelligence.</span>
        </SectionHeading>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Sticky stage */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-28">
              <ol className="flex gap-1.5 mb-10" aria-hidden="true">
                {phases.map((p, i) => (
                  <li
                    key={p.id}
                    className={`h-0.5 flex-1 transition-colors duration-500 ${i <= active ? 'bg-varuna' : 'bg-rahu-border'}`}
                  />
                ))}
              </ol>
              <p className="font-mono text-sm text-saturn mb-2">{phase.years}</p>
              <p
                key={phase.id}
                className="voice text-[5.5rem] xl:text-[6.5rem] leading-none text-veil animate-[fadeIn_500ms_ease-out]"
              >
                {phase.word}
              </p>
              <p className="mt-6 text-lg text-saturn">
                {String(active + 1).padStart(2, '0')} / {String(phases.length).padStart(2, '0')} · {phase.title}
              </p>
            </div>
          </div>

          {/* Phases */}
          <ol className="lg:col-span-7 space-y-20 lg:space-y-32">
            {phases.map((p, i) => (
              <li
                key={p.id}
                ref={(el) => (refs.current[i] = el)}
                data-index={i}
                className={`transition-opacity duration-500 lg:min-h-[60vh] ${i === active ? 'lg:opacity-100' : 'lg:opacity-40'}`}
              >
                <div className="lg:hidden mb-4">
                  <p className="font-mono text-xs text-saturn mb-1">{p.years}</p>
                  <p className="voice text-5xl text-veil">{p.word}</p>
                </div>
                <h3 className="text-2xl lg:text-3xl font-light text-veil mb-5">{p.title}</h3>
                <p className="text-saturn text-lg leading-relaxed mb-8">{p.body}</p>
                <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                  {p.stops.map(([where, what]) => (
                    <div key={where} className="border-t border-rahu-border pt-3">
                      <dt className="text-veil">{where}</dt>
                      <dd className="text-sm text-saturn-dim">{what}</dd>
                    </div>
                  ))}
                </dl>
                <p className="border-l-2 border-dharma/70 pl-5 text-dharma text-lg font-light leading-relaxed">
                  {p.carried}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <Reveal>
          <div className="mt-24 pt-10 border-t border-rahu-border grid md:grid-cols-[auto_1fr] gap-6 md:gap-12">
            <p className="label">For the record</p>
            <div>
              <p className="text-saturn mb-4">{record.education}</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {record.credentials.map((c) => (
                  <li key={c} className="text-sm text-saturn-dim">{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Evolution
