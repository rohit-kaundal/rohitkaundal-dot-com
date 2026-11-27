import React, { useMemo, useState } from 'react'

/*
 * A working model of Assessor's core loop: the ISO/IEC 42001 Annex A control
 * map and the 5x5 risk matrix. Control IDs and titles match the product's own
 * control library; readiness and risk levels use the same formulas it does
 * (readiness = compliant / applicable; risk = likelihood x impact with
 * >=15 critical, >=9 high, >=4 medium). The statuses are sample data.
 */

const SECTIONS = [
  { id: 'A.2', name: 'Policies related to AI', level: 'org', controls: [['A.2.2', 'AI policy'], ['A.2.3', 'Alignment with other organisational policies'], ['A.2.4', 'Review of the AI policy']] },
  { id: 'A.3', name: 'Internal organisation', level: 'org', controls: [['A.3.2', 'AI roles and responsibilities'], ['A.3.3', 'Reporting of concerns']] },
  { id: 'A.4', name: 'Resources for AI systems', level: 'org', controls: [['A.4.2', 'Resource documentation'], ['A.4.3', 'Data resources'], ['A.4.4', 'Tooling resources'], ['A.4.5', 'System and computing resources'], ['A.4.6', 'Human resources']] },
  { id: 'A.5', name: 'Impact assessment', level: 'system', controls: [['A.5.2', 'AI system impact assessment process'], ['A.5.3', 'Documentation of impact assessments'], ['A.5.4', 'Impact on individuals or groups'], ['A.5.5', 'Societal impacts of AI systems']] },
  { id: 'A.6', name: 'AI system life cycle', level: 'system', controls: [['A.6.1.2', 'Objectives for responsible development'], ['A.6.1.3', 'Processes for responsible design and development'], ['A.6.2.2', 'Requirements and specification'], ['A.6.2.3', 'Documentation of design and development'], ['A.6.2.4', 'Verification and validation'], ['A.6.2.5', 'Deployment'], ['A.6.2.6', 'Operation and monitoring'], ['A.6.2.7', 'Technical documentation'], ['A.6.2.8', 'Recording of event logs']] },
  { id: 'A.7', name: 'Data for AI systems', level: 'system', controls: [['A.7.2', 'Data for development and enhancement'], ['A.7.3', 'Acquisition of data'], ['A.7.4', 'Quality of data'], ['A.7.5', 'Data provenance'], ['A.7.6', 'Data preparation']] },
  { id: 'A.8', name: 'Information for interested parties', level: 'system', controls: [['A.8.2', 'Documentation and information for users'], ['A.8.3', 'External reporting'], ['A.8.4', 'Communication of incidents'], ['A.8.5', 'Information for interested parties']] },
  { id: 'A.9', name: 'Use of AI systems', level: 'system', controls: [['A.9.2', 'Processes for responsible use'], ['A.9.3', 'Objectives for responsible use'], ['A.9.4', 'Intended use of the AI system']] },
  { id: 'A.10', name: 'Third-party relationships', level: 'system', controls: [['A.10.2', 'Allocating responsibilities'], ['A.10.3', 'Suppliers'], ['A.10.4', 'Customers']] },
]

const CYCLE = ['not-assessed', 'compliant', 'partial', 'non-compliant', 'n/a']

const META = {
  'not-assessed': { label: 'Not assessed', cell: 'border-saturn-dim/40 bg-transparent', bar: 'bg-saturn-dim/30' },
  compliant: { label: 'Compliant', cell: 'border-varuna bg-varuna/80', bar: 'bg-varuna' },
  partial: { label: 'Partially compliant', cell: 'border-signal bg-signal/70', bar: 'bg-signal' },
  'non-compliant': { label: 'Non-compliant', cell: 'border-alarm bg-alarm/70', bar: 'bg-alarm' },
  'n/a': { label: 'Not applicable', cell: 'border-rahu-border bg-rahu-border/60', bar: 'bg-rahu-border' },
}

const SAMPLE = ['compliant', 'compliant', 'partial', 'compliant', 'non-compliant', 'not-assessed', 'compliant', 'partial', 'compliant', 'not-assessed', 'non-compliant']

const initialState = () => {
  const state = {}
  let i = 0
  for (const s of SECTIONS) for (const [id] of s.controls) state[id] = SAMPLE[i++ % SAMPLE.length]
  state['A.10.4'] = 'n/a'
  return state
}

const riskLevel = (score) => (score >= 15 ? 'Critical' : score >= 9 ? 'High' : score >= 4 ? 'Medium' : 'Low')
const RISK_CELL = {
  Critical: 'bg-alarm/75',
  High: 'bg-signal/65',
  Medium: 'bg-varuna/35',
  Low: 'bg-saturn-dim/25',
}

