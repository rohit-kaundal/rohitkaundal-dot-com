import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, Star } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      name: 'ISO 27001',
      fullName: 'ISO/IEC 27001 Information Security Associate',
      issuer: 'SkillFront',
      year: '2020',
      status: 'Active',
      level: 'Professional',
      color: 'from-blue-500 to-blue-600',
      description: 'Information security management systems implementation'
    },
    {
      name: 'CCIO',
      fullName: 'Certified Cyber Crime Intervention Officer',
      issuer: 'NSD, ISAC',
      year: '2019',
      status: 'Active',
      level: 'Expert',
      color: 'from-red-500 to-red-600',
      description: 'Cybercrime investigation and intervention specialist'
    },
    {
      name: 'GDPR',
      fullName: 'GDPR Compliance: Essential Training',
      issuer: 'LinkedIn Learning',
      year: '2021',
      status: 'Active',
      level: 'Professional',
      color: 'from-green-500 to-emerald-500',
      description: 'General Data Protection Regulation compliance expertise'
    },
    {
      name: 'CNSS',
      fullName: 'Certified Network Security Specialist',
      issuer: 'ICSI',
      year: '2020',
      status: 'Active',
      level: 'Professional',
      color: 'from-cyber-primary to-cyan-500',
      description: 'Network security architecture and implementation'
    },
    {
      name: 'Penetration Testing',
      fullName: 'Penetration Testing and Ethical Hacking',
      issuer: 'Cybrary',
      year: '2019',
      status: 'Active',
      level: 'Professional',
      color: 'from-purple-500 to-violet-500',
      description: 'Advanced penetration testing methodologies'
    },
    {
      name: 'Web App Testing',
      fullName: 'Web Application Penetration Testing',
      issuer: 'Cybrary',
      year: '2019',
      status: 'Active',
      level: 'Professional',
      color: 'from-orange-500 to-amber-500',
      description: 'Web application security assessment techniques'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const getLevelIcon = (level) => {
    switch (level) {
      case 'Expert':
        return <Star className="w-4 h-4 text-yellow-400" />
      case 'Professional':
        return <Award className="w-4 h-4 text-blue-400" />
      case 'Specialty':
        return <ExternalLink className="w-4 h-4 text-green-400" />
      default:
        return <Award className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-cyber-primary">Certifications</span> & Credentials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise across multiple cybersecurity domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass p-6 rounded-xl group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <div className={`w-full h-full bg-gradient-to-br ${cert.color} rounded-bl-full`} />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {getLevelIcon(cert.level)}
                    <span className="text-xs text-gray-400">{cert.level}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyber-primary transition-colors duration-300">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{cert.fullName}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-cyber-primary font-medium">{cert.issuer}</span>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.year}
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    cert.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {cert.status}
                  </span>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-cyber-primary/20 hover:bg-cyber-primary/30"
                  >
                    <ExternalLink className="w-4 h-4 text-cyber-primary" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="glass p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Continuous <span className="text-cyber-primary">Learning</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              The cybersecurity landscape evolves rapidly. I maintain current certifications 
              and continuously pursue new credentials to stay ahead of emerging threats and technologies.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-primary mb-1">6+</div>
                <div className="text-sm text-gray-400">Active Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-accent mb-1">100+</div>
                <div className="text-sm text-gray-400">Hours Annual Training</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-green mb-1">12+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications