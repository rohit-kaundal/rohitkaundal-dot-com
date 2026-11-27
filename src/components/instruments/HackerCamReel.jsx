import React, { useEffect, useRef, useState } from 'react'

/*
 * Real frames captured from Hacker Cam (from the project's own docs), wired to
 * the same hotkeys the app uses. "Play intro" steps through the four stages
 * of the intro sequence.
 */

const BASE = '/builds/hackercam'

const INTRO = [
  { src: 'intro-rain.jpg', caption: 'Matrix rain' },
  { src: 'intro-terminal.jpg', caption: 'Terminal “breach” log' },
  { src: 'intro-granted.jpg', caption: 'ACCESS GRANTED' },
  { src: 'intro-name.jpg', caption: 'Name and title reveal' },
]

const EFFECTS = [
  { key: 'M', src: 'matrix.jpg', name: 'Matrix background', caption: 'You stay in colour; everything behind you becomes falling code. Person segmentation runs live on every frame.' },
  { key: 'T', src: 'trace-tracing.jpg', name: 'Global trace', caption: 'A dot-matrix world map where a trace hops across seven cities, then locks on.' },
  { key: 'A', src: 'away.jpg', name: 'Away screen', caption: 'Video scrambles to hex and shows SESSION SUSPENDED with a timer. Your camera is not sent while it is on.' },
]

const Keycap = ({ children, active }) => (
  <kbd
    className={`inline-flex items-center justify-center min-w-[1.6rem] h-6 px-1.5 border font-mono text-[0.68rem] transition-colors duration-200 ${
      active ? 'border-varuna text-varuna bg-varuna/10' : 'border-saturn-dim/60 text-saturn'
    }`}
  >
    {children}
  </kbd>
)

const HackerCamReel = () => {
  const [frame, setFrame] = useState({ src: INTRO[3].src, caption: INTRO[3].caption, key: 'H' })
  const [playing, setPlaying] = useState(false)
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const playIntro = () => {
    timers.current.forEach(clearTimeout)
    setPlaying(true)
    timers.current = INTRO.map((f, i) =>
      setTimeout(() => {
        setFrame({ ...f, key: 'H' })
        if (i === INTRO.length - 1) setPlaying(false)
      }, i * 1300),
    )
  }

  const showEffect = (fx) => {
    timers.current.forEach(clearTimeout)
    setPlaying(false)
    setFrame({ src: fx.src, caption: fx.caption, key: fx.key })
  }

  return (
    <div>
      <figure className="panel p-2 sm:p-3">
        <div className="relative aspect-video bg-black overflow-hidden">
          <img
            key={frame.src}
            src={`${BASE}/${frame.src}`}
            alt={`Hacker Cam output: ${frame.caption}`}
            width="1280"
            height="720"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover animate-[fadeIn_400ms_ease-out]"
          />
          <span className="absolute top-3 left-3 flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.2em] text-alarm bg-black/60 px-2 py-1">
            <span className="pulse-dot" /> OBS VIRTUAL CAMERA
          </span>
        </div>
        <figcaption className="flex items-center justify-between gap-4 px-1 pt-3 pb-1">
          <span className="text-sm text-veil/90">{frame.caption}</span>
          <span className="flex items-center gap-1 shrink-0" aria-label={`Hotkey Control Alt ${frame.key}`}>
            <Keycap>⌃</Keycap>
            <Keycap>⌥</Keycap>
            <Keycap active>{frame.key}</Keycap>
          </span>
        </figcaption>
      </figure>

      <div className="mt-4 grid sm:grid-cols-4 gap-2">
        <button
          type="button"
          onClick={playIntro}
          disabled={playing}
          className="flex items-center justify-between gap-2 border border-varuna/50 text-varuna px-3 py-2.5 text-sm hover:bg-varuna hover:text-rahu-void transition-colors duration-200 disabled:opacity-50"
        >
          {playing ? 'Playing…' : 'Play intro'} <Keycap active>H</Keycap>
        </button>
        {EFFECTS.map((fx) => (
          <button
            key={fx.key}
            type="button"
            onClick={() => showEffect(fx)}
            aria-pressed={frame.src === fx.src}
            className={`flex items-center justify-between gap-2 border px-3 py-2.5 text-sm transition-colors duration-200 ${
              frame.src === fx.src ? 'border-varuna/60 text-veil' : 'border-rahu-border text-saturn hover:text-veil hover:border-saturn-dim'
            }`}
          >
            {fx.name} <Keycap active={frame.src === fx.src}>{fx.key}</Keycap>
          </button>
        ))}
      </div>
    </div>
  )
}

export default HackerCamReel
