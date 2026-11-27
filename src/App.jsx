import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Lab from './components/Lab'
import FieldNotes from './components/FieldNotes'
import Evolution from './components/Evolution'
import Thread from './components/Thread'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen text-veil overflow-x-clip">
      <a
        href="#lab"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-varuna focus:text-rahu-void focus:px-4 focus:py-2"
      >
        Skip to projects
      </a>
      <Navigation />
      <main>
        <Hero />
        <Lab />
        <FieldNotes />
        <Evolution />
        <Thread />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
