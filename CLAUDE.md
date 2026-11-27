# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Architecture Overview

Personal site of Rohit Kaundal, positioned as a **Cybersecurity & AI Builder** (founder of AIFortess). React SPA, dark "instrument lab" aesthetic: each project is shown as a working interactive model, not a card.

### Tech Stack
- React 19 + Vite, Tailwind CSS 3, Framer Motion (entrance/reveal only), Lucide icons
- Fonts: Space Grotesk (text), JetBrains Mono (`.label` metadata register), Instrument Serif italic (`.voice`, one emphasis word per headline)

### Structure
- `src/data/` holds every fact the site states. Edit content here, not in components.
  - `projects.js`: the four builds. `repo.public: false` renders "Source · private" instead of a link.
  - `lab.js`: Field Notes log entries (instructions at the top of the file).
  - `evolution.js`: career phases + credentials, sourced from the 2026 professional profile.
  - `site.js`: email, socials, PGP.
- `src/components/`
  - `Hero.jsx` + `HeroLattice.jsx`: 2D-canvas pseudo-3D lattice with a policy core; signals are allowed/escalated/blocked. Pauses offscreen, static frame under reduced motion. Project anchors are DOM links positioned per frame.
  - `Lab.jsx`: project chapters with alternating layouts; instruments in `components/instruments/`
    (`AssessorMap`, `VertiasGateway`, `HandlerSectors`, `HackerCamReel`). Each mirrors the real product's logic.
  - `FieldNotes.jsx`, `Evolution.jsx` (sticky phase word), `Thread.jsx` (principles with evidence), `Contact.jsx`, `Navigation.jsx`, `Footer.jsx`, `Reveal.jsx`, `SectionHeading.jsx`
- `public/builds/hackercam/`: real frames from the HackerCamFilter repo docs.

### Colour tokens (tailwind.config.js)
`rahu.*` backgrounds, `varuna` aquamarine (primary / "allowed"), `saturn` secondary text, `veil` primary text, `signal` amber ("escalated", in-progress), `alarm` red ("blocked", status labels only), `dharma` gold (one "carried forward" idea per career phase).

### Content rules
- Builder and founder first. Consulting/advisory only as supporting background.
- Never invent features, users, metrics, testimonials or experiments. Every claim must trace to a repo, the profile PDF, or a live site.
- Vertias AI is pre-launch: describe it as in build (UI prototype + v1 design done, launch by Feb 2027).
- Field Notes logs only things that happened; empty categories show a reserved empty state.
- Contact is email-first: rohit@aifortess.com. No Calendly, no sales offers.
- Do not showcase the website's own tech stack on the site.

### Lint note
ESLint's core `no-unused-vars` cannot see lower-case JSX member usage (`<motion.div>`), so components alias to capitalised names (`const MotionDiv = motion.div`).
