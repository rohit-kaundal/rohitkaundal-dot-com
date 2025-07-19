import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react'
import * as THREE from 'three'

const Hero = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Simple particle animation - minimal distractions
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)

    // Create minimal floating particles
    const particles = []
    for (let i = 0; i < 30; i++) {
      const geometry = new THREE.SphereGeometry(0.01, 4, 4)
      const material = new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        transparent: true,
        opacity: 0.1
      })
      const particle = new THREE.Mesh(geometry, material)
      
      particle.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      )
      
      particle.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        )
      }
      
      particles.push(particle)
      scene.add(particle)
    }

    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    camera.position.z = 10

    const animate = () => {
      requestAnimationFrame(animate)

      particles.forEach(particle => {
        particle.position.add(particle.userData.velocity)
        
        // Wrap around screen
        if (particle.position.x > 10) particle.position.x = -10
        if (particle.position.x < -10) particle.position.x = 10
        if (particle.position.y > 7) particle.position.y = -7
        if (particle.position.y < -7) particle.position.y = 7
      })

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      scene.clear()
    }
  }, [])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rohit-kaundal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rohitkaundal', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/rohitkaundal', label: 'Twitter' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* PCB Board Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px),
          linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(131, 56, 236, 0.02) 1px, transparent 1px),
          linear-gradient(rgba(131, 56, 236, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px, 40px 40px, 120px 120px, 120px 120px',
        backgroundPosition: '0 0, 0 0, 20px 20px, 20px 20px'
      }}>
        {/* PCB Circuit Traces */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Horizontal traces */}
              <line x1="0" y1="50" x2="200" y2="50" stroke="#00d4ff" strokeWidth="1"/>
              <line x1="0" y1="100" x2="200" y2="100" stroke="#8338ec" strokeWidth="1"/>
              <line x1="0" y1="150" x2="200" y2="150" stroke="#00ff88" strokeWidth="1"/>
              {/* Vertical traces */}
              <line x1="50" y1="0" x2="50" y2="200" stroke="#00d4ff" strokeWidth="1"/>
              <line x1="100" y1="0" x2="100" y2="200" stroke="#8338ec" strokeWidth="1"/>
              <line x1="150" y1="0" x2="150" y2="200" stroke="#00ff88" strokeWidth="1"/>
              {/* Connection pads */}
              <circle cx="50" cy="50" r="3" fill="#00ff88"/>
              <circle cx="100" cy="100" r="3" fill="#00d4ff"/>
              <circle cx="150" cy="150" r="3" fill="#8338ec"/>
              <circle cx="150" cy="50" r="3" fill="#00ff88"/>
              <circle cx="50" cy="150" r="3" fill="#00d4ff"/>
              {/* Chip components */}
              <rect x="70" y="70" width="20" height="30" fill="none" stroke="#00d4ff" strokeWidth="1"/>
              <rect x="120" y="30" width="25" height="15" fill="none" stroke="#8338ec" strokeWidth="1"/>
              <rect x="30" y="120" width="15" height="25" fill="none" stroke="#00ff88" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* PCB Component Overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Microchips */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`chip-${i}`}
            className="absolute border border-cyber-primary/40 bg-cyber-primary/5 animate-pulse"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              width: '20px',
              height: '28px',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Connection Pads */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`pad-${i}`}
            className="absolute bg-cyber-green/60 rounded-full animate-ping"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              width: '6px',
              height: '6px',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Resistors */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`resistor-${i}`}
            className="absolute border border-cyber-accent/40 bg-cyber-accent/10"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              width: '12px',
              height: '4px',
              transform: `rotate(${Math.random() * 180}deg)`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Transparent PCB Board Card */}
        <div className="relative backdrop-blur-sm bg-gradient-to-br from-cyber-dark/30 via-transparent to-cyber-blue/20 rounded-3xl border border-cyber-primary/30 shadow-2xl overflow-hidden">
          {/* PCB Board Texture Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/10 to-cyber-accent/10"></div>
            {/* Circuit trace overlay on card */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,50 L150,50 L150,100 L250,100" stroke="#00d4ff" strokeWidth="1" fill="none" opacity="0.3"/>
              <path d="M100,0 L100,80 L200,80 L200,150" stroke="#8338ec" strokeWidth="1" fill="none" opacity="0.3"/>
              <circle cx="100" cy="50" r="4" fill="#00ff88" opacity="0.4"/>
              <circle cx="200" cy="100" r="4" fill="#00d4ff" opacity="0.4"/>
              <rect x="80" y="30" width="15" height="20" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.3"/>
            </svg>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-12 relative z-10"
          >
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative">
              <img
                src="https://media.licdn.com/dms/image/v2/C5603AQGqYkbo4Neyqg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1634764859894?e=1756339200&v=beta&t=4NAM_7-toQ1ddcLiNVwCkWhcirnNOzRPC0-VyKm_a_4"
                alt="Rohit Kaundal"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-cyber-primary shadow-neon object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-cyber-primary/20 pointer-events-none"></div>
            </div>
          </motion.div>
          
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
          >
            <span className="text-white">Rohit</span>{' '}
            <span className="text-cyber-primary neon-text">Kaundal</span>
          </motion.h1>

          <motion.div
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}
          >
            <div className="mb-2">Cybersecurity Strategist | AI & Cloud Security Architect | Smart Contract Auditor</div>
            <div className="text-cyber-primary">Helping Startups Stay Secure & Compliant 🚀</div>
          </motion.div>

          <motion.p
            className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}
          >
            Over 17+ years of experience helping SaaS startups secure their cloud infrastructure, 
            automate compliance, and scale without fear. Specialized in GenAI-powered security solutions, 
            smart contract auditing, and startup-focused automation. Expert in SOC2, ISO 27001, and 
            compliance frameworks tailored for fast-growing teams.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyber-primary to-cyber-accent text-white font-semibold rounded-lg shadow-neon hover:shadow-neon-pink transition-all duration-300"
            >
              Get In Touch
            </motion.a>
            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass border border-cyber-primary text-cyber-primary font-semibold rounded-lg hover:bg-cyber-primary hover:text-white transition-all duration-300"
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-cyber-primary transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <social.icon size={24} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-cyber-primary" size={32} />
      </motion.div>
    </section>
  )
}

export default Hero