const AssessorMap = () => {
  const [status, setStatus] = useState(initialState)
  const [focus, setFocus] = useState(null)
  const [risk, setRisk] = useState({ l: 4, i: 4 })

  const totals = useMemo(() => {
    const all = Object.values(status)
    const applicable = all.filter((s) => s !== 'n/a')
    const compliant = applicable.filter((s) => s === 'compliant').length
    return {
      readiness: applicable.length ? Math.round((compliant / applicable.length) * 100) : 0,
      gaps: applicable.filter((s) => s === 'partial' || s === 'non-compliant').length,
      open: applicable.filter((s) => s === 'not-assessed').length,
    }
  }, [status])

  const cycle = (id) =>
    setStatus((prev) => ({ ...prev, [id]: CYCLE[(CYCLE.indexOf(prev[id]) + 1) % CYCLE.length] }))

  const focused = focus && SECTIONS.flatMap((s) => s.controls).find(([id]) => id === focus)
  const score = risk.l * risk.i
  const level = riskLevel(score)

  return (
    <div className="panel p-5 sm:p-7">
      <div className="flex items-baseline justify-between gap-4 mb-6">
        <span className="label">Annex A · control map</span>
        <button
          type="button"
          onClick={() => setStatus(initialState())}
          className="label hover:!text-varuna transition-colors duration-200"
        >
          Reset
        </button>
      </div>

      <dl className="grid grid-cols-3 gap-4 mb-7 border-y border-rahu-border py-4">
        <div>
          <dt className="label !text-[0.625rem]">Readiness</dt>
          <dd className="text-3xl font-light text-varuna tabular-nums">{totals.readiness}%</dd>
        </div>
        <div>
          <dt className="label !text-[0.625rem]">Gaps</dt>
          <dd className="text-3xl font-light text-veil tabular-nums">{totals.gaps}</dd>
        </div>
        <div>
          <dt className="label !text-[0.625rem]">Unassessed</dt>
          <dd className="text-3xl font-light text-veil tabular-nums">{totals.open}</dd>
        </div>
      </dl>

      {['org', 'system'].map((level) => (
        <div key={level} className="mb-5">
          <p className="label !text-[0.625rem] !text-saturn-dim mb-3">
            {level === 'org' ? 'Organisation level' : 'AI system level'}
          </p>
          <div className="space-y-2.5">
            {SECTIONS.filter((s) => s.level === level).map((section) => {
              const states = section.controls.map(([id]) => status[id])
              return (
                <div key={section.id} className="grid grid-cols-[3.2rem_1fr] sm:grid-cols-[3.2rem_1fr_5rem] items-center gap-3">
                  <span className="font-mono text-xs text-saturn" title={section.name}>{section.id}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {section.controls.map(([id, title]) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => cycle(id)}
                        onMouseEnter={() => setFocus(id)}
                        onFocus={() => setFocus(id)}
                        aria-label={`${id} ${title}: ${META[status[id]].label}. Activate to change status.`}
                        className={`w-5 h-5 border transition-colors duration-200 hover:border-veil ${META[status[id]].cell}`}
                      />
                    ))}
                  </div>
                  <div className="hidden sm:flex h-1 bg-rahu-border/50 overflow-hidden" aria-hidden="true">
                    {CYCLE.filter((s) => s !== 'n/a').map((s) => {
                      const n = states.filter((x) => x === s).length
                      return n ? <span key={s} className={META[s].bar} style={{ width: `${(n / states.length) * 100}%` }} /> : null
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}

      <p className="min-h-[2.75rem] text-sm text-saturn leading-snug border-t border-rahu-border pt-3" aria-live="polite">
        {focused ? (
          <>
            <span className="font-mono text-varuna mr-2">{focused[0]}</span>
            {focused[1]} · <span className="text-veil">{META[status[focused[0]]].label}</span>
          </>
        ) : (
          'Hover a control to read it. Click to change its status.'
        )}
      </p>

      <div className="mt-6 pt-6 border-t border-rahu-border grid sm:grid-cols-[auto_1fr] gap-6 items-center">
        <div>
          <p className="label !text-[0.625rem] mb-3">Risk · likelihood × impact</p>
          <div className="grid grid-cols-5 gap-1 w-max" role="group" aria-label="Risk matrix">
            {[5, 4, 3, 2, 1].map((l) =>
              [1, 2, 3, 4, 5].map((i) => {
                const active = risk.l === l && risk.i === i
                return (
                  <button
                    key={`${l}-${i}`}
                    type="button"
                    onClick={() => setRisk({ l, i })}
                    onMouseEnter={() => setRisk({ l, i })}
                    aria-label={`Likelihood ${l}, impact ${i}: ${riskLevel(l * i)}`}
                    className={`w-6 h-6 ${RISK_CELL[riskLevel(l * i)]} transition-all duration-150 ${active ? 'ring-1 ring-veil ring-offset-1 ring-offset-rahu-abyss' : 'opacity-70 hover:opacity-100'}`}
                  />
                )
              }),
            )}
          </div>
        </div>
        <div aria-live="polite">
          <p className="font-mono text-sm text-saturn">
            L{risk.l} × I{risk.i} = <span className="text-veil">{score}</span>
          </p>
          <p className="text-2xl font-light text-veil mt-1">{level}</p>
          <p className="text-xs text-saturn-dim mt-2 leading-relaxed">
            Scored against the ISO/IEC 23894 taxonomy: bias, explainability, data
            quality, security, privacy, safety, transparency, accountability.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AssessorMap
