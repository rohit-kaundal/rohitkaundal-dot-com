import React from 'react'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import DomainsOfFocus from './components/DomainsOfFocus'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

// Note: Work component will be created in Phase 4
// import Work from './components/Work'

function App() {
  return (
    <div className="min-h-screen bg-institutional-charcoal text-institutional-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Manifesto />
        <DomainsOfFocus />
        <About />
        {/* <Work /> */}
        <Contact />
      </main>
    </div>
  )
}

export default App