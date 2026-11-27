import React, { useEffect, useRef, useState } from 'react'

/*
 * A simulation of Vertias's v1 request path, as written in its design doc:
 * agent -> MCP proxy gateway -> Cedar policy engine -> decision.
 * Explicit permit = ALLOW, explicit forbid = BLOCK, no matching permit =
 * ESCALATE to a human (silence never means allow). Each decision is appended
 * to an audit log whose entries are SHA-256 hash-chained, computed live in
 * the browser. Agents, tools and policies are illustrative.
 */

const CALLS = [
  {
    id: 'read',
    agent: 'triage-agent',
    tool: 'github',
    action: 'list_issues',
    resource: 'Repo::"platform"',
    decision: 'ALLOW',
    policy: `permit (
  principal == Agent::"triage-agent",
  action == Action::"list_issues",
  resource in Org::"acme"
);`,
    reason: 'Explicit permit matched.',
  },
  {
    id: 'delete',
    agent: 'deploy-agent',
    tool: 'kubectl',
    action: 'delete_namespace',
    resource: 'Namespace::"production"',
    decision: 'ESCALATE',
    policy: `permit (
  principal == Agent::"deploy-agent",
  action == Action::"delete_namespace",
  resource
) when { resource.env != "production" };`,
    reason: 'No permit matched for production. Sent to a human.',
  },
  {
    id: 'drop',
    agent: 'support-agent',
    tool: 'postgres',
    action: 'drop_table',
    resource: 'Table::"customers"',
    decision: 'BLOCK',
    policy: `forbid (
  principal,
  action == Action::"drop_table",
  resource
);`,
    reason: 'Explicit forbid matched. The call never reaches the database.',
  },
]

const STAGES = ['Agent', 'Gateway', 'Cedar', 'Decision']

const TONE = {
  ALLOW: 'text-varuna border-varuna',
  ESCALATE: 'text-signal border-signal',
  BLOCK: 'text-alarm border-alarm',
  APPROVED: 'text-varuna border-varuna',
  DENIED: 'text-alarm border-alarm',
}

