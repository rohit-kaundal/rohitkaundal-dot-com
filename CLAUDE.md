# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Architecture Overview

This is a cybersecurity professional portfolio website built as a React SPA with a neo-cyberpunk aesthetic:

### Tech Stack
- **Frontend**: React 18 with Vite as build tool
- **Styling**: Tailwind CSS with custom cyber-themed color palette
- **Animations**: Framer Motion for smooth transitions and interactions
- **3D Graphics**: Three.js for the animated globe in the Hero section
- **Icons**: Lucide React

### Component Structure
Single-page application with section-based components:
- `App.jsx`: Main layout with fixed grid background and mouse trail
- `Navigation.jsx`: Sticky navigation
- `Hero.jsx`: Landing section with Three.js animated globe
- `About.jsx`, `Skills.jsx`, `Services.jsx`, `Certifications.jsx`, `Projects.jsx`: Content sections
- `Contact.jsx`: Contact form with security features
- `MouseTrail.jsx`: Custom cursor animation

### Styling System
- Custom Tailwind configuration with cyber-themed colors (`cyber-black`, `cyber-primary`, etc.)
- Glassmorphism effects using backdrop blur and transparency
- Neon glow shadows and gradient backgrounds
- Responsive design with mobile-first approach
- Custom cursor disabled on mobile devices

### Key Design Patterns
- All components are functional components using React hooks
- Framer Motion animations with consistent entrance effects
- Three.js scene setup in Hero component with cleanup on unmount
- Security-focused contact form with honeypot protection
- Smooth scroll behavior and custom scrollbar styling

### Calendly Integration
- **Appointment Link**: `https://calendly.com/rohit-vassagoconsultancy/30min`
- **Integrated in**:
  - Hero section: "Schedule a Call" CTA button
  - Services section: "Schedule a Consultation" CTA button
  - Contact section: "Schedule a Free Consultation" button with description
- All Calendly links open in new tabs with proper security attributes

### Development Notes
- Uses ES modules throughout
- Custom CSS properties defined in `index.css` for consistent theming
- All animations and effects are performance-optimized
- Components are designed to be self-contained with minimal prop drilling