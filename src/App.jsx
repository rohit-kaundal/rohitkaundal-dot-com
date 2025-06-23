import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import MouseTrail from './components/MouseTrail'

function App() {
  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-x-hidden">
      <div className="cyber-grid fixed inset-0 pointer-events-none opacity-20"></div>
      <MouseTrail />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App