async function sha256(text) {
  if (!window.crypto?.subtle) return null
  const data = new TextEncoder().encode(text)
  const buf = await window.crypto.subtle.digest('SHA-256', data)
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

const VertiasGateway = () => {
  const [selected, setSelected] = useState(CALLS[1])
  const [stage, setStage] = useState(-1)
  const [pending, setPending] = useState(null)
  const [log, setLog] = useState([])
  const prevHash = useRef('0'.repeat(64))
  const seq = useRef(0)
  const timers = useRef([])
  const busy = stage >= 0 && stage < STAGES.length

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const append = async (call, decision, note) => {
    const time = new Date().toISOString().slice(11, 19)
    const entry = { time, agent: call.agent, action: `${call.tool}.${call.action}`, resource: call.resource, decision, note }
    const hash = (await sha256(prevHash.current + JSON.stringify(entry))) ?? prevHash.current
    const prev = prevHash.current
    prevHash.current = hash
    seq.current += 1
    setLog((l) => [{ ...entry, hash, prev, seq: seq.current }, ...l].slice(0, 5))
  }

  const run = () => {
    if (busy || pending) return
    const call = selected
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const step = reduce ? 0 : 420
    timers.current.forEach(clearTimeout)
    timers.current = STAGES.map((_, i) =>
      setTimeout(() => {
        setStage(i)
        if (i === STAGES.length - 1) {
          if (call.decision === 'ESCALATE') setPending(call)
          append(call, call.decision, call.reason)
          timers.current.push(setTimeout(() => setStage(STAGES.length), step * 2))
        }
      }, i * step),
    )
  }

  const resolve = (approved) => {
    const call = pending
    setPending(null)
    append(call, approved ? 'APPROVED' : 'DENIED', approved ? 'Approved by you. Forwarded upstream.' : 'Denied by you. Agent receives an error.')
  }

  const decision = stage >= STAGES.length - 1 ? selected.decision : null

  return (
    <div className="panel p-5 sm:p-7 font-mono text-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
        <span className="label">Vertias · gateway simulation</span>
        <span className="label !text-[0.625rem] !text-saturn-dim">MCP tools/call</span>
      </div>

      <fieldset className="mb-6">
        <legend className="label !text-[0.625rem] mb-3">1 · Pick a tool call</legend>
        <div className="grid gap-2">
          {CALLS.map((call) => {
            const on = selected.id === call.id
            return (
              <button
                key={call.id}
                type="button"
                disabled={busy || !!pending}
                aria-pressed={on}
                onClick={() => {
                  setSelected(call)
                  setStage(-1)
                }}
                className={`text-left px-3 py-2.5 border transition-colors duration-200 disabled:cursor-not-allowed ${on ? 'border-varuna/60 bg-varuna/5' : 'border-rahu-border hover:border-saturn-dim'}`}
              >
                <span className="text-saturn">{call.agent}</span>
                <span className="text-saturn-dim"> → </span>
                <span className="text-veil">{call.tool}.{call.action}</span>
                <span className="block text-xs text-saturn-dim mt-0.5">{call.resource}</span>
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="mb-6">
        <p className="label !text-[0.625rem] mb-3">2 · Send it through</p>
        <ol className="grid grid-cols-4 gap-1 mb-4" aria-label="Request path">
          {STAGES.map((name, i) => {
            const lit = stage >= i
            const final = i === STAGES.length - 1 && decision
            return (
              <li
                key={name}
                className={`border px-2 py-2 text-center text-[0.68rem] uppercase tracking-[0.14em] transition-colors duration-300 ${
                  final ? TONE[decision] : lit ? 'border-varuna/60 text-veil bg-varuna/5' : 'border-rahu-border text-saturn-dim'
                }`}
              >
                {final ? decision : name}
              </li>
            )
          })}
        </ol>
        <button
          type="button"
          onClick={run}
          disabled={busy || !!pending}
          className="w-full py-2.5 border border-varuna/60 text-varuna hover:bg-varuna hover:text-rahu-void transition-colors duration-200 disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-varuna"
        >
          {pending ? 'Waiting for a human…' : busy ? 'Evaluating…' : 'Send tools/call →'}
        </button>
      </div>

      <div className="mb-6">
        <p className="label !text-[0.625rem] mb-2">Policy in force</p>
        <pre className="text-xs leading-relaxed text-saturn bg-rahu-void/60 border border-rahu-border p-3 overflow-x-auto whitespace-pre">
          {selected.policy}
        </pre>
      </div>

      {pending && (
        <div className="mb-6 border border-signal/60 bg-signal/5 p-4" role="alertdialog" aria-label="Approval required">
          <p className="text-signal text-xs uppercase tracking-[0.18em] mb-2">Approval required</p>
          <p className="text-veil text-xs leading-relaxed mb-3">
            {pending.agent} wants to run {pending.tool}.{pending.action} on {pending.resource}.
          </p>
          <div className="flex gap-2">
            <button type="button" onClick={() => resolve(true)} className="px-3 py-1.5 border border-varuna/60 text-varuna hover:bg-varuna hover:text-rahu-void transition-colors duration-200">
              Approve
            </button>
            <button type="button" onClick={() => resolve(false)} className="px-3 py-1.5 border border-alarm/60 text-alarm hover:bg-alarm hover:text-rahu-void transition-colors duration-200">
              Deny
            </button>
          </div>
        </div>
      )}

      <div>
        <p className="label !text-[0.625rem] mb-2">3 · Audit log · hash-chained</p>
        <ol className="border border-rahu-border divide-y divide-rahu-border min-h-[5.5rem]" aria-live="polite">
          {log.length === 0 && <li className="p-3 text-xs text-saturn-dim">No decisions yet.</li>}
          {log.map((e) => (
            <li key={e.seq} className="p-3 text-xs leading-relaxed">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="text-saturn-dim">{e.time}</span>
                <span className={`border px-1.5 ${TONE[e.decision]}`}>{e.decision}</span>
                <span className="text-veil">{e.agent}</span>
                <span className="text-saturn">{e.action}</span>
              </div>
              <div className="text-saturn-dim mt-1 truncate">
                prev {e.prev.slice(0, 10)}… → <span className="text-saturn">{e.hash.slice(0, 10)}…</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default VertiasGateway
