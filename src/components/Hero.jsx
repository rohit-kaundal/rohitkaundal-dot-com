import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react'
import * as THREE from 'three'

const Hero = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)

    const globeGeometry = new THREE.SphereGeometry(2, 32, 32)
    const globeMaterial = new THREE.MeshPhongMaterial({
      color: 0x1a365d,
      transparent: true,
      opacity: 0.8,
      wireframe: false
    })
    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    scene.add(globe)

    const wireframeGeometry = new THREE.SphereGeometry(2.05, 32, 32)
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    })
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial)
    scene.add(wireframe)

    const shieldGeometry = new THREE.SphereGeometry(2.8, 32, 32)
    const shieldMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide
    })
    const shield = new THREE.Mesh(shieldGeometry, shieldMaterial)
    scene.add(shield)

    const shieldRings = []
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.TorusGeometry(2.8 + i * 0.1, 0.02, 8, 100)
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.6
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.rotation.x = Math.PI / 2 + (i * Math.PI / 6)
      ring.rotation.z = i * Math.PI / 3
      shieldRings.push(ring)
      scene.add(ring)
    }

    const attackParticles = []
    const attackParticleCount = 20
    
    for (let i = 0; i < attackParticleCount; i++) {
      const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8)
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0040,
        transparent: true,
        opacity: 0.8
      })
      const particle = new THREE.Mesh(particleGeometry, particleMaterial)
      
      const angle = (i / attackParticleCount) * Math.PI * 2
      const radius = 8 + Math.random() * 4
      particle.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 6,
        Math.sin(angle) * radius
      )
      
      particle.userData = {
        velocity: new THREE.Vector3(
          -Math.cos(angle) * 0.02,
          (Math.random() - 0.5) * 0.01,
          -Math.sin(angle) * 0.02
        ),
        originalPosition: particle.position.clone()
      }
      
      attackParticles.push(particle)
      scene.add(particle)
    }

    const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0x00d4ff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    camera.position.z = 8

    let shieldActive = false
    let shieldActivationTime = 0

    const animate = () => {
      requestAnimationFrame(animate)

      globe.rotation.y += 0.005
      wireframe.rotation.y += 0.007

      shieldRings.forEach((ring, index) => {
        ring.rotation.y += 0.01 * (index + 1)
        ring.rotation.x += 0.005
      })

      attackParticles.forEach(particle => {
        particle.position.add(particle.userData.velocity)
        
        const distanceToCenter = particle.position.length()
        
        if (distanceToCenter < 3.2) {
          if (!shieldActive) {
            shieldActive = true
            shieldActivationTime = Date.now()
          }
          
          const direction = particle.position.normalize()
          particle.position.copy(direction.multiplyScalar(3.2))
          
          particle.userData.velocity.reflect(direction)
          particle.userData.velocity.multiplyScalar(0.8)
        }
        
        if (distanceToCenter > 15) {
          particle.position.copy(particle.userData.originalPosition)
          const angle = Math.atan2(particle.position.z, particle.position.x)
          particle.userData.velocity.set(
            -Math.cos(angle) * 0.02,
            (Math.random() - 0.5) * 0.01,
            -Math.sin(angle) * 0.02
          )
        }
      })

      if (shieldActive) {
        const timeSinceActivation = Date.now() - shieldActivationTime
        const intensity = Math.max(0, 1 - timeSinceActivation / 1000)
        
        shield.material.opacity = 0.15 + intensity * 0.3
        shieldRings.forEach(ring => {
          ring.material.opacity = 0.6 + intensity * 0.4
        })
        
        if (intensity <= 0) {
          shieldActive = false
        }
      }

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
    <section id="home" className="relative min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0f1419 100%)' }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto backdrop-blur-sm bg-black/20 rounded-3xl border border-white/10 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-12"
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
            <div className="mb-2">Cyber Security Consultant & Digital Forensics Investigator</div>
            <div className="text-cyber-primary">Defender of Digital Frontiers</div>
          </motion.div>

          <motion.p
            className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}
          >
            Over 12+ years of experience in web security, network security, application security, 
            cyber forensics investigation, and cybercrime investigation. Specialized in AI solutions 
            security auditing and Blockchain smart contract auditing. Expert in ISMS frameworks 
            adhering to GDPR/Privacy Shield, PCI, SOX, ISO 27001 & HIPAA standards.
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