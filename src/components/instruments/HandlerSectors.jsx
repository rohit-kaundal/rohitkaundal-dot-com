import React, { useState } from 'react'

/*
 * A model of Handler's daily loop and its core invariants:
 *  - in Execution only the active sector is visible; the rest are sealed
 *  - the Dead Drop is write-only and opens only at the next Briefing
 *  - after the Debrief the station stands down until tomorrow
 * Sector names follow the examples in Handler's README.
 */

const SECTORS = [
  { id: 'founder', name: 'Startup founder', color: 'bg-varuna', ops: ['Ship the policy editor', 'Reply to two design partners'] },
  { id: 'son', name: 'Son', color: 'bg-signal', ops: ['Call home before 8pm'] },
  { id: 'husband', name: 'Husband', color: 'bg-dharma', ops: ['Dinner, phone in the other room'] },
]

const PHASES = [
  { id: 'briefing', name: 'Briefing', note: 'Pick today’s sectors. One objective each. Triage the Dead Drop. Lock it in.' },
  { id: 'execution', name: 'Execution', note: 'Step into one sector. Everything else goes dark.' },
  { id: 'debrief', name: 'Debrief', note: 'What landed, why anything slipped, one adjustment for tomorrow.' },
  { id: 'standdown', name: 'Stand down', note: 'The station is closed until tomorrow’s briefing. Rest is part of the protocol.' },
]

const HandlerSectors = () => {
  const [phase, setPhase] = useState('execution')
  const [active, setActive] = useState('founder')
  const [drop, setDrop] = useState('')
  const [held, setHeld] = useState(['Idea: rate-limit escalations per agent'])
  const [met, setMet] = useState({})

  const capture = (e) => {
    e.preventDefault()
    const text = drop.trim()
    if (!text) return
    setHeld((h) => [...h, text])
    setDrop('')
  }

  const current = PHASES.find((p) => p.id === phase)

  return (
    <div className="panel p-5 sm:p-7">
      <div className="flex items-baseline justify-between gap-4 mb-5">
        <span className="label">Handler · today</span>
        <span className="label !text-[0.625rem] !text-saturn-dim">local only</span>
      </div>

      <div className="grid grid-cols-4 border border-rahu-border mb-2" role="tablist" aria-label="Phase of the day">
        {PHASES.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={phase === p.id}
            onClick={() => setPhase(p.id)}
            className={`py-2.5 px-1 text-[0.68rem] font-mono uppercase tracking-[0.1em] transition-colors duration-200 ${i ? 'border-l border-rahu-border' : ''} ${phase === p.id ? 'bg-veil text-rahu-void' : 'text-saturn hover:text-veil'}`}
          >
            {p.name}
          </button>
        ))}
      </div>
      <p className="text-xs text-saturn-dim mb-5 min-h-[2.5rem] leading-relaxed">{current.note}</p>

      <div className="min-h-[14rem]">
        {phase === 'briefing' && (
          <div className="space-y-2">
            {SECTORS.map((s) => (
              <div key={s.id} className="border border-rahu-border p-3">
                <p className="flex items-center gap-2 text-sm text-veil">
                  <span className={`w-2 h-2 ${s.color}`} aria-hidden="true" />
                  {s.name}
                </p>
                <p className="text-xs text-saturn mt-1">{s.ops[0]}</p>
              </div>
            ))}
            <div className="border border-dashed border-saturn-dim/50 p-3">
              <p className="label !text-[0.625rem] mb-2">Dead Drop · triage ({held.length})</p>
              <ul className="space-y-1 text-xs text-saturn">
                {held.map((h, i) => (
                  <li key={i}>— {h}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {phase === 'execution' && (
          <div className="space-y-2">
            {SECTORS.map((s) => {
              const open = s.id === active
              return open ? (
                <div key={s.id} className="border border-varuna/50 bg-varuna/[0.04] p-4">
                  <p className="flex items-center gap-2 text-sm text-veil mb-3">
                    <span className={`w-2 h-2 ${s.color}`} aria-hidden="true" />
                    {s.name}
                    <span className="label !text-[0.6rem] !text-varuna ml-auto">operating</span>
                  </p>
                  <ul className="space-y-2">
                    {s.ops.map((op) => (
                      <li key={op}>
                        <label className="flex items-center gap-3 text-sm text-veil/90 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={!!met[op]}
                            onChange={() => setMet((m) => ({ ...m, [op]: !m[op] }))}
                            className="accent-[#3FC5C9] w-4 h-4"
                          />
                          <span className={met[op] ? 'line-through text-saturn' : ''}>{op}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(s.id)}
                  className="w-full flex items-center justify-between border border-rahu-border bg-rahu-void/70 px-4 py-3 text-left group"
                  aria-label={`Sealed sector. Switch to ${s.name}`}
                >
                  <span className="font-mono text-xs tracking-[0.3em] text-saturn-dim">██████ SEALED</span>
                  <span className="label !text-[0.6rem] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">switch</span>
                </button>
              )
            })}
          </div>
        )}

        {phase === 'debrief' && (
          <div className="space-y-3 text-sm">
            {SECTORS.flatMap((s) => s.ops).map((op) => (
              <p key={op} className="flex justify-between gap-4 border-b border-rahu-border pb-2">
                <span className="text-veil/90">{op}</span>
                <span className={`font-mono text-xs ${met[op] ? 'text-varuna' : 'text-signal'}`}>{met[op] ? 'MET' : 'MISSED'}</span>
              </p>
            ))}
            <p className="text-xs text-saturn leading-relaxed pt-1">
              <span className="label !text-[0.6rem] block mb-1">Adjustment for tomorrow</span>
              One change to the structure, not a promise to try harder.
            </p>
          </div>
        )}

        {phase === 'standdown' && (
          <div className="h-56 flex flex-col items-center justify-center text-center border border-rahu-border bg-rahu-void/60">
            <p className="font-mono text-xs tracking-[0.3em] text-saturn-dim mb-3">OFF DUTY</p>
            <p className="text-2xl font-light text-veil">Station closed.</p>
            <p className="text-sm text-saturn mt-2">Reopens at tomorrow’s briefing.</p>
          </div>
        )}
      </div>

      <form onSubmit={capture} className="mt-5 pt-5 border-t border-rahu-border">
        <label htmlFor="deaddrop" className="label !text-[0.625rem] block mb-2">
          Dead Drop · write-only, open in every phase
        </label>
        <div className="flex gap-2">
          <input
            id="deaddrop"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            placeholder="A stray thought…"
            maxLength={80}
            className="flex-1 min-w-0 bg-rahu-void/70 border border-rahu-border px-3 py-2 text-sm text-veil placeholder:text-saturn-dim focus:border-varuna/60 focus:outline-none"
          />
          <button type="submit" className="px-4 border border-rahu-border text-saturn hover:text-varuna hover:border-varuna/50 transition-colors duration-200 text-sm">
            Drop
          </button>
        </div>
        <p className="text-xs text-saturn-dim mt-2" aria-live="polite">
          {held.length} held until the next briefing. You can’t read them from here.
        </p>
      </form>
    </div>
  )
}

export default HandlerSectors
