# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Architecture Overview

This is an AI governance and cybersecurity professional portfolio website built as a React SPA with institutional minimalism design philosophy.

### Tech Stack
- **Frontend**: React 18 with Vite as build tool
- **Styling**: Tailwind CSS with custom institutional color palette
- **Animations**: Minimal Framer Motion (entrance animations only)
- **Typography**: Space Grotesk (futuristic geometric sans-serif)
- **Icons**: Lucide React (minimal usage)

### Component Structure
Single-page application with section-based components:
- `App.jsx`: Main layout with institutional charcoal background
- `Navigation.jsx`: Minimal sticky navigation with underline-on-hover
- `Hero.jsx`: Typography-driven landing section with single entrance animation
- `Manifesto.jsx`: Governance doctrine and authority positioning content
- `DomainsOfFocus.jsx`: Four expertise areas (replaces old Skills component)
- `About.jsx`: Extended narrative with background and areas of application
- `Work.jsx`: Curated project showcase in narrative format (replaces Projects)
- `Contact.jsx`: Email-first contact with selective positioning

### Styling System
- Custom Tailwind configuration with institutional colors:
  - `institutional-charcoal` (#0A0E1A): Deep background
  - `institutional-white` (#F5F5F5): Primary text
  - `institutional-accent` (#6B7A99): Subtle blue-gray accent
  - `institutional-gold` (#B8956A): Warm hover state
  - `institutional-border` (#1F2937): Subtle borders
  - `institutional-hover` (#1A202E): Background hover states
- Minimal design with typography hierarchy (font-weight: 300)
- Responsive typography scaling (18px → 20px body text)
- Simple CSS transitions for hover states (200ms duration)
- No glassmorphism, neon effects, or complex animations

### Key Design Patterns
- All components are functional components using React hooks
- Minimal animations: Only subtle entrance fade-in on Hero (no stagger, no delays)
- CSS transitions only for interactive states (no Framer Motion hover effects)
- Authority positioning: Declarative content, no persuasion or metrics bragging
- Editorial layout: `.prose` class for max-width 800px content containers
- Smooth scroll behavior and custom scrollbar styling (institutional colors)

### Content Strategy
- **Positioning**: AI Governance & Cyber Defense Authority (not consultant)
- **Tone**: Institutional, doctrine-driven, selective
- **Navigation Flow**: Home → Manifesto → Work → About → Contact
- **No Calendly CTAs**: Email-first contact strategy
- **No startup language**: Removed "SaaS", "founders", "fast-growing" terminology
- **Selective copy**: "This is institutional work—not project-based consulting"

### Removed Components & Features
These components were part of the previous neo-cyberpunk design and have been removed:
- `MouseTrail.jsx`: Custom glowing cursor
- `Skills.jsx`: Proficiency bars and tool lists
- `Services.jsx`: Service offerings grid (content integrated into About)
- `Certifications.jsx`: Certification badges (content integrated into About)
- `Projects.jsx`: GitHub-style project cards (replaced by Work.jsx narrative format)
- Three.js animated particles/globe in Hero
- Calendly integration throughout site
- Profile picture with neon border
- Glass cards and gradient backgrounds

### Development Notes
- Uses ES modules throughout
- Global styles defined in `index.css` for typography and spacing
- Section spacing: 8rem (mobile/tablet) → 10rem (desktop)
- All hover states use `transition-colors duration-200` pattern
- Components are self-contained with minimal prop drilling
- Git branch: `redesign-institutional` (redesign work), `master` (previous design)
