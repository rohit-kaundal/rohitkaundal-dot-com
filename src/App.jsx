import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import DomainsOfFocus from './components/DomainsOfFocus'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-rahu-void text-veil overflow-x-hidden">
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
      <Footer />
    </div>
  )
}

export default App
