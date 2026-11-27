import React, { useEffect, useRef } from 'react'

/*
 * The Lattice.
 *
 * A shell of interconnected nodes (the systems) around a policy core. Signals
 * travel inward from the shell; at the core's membrane each one is decided:
 * allowed (aqua, passes through), escalated (amber, held for review) or
 * blocked (red, sent back). It is the thing I build, drawn as a living system.
 *
 * Plain 2D canvas with a small perspective projection: no 3D library, a few
 * hundred lines per frame, paused whenever the hero is off screen or the tab
 * is hidden, and a single static frame for reduced-motion users.
 */

const RGB = {
  node: '132,148,176',
  aqua: '63,197,201',
  amber: '232,163,61',
  red: '229,72,77',
  veil: '231,235,242',
}

const SHELL_COUNT = 170
const CORE_COUNT = 34
const MEMBRANE = 0.34
const CAMERA = 3.4

// Deterministic randomness so the lattice has the same shape on every visit.
function mulberry32(seed) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function fibonacciSphere(count, radius, jitter, rand) {
  const points = []
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = golden * i
    const rad = radius * (1 - jitter + rand() * jitter)
    points.push([Math.cos(theta) * r * rad, y * rad, Math.sin(theta) * r * rad])
  }
  return points
}

function nearestEdges(points, k) {
  const edges = new Set()
  for (let i = 0; i < points.length; i++) {
    const d = []
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue
      const dx = points[i][0] - points[j][0]
      const dy = points[i][1] - points[j][1]
      const dz = points[i][2] - points[j][2]
      d.push([dx * dx + dy * dy + dz * dz, j])
    }
    d.sort((a, b) => a[0] - b[0])
    for (let n = 0; n < k; n++) {
      const j = d[n][1]
      edges.add(i < j ? `${i}-${j}` : `${j}-${i}`)
    }
  }
  return [...edges].map((e) => e.split('-').map(Number))
}

function normalise([x, y, z], r = 1) {
  const len = Math.hypot(x, y, z)
  return [(x / len) * r, (y / len) * r, (z / len) * r]
}

