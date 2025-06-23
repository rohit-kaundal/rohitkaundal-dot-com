import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, Users, Zap } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Shield, label: 'Years Experience', value: '12+' },
    { icon: Award, label: 'Certifications', value: '6+' },
    { icon: Users, label: 'Clients Protected', value: '100+' },
    { icon: Zap, label: 'Cases Investigated', value: '500+' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            About <span className="text-cyber-primary">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-cyber-primary">
              Cyber Security Consultant & Digital Forensics Investigator
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                With over 12+ years of experience in cybersecurity, I specialize in web security, 
                network security, application security, cyber forensics investigation, and cybercrime 
                investigation. Founder of Vassago Consultancy, a cyber security and digital forensics services company.
              </p>
              <p>
                Expert in emerging technologies including AI solutions security auditing and Blockchain 
                smart contract auditing. Specialized in cases related to Espionage, VoIP Call, Identity Theft, 
                Cyber Pornography, Credit/Debit Card Fraud, and cryptocurrency-related crimes.
              </p>
              <p>
                Proficient in auditing and implementing ISMS frameworks adhering to GDPR/Privacy Shield, 
                PCI, SOX, ISO 27001 & HIPAA standards. Associate member of "National Cyber Safety and 
                Security Standard organization".
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass p-6 rounded-xl text-center group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-cyber-primary mx-auto mb-4 group-hover:text-cyber-accent transition-colors duration-300" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="text-cyber-primary">Core</span> Philosophy
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyber-primary to-cyber-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Prevention First</h4>
              <p className="text-gray-400 text-sm">
                Building robust defenses to prevent attacks before they happen, 
                rather than just responding to incidents.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyber-accent to-cyber-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Continuous Learning</h4>
              <p className="text-gray-400 text-sm">
                Staying ahead of emerging threats through constant research and 
                adaptation to new security challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyber-secondary to-cyber-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Human-Centric</h4>
              <p className="text-gray-400 text-sm">
                Understanding that security is as much about people as it is about 
                technology and processes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About