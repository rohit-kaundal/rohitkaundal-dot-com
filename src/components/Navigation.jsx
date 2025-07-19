import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Shield, ChevronDown, ExternalLink } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)

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
    { name: 'k8s-scanner', href: 'https://rohit-kaundal.github.io/k8s-scanner/', description: 'Kubernetes security scanner' },
    { name: 'DigitalOcean MCP server', href: 'https://rohit-kaundal.github.io/digitalocean-mcp-server', description: 'Model Context Protocol server' },
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
                  whileHover={{ y: -2 }}
                  className="text-gray-300 hover:text-cyber-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Tools Dropdown - Special Design */}
              <div className="relative">
                <motion.button
                  onClick={() => setToolsOpen(!toolsOpen)}
                  onMouseEnter={() => setToolsOpen(true)}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyber-primary/20 to-cyber-accent/20 hover:from-cyber-primary/30 hover:to-cyber-accent/30 border border-cyber-primary/40 hover:border-cyber-accent/60 rounded-lg backdrop-blur-sm shadow-lg hover:shadow-neon transition-all duration-300 font-medium group"
                >
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                    <span className="text-cyber-primary group-hover:text-cyber-accent transition-colors duration-300">Tools</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-cyber-primary group-hover:text-cyber-accent transition-all duration-300 ${toolsOpen ? 'rotate-180' : ''}`} />
                </motion.button>
                
                {toolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setToolsOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 glass backdrop-blur-md rounded-lg border border-cyber-primary/20 shadow-xl z-50"
                  >
                    <div className="p-2">
                      {toolsItems.map((tool) => (
                        <motion.a
                          key={tool.name}
                          href={tool.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 4 }}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-cyber-primary/10 transition-colors duration-200 group"
                        >
                          <div>
                            <div className="text-white font-medium text-sm">{tool.name}</div>
                            <div className="text-gray-400 text-xs">{tool.description}</div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyber-primary transition-colors duration-200" />
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
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyber-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Tools Section */}
            <div className="px-3 py-2 mt-4">
              <div className="flex items-center space-x-2 mb-3 px-3 py-2 bg-gradient-to-r from-cyber-primary/20 to-cyber-accent/20 border border-cyber-primary/40 rounded-lg">
                <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                <div className="text-cyber-primary text-sm font-medium">Tools</div>
              </div>
              {toolsItems.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-2 px-3 text-sm text-gray-300 hover:text-cyber-primary transition-colors duration-200 rounded-lg hover:bg-cyber-primary/10"
                >
                  <div>
                    <div className="font-medium">{tool.name}</div>
                    <div className="text-xs text-gray-400">{tool.description}</div>
                  </div>
                  <ExternalLink className="w-4 h-4" />
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