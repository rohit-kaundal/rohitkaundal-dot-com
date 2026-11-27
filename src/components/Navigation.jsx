import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Lab', href: '#lab', index: '01' },
  { name: 'Field notes', href: '#notes', index: '02' },
  { name: 'Evolution', href: '#evolution', index: '03' },
  { name: 'Thread', href: '#thread', index: '04' },
  { name: 'Contact', href: '#contact', index: '05' },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || isOpen ? 'bg-rahu-void/85 backdrop-blur-md border-b border-rahu-border' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-veil hover:text-varuna transition-colors duration-200">
          <span className="w-2 h-2 rounded-full border border-varuna" aria-hidden="true" />
          <span className="font-medium tracking-tight">Rohit Kaundal</span>
          <span className="hidden sm:inline label !text-saturn-dim">/ builder</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="group flex items-baseline gap-1.5 text-sm text-saturn hover:text-veil transition-colors duration-200">
                <span className="font-mono text-[0.625rem] text-saturn-dim group-hover:text-varuna transition-colors duration-200">{item.index}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="md:hidden text-saturn hover:text-varuna transition-colors duration-200"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden px-6 pb-6 pt-2 space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-baseline gap-3 py-2 text-lg text-saturn hover:text-veil transition-colors duration-200"
              >
                <span className="font-mono text-xs text-varuna/70">{item.index}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navigation
