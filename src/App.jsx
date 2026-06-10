import React from 'react'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import DomainsOfFocus from './components/DomainsOfFocus'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-institutional-charcoal text-institutional-white overflow-x-hidden">
      <Navigation />
      <main className="px-4 md:px-8 py-24">
        <div className="glass-plate glass-plate--sheet max-w-7xl mx-auto">
          <Hero />
          <Manifesto />
          <DomainsOfFocus />
          <About />
          <Work />
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App