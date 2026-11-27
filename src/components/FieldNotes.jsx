import React, { useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { entries, types } from '../data/lab'
import { NEWSLETTER_URL } from '../data/site'

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' })

const FieldNotes = () => {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? entries : entries.filter((e) => e.type === filter)
  const count = (key) => entries.filter((e) => e.type === key).length

  return (
    <section id="notes" className="relative px-6 lg:px-10 py-28 lg:py-40 border-t border-rahu-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading number="02" eyebrow="Field notes" className="!mb-10">
            The engineering <span className="voice text-varuna">log.</span>
          </SectionHeading>
          <Reveal>
            <p className="text-saturn leading-relaxed mb-8">
              A running record of what got built, decided, released, and what
              didn&apos;t work. Entries come from the work itself, so this grows
              as the lab does.
            </p>
            <div className="flex flex-wrap lg:flex-col gap-2 lg:gap-1" role="tablist" aria-label="Filter entries">
              {[['all', 'All entries', entries.length], ...Object.entries(types).map(([k, t]) => [k, t.label, count(k)])].map(
                ([key, label, n]) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={filter === key}
                    onClick={() => setFilter(key)}
                    className={`group flex items-center justify-between gap-6 text-left px-3 py-2 border lg:border-0 lg:border-l transition-colors duration-200 ${
                      filter === key ? 'border-varuna text-veil' : 'border-rahu-border text-saturn hover:text-veil'
                    }`}
                  >
                    <span className="text-sm">{label}</span>
                    <span className="font-mono text-xs text-saturn-dim tabular-nums">{String(n).padStart(2, '0')}</span>
                  </button>
                ),
              )}
            </div>
            <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer" className="link-arrow mt-10 text-sm">
              Longer write-ups: The Cyber Operating System <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          {shown.length === 0 ? (
            <div className="panel p-8 lg:p-10">
              <p className="label mb-3">{types[filter].label} · 00 entries</p>
              <p className="text-xl font-light text-veil mb-2">Nothing filed here yet.</p>
              <p className="text-saturn leading-relaxed max-w-lg">
                {types[filter].note} This shelf is reserved, and it fills only
                with work that actually happened.
              </p>
            </div>
          ) : (
            <ol className="border-t border-rahu-border">
              {shown.map((e) => (
                <li key={e.date + e.title} className="group grid sm:grid-cols-[8.5rem_1fr] gap-x-8 gap-y-2 py-8 border-b border-rahu-border">
                  <div className="font-mono text-xs text-saturn-dim pt-1.5 space-y-1">
                    <time dateTime={e.date} className="block">{formatDate(e.date)}</time>
                    <span className="block text-varuna/80 uppercase tracking-[0.16em] text-[0.625rem]">{types[e.type].label}</span>
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-light text-veil leading-snug mb-3">{e.title}</h3>
                    <p className="text-saturn leading-relaxed max-w-2xl">{e.body}</p>
                    {e.href && (
                      <a href={e.href} target="_blank" rel="noopener noreferrer" className="link-arrow mt-4 text-sm">
                        {e.linkLabel || 'Open'} <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  )
}

export default FieldNotes