const HeroLattice = ({ anchors = [] }) => {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const anchorRefs = useRef([])
  const hoverRef = useRef(false)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const rand = mulberry32(1509)

    // Model: shell nodes, then the anchor nodes (the projects) appended so
    // they wire into the lattice like any other system.
    const shell = fibonacciSphere(SHELL_COUNT, 1, 0.16, rand)
    const anchorPoints = anchors.map((a) => normalise(a.position, 1.04))
    const nodes = [...shell, ...anchorPoints]
    const anchorStart = shell.length
    const edges = nearestEdges(nodes, 3)
    const core = fibonacciSphere(CORE_COUNT, 0.17, 0.25, rand)
    const coreEdges = nearestEdges(core, 2)

    let width = 0
    let height = 0
    let dpr = 1
    let scale = 1
    let cx = 0
    let cy = 0

    const resize = () => {
      const rect = wrap.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      scale = Math.min(width, height) * 0.4
      cx = width * 0.5
      cy = height * 0.5
    }

    // Pointer, normalised to -1..1 over the window, smoothed toward target.
    const pointer = { x: 0, y: 0, tx: 0, ty: 0, px: -9999, py: -9999 }
    const onMove = (e) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1
      const rect = canvas.getBoundingClientRect()
      pointer.px = e.clientX - rect.left
      pointer.py = e.clientY - rect.top
    }
    const onLeave = () => {
      pointer.px = -9999
      pointer.py = -9999
    }

    let yaw = 0
    let pitch = -0.2
    let spin = 0

    const project = (p, out) => {
      const cosY = Math.cos(yaw)
      const sinY = Math.sin(yaw)
      const cosP = Math.cos(pitch)
      const sinP = Math.sin(pitch)
      const x1 = p[0] * cosY + p[2] * sinY
      const z1 = -p[0] * sinY + p[2] * cosY
      const y2 = p[1] * cosP - z1 * sinP
      const z2 = p[1] * sinP + z1 * cosP
      const f = CAMERA / (CAMERA - z2)
      out.x = cx + x1 * f * scale
      out.y = cy - y2 * f * scale
      out.z = z2
      out.f = f
      out.depth = (z2 + 1.1) / 2.2
      return out
    }

    const projected = nodes.map(() => ({ x: 0, y: 0, z: 0, f: 1, depth: 0 }))
    const coreProjected = core.map(() => ({ x: 0, y: 0, z: 0, f: 1, depth: 0 }))
    const tmp = { x: 0, y: 0, z: 0, f: 1, depth: 0 }
    const tmp2 = { x: 0, y: 0, z: 0, f: 1, depth: 0 }

    // Signals: travel from a shell node toward the core, decided at the membrane.
    const packets = []
    let spawnClock = 0
    const spawn = () => {
      const from = Math.floor(rand() * shell.length)
      const len = Math.hypot(...shell[from])
      const roll = rand()
      packets.push({
        from,
        t: 0,
        speed: 0.16 + rand() * 0.12,
        gate: 1 - MEMBRANE / len,
        outcome: roll < 0.68 ? 'allow' : roll < 0.88 ? 'escalate' : 'block',
        phase: 'inbound',
        hold: 0,
        fade: 1,
      })
    }

    const colorFor = (p) => {
      if (p.phase === 'inbound') return RGB.veil
      if (p.outcome === 'allow') return RGB.aqua
      if (p.outcome === 'escalate') return RGB.amber
      return RGB.red
    }

    const pointAt = (p, t) => {
      const s = shell[p.from]
      const k = 1 - t
      return [s[0] * k, s[1] * k, s[2] * k]
    }

    const stepPackets = (dt) => {
      spawnClock += dt
      if (spawnClock > 0.42 && packets.length < 14) {
        spawnClock = 0
        spawn()
      }
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i]
        if (p.phase === 'inbound') {
          p.t += p.speed * dt
          if (p.t >= p.gate) {
            p.t = p.gate
            p.phase = p.outcome === 'escalate' ? 'held' : p.outcome === 'block' ? 'returning' : 'through'
          }
        } else if (p.phase === 'through') {
          p.t += p.speed * dt * 0.8
          if (p.t >= 1) p.fade -= dt * 3
        } else if (p.phase === 'held') {
          p.hold += dt
          if (p.hold > 1.6) p.fade -= dt * 1.5
        } else if (p.phase === 'returning') {
          p.t -= p.speed * dt * 1.4
          p.fade -= dt * 0.9
        }
        if (p.fade <= 0 || p.t < 0) packets.splice(i, 1)
      }
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i++) project(nodes[i], projected[i])

      // Edges, faded by depth.
      ctx.lineWidth = 1
      for (const [a, b] of edges) {
        const pa = projected[a]
        const pb = projected[b]
        const depth = (pa.depth + pb.depth) / 2
        const isAnchor = a >= anchorStart || b >= anchorStart
        ctx.strokeStyle = `rgba(${isAnchor ? RGB.aqua : RGB.node},${(isAnchor ? 0.1 : 0.035) + depth * (isAnchor ? 0.3 : 0.17)})`
        ctx.beginPath()
        ctx.moveTo(pa.x, pa.y)
        ctx.lineTo(pb.x, pb.y)
        ctx.stroke()
      }

      // Cursor scan: nodes near the pointer light up and tether to it.
      const scanR = 110
      for (let i = 0; i < anchorStart; i++) {
        const p = projected[i]
        const dx = p.x - pointer.px
        const dy = p.y - pointer.py
        const dist = Math.hypot(dx, dy)
        const lit = dist < scanR ? 1 - dist / scanR : 0
        if (lit > 0 && p.depth > 0.35) {
          ctx.strokeStyle = `rgba(${RGB.aqua},${lit * 0.22})`
          ctx.beginPath()
          ctx.moveTo(pointer.px, pointer.py)
          ctx.lineTo(p.x, p.y)
          ctx.stroke()
        }
        const r = 0.6 + p.depth * 1.5 + lit * 1.4
        ctx.fillStyle = lit > 0.05 ? `rgba(${RGB.aqua},${0.4 + lit * 0.6})` : `rgba(${RGB.node},${0.18 + p.depth * 0.62})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fill()
      }

      // Policy core: a dashed membrane and an inner counter-rotating cluster.
      const centre = project([0, 0, 0], tmp)
      const membraneR = MEMBRANE * scale * centre.f
      const glow = ctx.createRadialGradient(centre.x, centre.y, 0, centre.x, centre.y, membraneR * 1.6)
      glow.addColorStop(0, `rgba(${RGB.aqua},0.16)`)
      glow.addColorStop(1, `rgba(${RGB.aqua},0)`)
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(centre.x, centre.y, membraneR * 1.6, 0, Math.PI * 2)
      ctx.fill()

      ctx.save()
      ctx.setLineDash([3, 6])
      ctx.lineDashOffset = -time * 8
      ctx.strokeStyle = `rgba(${RGB.aqua},0.45)`
      ctx.beginPath()
      ctx.arc(centre.x, centre.y, membraneR, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()

      const savedYaw = yaw
      yaw = -spin * 1.7
      for (let i = 0; i < core.length; i++) project(core[i], coreProjected[i])
      yaw = savedYaw
      ctx.strokeStyle = `rgba(${RGB.aqua},0.28)`
      for (const [a, b] of coreEdges) {
        ctx.beginPath()
        ctx.moveTo(coreProjected[a].x, coreProjected[a].y)
        ctx.lineTo(coreProjected[b].x, coreProjected[b].y)
        ctx.stroke()
      }
      for (const p of coreProjected) {
        ctx.fillStyle = `rgba(${RGB.aqua},${0.45 + p.depth * 0.5})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 0.8 + p.depth * 1.1, 0, Math.PI * 2)
        ctx.fill()
      }

      // Signals.
      for (const p of packets) {
        const head = project(pointAt(p, p.t), tmp)
        const tailT = p.phase === 'returning' ? p.t + 0.07 : Math.max(0, p.t - 0.07)
        const tail = project(pointAt(p, tailT), tmp2)
        const rgb = colorFor(p)
        const alpha = Math.max(0, Math.min(1, p.fade)) * (0.45 + head.depth * 0.55)
        const grad = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y)
        grad.addColorStop(0, `rgba(${rgb},0)`)
        grad.addColorStop(1, `rgba(${rgb},${alpha})`)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.4
        ctx.beginPath()
        ctx.moveTo(tail.x, tail.y)
        ctx.lineTo(head.x, head.y)
        ctx.stroke()
        ctx.lineWidth = 1
        ctx.fillStyle = `rgba(${rgb},${alpha})`
        ctx.beginPath()
        ctx.arc(head.x, head.y, 1.8, 0, Math.PI * 2)
        ctx.fill()
        if (p.phase === 'held') {
          const ring = 3 + ((p.hold * 9) % 9)
          ctx.strokeStyle = `rgba(${rgb},${alpha * (1 - ring / 12)})`
          ctx.beginPath()
          ctx.arc(head.x, head.y, ring, 0, Math.PI * 2)
          ctx.stroke()
        }
      }

      // Project anchors: rings on canvas, labels as real links in the DOM.
      for (let i = 0; i < anchorPoints.length; i++) {
        const p = projected[anchorStart + i]
        ctx.strokeStyle = `rgba(${RGB.aqua},${0.35 + p.depth * 0.6})`
        ctx.fillStyle = `rgba(${RGB.aqua},${0.6 + p.depth * 0.4})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 5.5, 0, Math.PI * 2)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fill()
        const el = anchorRefs.current[i]
        if (el) {
          el.style.transform = `translate(${p.x}px, ${p.y}px)`
          el.style.opacity = String(0.35 + p.depth * 0.65)
        }
      }
    }

    let raf = 0
    let last = 0
    let clock = 0
    let running = false

    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0)
      last = now
      clock += dt
      pointer.x += (pointer.tx - pointer.x) * 0.04
      pointer.y += (pointer.ty - pointer.y) * 0.04
      // Slow drift, slower still while someone is reading an anchor label.
      spin += dt * (hoverRef.current ? 0.015 : 0.06)
      yaw = Math.sin(spin) * 0.55 + pointer.x * 0.35
      pitch = -0.2 + pointer.y * 0.22
      stepPackets(dt)
      draw(clock)
      raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (running || reduce) return
      running = true
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    resize()

    if (reduce) {
      // One still frame with a few signals frozen mid-decision.
      for (let i = 0; i < 9; i++) spawn()
      packets.forEach((p, i) => {
        p.t = p.gate * (0.4 + (i % 3) * 0.3)
        if (i % 3 === 2) {
          p.t = p.gate
          p.phase = p.outcome === 'escalate' ? 'held' : 'through'
        }
      })
      draw(0)
    }

    const ro = new ResizeObserver(() => {
      resize()
      if (reduce) draw(0)
    })
    ro.observe(wrap)

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !document.hidden) start()
      else stop()
    })
    io.observe(wrap)

    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [anchors])

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <canvas ref={canvasRef} className="block" aria-hidden="true" />
      <ul className="absolute inset-0 hidden lg:block" aria-label="Projects in the lattice">
        {anchors.map((a, i) => (
          <li
            key={a.id}
            ref={(el) => (anchorRefs.current[i] = el)}
            className="absolute left-0 top-0 will-change-transform"
          >
            <a
              href={a.href}
              onMouseEnter={() => (hoverRef.current = true)}
              onMouseLeave={() => (hoverRef.current = false)}
              onFocus={() => (hoverRef.current = true)}
              onBlur={() => (hoverRef.current = false)}
              className="group absolute -translate-y-1/2 left-3 whitespace-nowrap py-2 pl-3 pr-2 flex items-center gap-2"
            >
              <span className="h-px w-5 bg-varuna/50 transition-all duration-200 group-hover:w-8 group-hover:bg-varuna" />
              <span className="label !text-veil/80 group-hover:!text-varuna transition-colors duration-200">
                {a.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HeroLattice
