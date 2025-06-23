import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const MouseTrail = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [trails, setTrails] = useState([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY }
      setMousePos(newPos)
      
      // Add new trail point
      const newTrail = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      }
      
      setTrails(prevTrails => {
        const updatedTrails = [...prevTrails, newTrail]
        // Keep only recent trails (last 500ms)
        return updatedTrails.filter(trail => Date.now() - trail.timestamp < 500)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Clean up old trails periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails(prevTrails => 
        prevTrails.filter(trail => Date.now() - trail.timestamp < 500)
      )
    }, 50)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor glow */}
      <motion.div
        className="fixed w-6 h-6 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(57, 255, 20, 0.8) 0%, rgba(57, 255, 20, 0.4) 30%, rgba(57, 255, 20, 0.1) 70%, transparent 100%)',
          boxShadow: '0 0 20px rgba(57, 255, 20, 0.6), 0 0 40px rgba(57, 255, 20, 0.3)',
          filter: 'blur(2px)'
        }}
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.8
        }}
      />

      {/* Smoke trail particles */}
      {trails.map((trail, index) => {
        const age = Date.now() - trail.timestamp
        const opacity = Math.max(0, 1 - (age / 500))
        const scale = 1 - (age / 1000)
        
        return (
          <motion.div
            key={trail.id}
            className="fixed rounded-full"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              background: `radial-gradient(circle, rgba(57, 255, 20, ${opacity * 0.6}) 0%, rgba(34, 197, 94, ${opacity * 0.4}) 50%, transparent 100%)`,
              boxShadow: `0 0 ${10 * opacity}px rgba(57, 255, 20, ${opacity * 0.5})`,
              filter: 'blur(1px)',
              left: trail.x - 4,
              top: trail.y - 4,
            }}
            initial={{ 
              scale: 0.8,
              opacity: opacity,
              y: 0
            }}
            animate={{ 
              scale: scale * 0.3,
              opacity: 0,
              y: -20 - Math.random() * 10,
              x: (Math.random() - 0.5) * 20
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
          />
        )
      })}

      {/* Additional floating particles */}
      {trails.filter((_, i) => i % 3 === 0).map((trail, index) => {
        const age = Date.now() - trail.timestamp
        const opacity = Math.max(0, 0.8 - (age / 300))
        
        return (
          <motion.div
            key={`particle-${trail.id}`}
            className="fixed rounded-full"
            style={{
              width: '3px',
              height: '3px',
              background: `rgba(57, 255, 20, ${opacity})`,
              boxShadow: `0 0 6px rgba(57, 255, 20, ${opacity})`,
              left: trail.x,
              top: trail.y,
            }}
            initial={{ 
              scale: 1,
              opacity: opacity,
            }}
            animate={{ 
              scale: 0,
              opacity: 0,
              y: -30 - Math.random() * 20,
              x: (Math.random() - 0.5) * 30
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          />
        )
      })}

      {/* Cursor ring effect */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border border-cyber-green"
        style={{
          borderWidth: '1px',
          boxShadow: '0 0 10px rgba(57, 255, 20, 0.5)',
        }}
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 150,
          mass: 0.5
        }}
      />
    </div>
  )
}

export default MouseTrail