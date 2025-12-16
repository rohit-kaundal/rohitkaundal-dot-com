import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

// Note: Manifesto, DomainsOfFocus, Work components will be created in Phase 3-4
// import Manifesto from './components/Manifesto'
// import DomainsOfFocus from './components/DomainsOfFocus'
// import Work from './components/Work'

function App() {
  return (
    <div className="min-h-screen bg-institutional-charcoal text-institutional-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        {/* <Manifesto /> */}
        {/* <DomainsOfFocus /> */}
        <About />
        {/* <Work /> */}
        <Contact />
      </main>
    </div>
  )
}

export default App