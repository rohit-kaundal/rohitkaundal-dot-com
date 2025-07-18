# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern cybersecurity professional portfolio website built with React, showcasing Rohit Kaundal's expertise. The site features a neo-cyberpunk aesthetic with glassmorphism effects, animations, and interactive elements.

## Architecture

**Tech Stack:**
- React 18 with Vite for fast development and building
- Tailwind CSS for styling with custom cyberpunk theme
- Framer Motion for animations and interactions
- Three.js for 3D graphics and effects
- Lucide React for icons

**Component Structure:**
- Single-page application with section-based components
- All components are in `src/components/` directory
- Main sections: Hero, About, Skills, Services, Certifications, Projects, Contact
- Special components: Navigation (fixed header), MouseTrail (interactive cursor effect)
- App.jsx serves as the main layout container

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Key Configuration

**Custom Tailwind Theme:**
- Custom color palette with `cyber` prefix (cyber-black, cyber-dark, cyber-blue, cyber-primary, etc.)
- Neon gradient backgrounds and glow effects
- Glassmorphism styling with backdrop blur
- Custom fonts: JetBrains Mono and Inter

**ESLint Configuration:**
- React-specific rules with hooks and refresh plugins
- Ignores unused variables with uppercase/underscore pattern
- Configured for modern JavaScript with JSX support

## Design System

The website uses a cyberpunk aesthetic with:
- Dark backgrounds with neon accents
- Glassmorphism effects for cards and sections
- Interactive animations powered by Framer Motion
- Responsive design with mobile-first approach
- Custom grid overlay for cyberpunk ambiance

## Security Features

- Honeypot form protection in contact form
- XSS prevention practices
- Privacy-focused design without external tracking