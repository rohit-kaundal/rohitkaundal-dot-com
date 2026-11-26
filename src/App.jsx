import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Shift from './components/Shift'
import DomainsOfFocus from './components/DomainsOfFocus'
import Offer from './components/Offer'
import About from './components/About'
import Work from './components/Work'
import Faq from './components/Faq'
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
          <Shift />
          <DomainsOfFocus />
          <Offer />
          <Work />
          <About />
          <Faq />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
