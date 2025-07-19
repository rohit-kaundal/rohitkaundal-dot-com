import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Shield, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const toolsItems = [
    { name: 'K8s Scanner', href: 'https://rohit-kaundal.github.io/k8s-scanner/', external: true },
    { name: 'DigitalOcean MCP Server', href: 'https://rohit-kaundal.github.io/digitalocean-mcp-server/', external: true },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Shield className="h-8 w-8 text-cyber-primary" />
            <span className="text-xl font-bold text-white">Rohit Kaundal</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -2 }}
                  className="text-gray-300 hover:text-cyber-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Tools Dropdown */}
              <div className="relative">
                <motion.button
                  onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                  whileHover={{ y: -2 }}
                  className="text-cyber-primary hover:text-cyber-accent bg-gradient-to-r from-cyber-primary/20 to-cyber-accent/20 px-3 py-1 rounded-lg border border-cyber-primary/30 hover:border-cyber-accent/50 shadow-neon-sm transition-colors duration-200 font-medium flex items-center space-x-1"
                >
                  <span>Tools</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>
                
                {toolsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 glass backdrop-blur-md rounded-lg border border-cyber-primary/30 shadow-lg z-50"
                  >
                    <div className="py-2">
                      {toolsItems.map((tool) => (
                        <motion.a
                          key={tool.name}
                          href={tool.href}
                          target={tool.external ? '_blank' : '_self'}
                          rel={tool.external ? 'noopener noreferrer' : undefined}
                          whileHover={{ x: 4 }}
                          className="block px-4 py-2 text-gray-300 hover:text-cyber-primary hover:bg-cyber-primary/10 transition-colors duration-200"
                          onClick={() => setToolsDropdownOpen(false)}
                        >
                          {tool.name}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : undefined}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium transition-colors duration-200 text-gray-300 hover:text-cyber-primary"
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Tools Section */}
            <div className="pt-2 border-t border-cyber-primary/20">
              <div className="px-3 py-1 text-cyber-primary font-semibold text-sm">Tools</div>
              {toolsItems.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target={tool.external ? '_blank' : '_self'}
                  rel={tool.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2 text-base font-medium transition-colors duration-200 text-gray-300 hover:text-cyber-primary"
                >
                  {tool.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navigation