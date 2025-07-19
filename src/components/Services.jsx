import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Search, 
  AlertTriangle, 
  BookOpen, 
  Users, 
  FileCheck,
  Target,
  Zap
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cloud Security Posture Assessment',
      description: 'Comprehensive cloud infrastructure security assessment for SaaS startups using GenAI-powered analysis.',
      features: [
        'AWS/Azure/GCP Security Review',
        'Infrastructure as Code Auditing',
        'Kubernetes Security Scanning',
        'GenAI-Powered Vulnerability Detection'
      ],
      color: 'from-cyber-primary to-cyan-400'
    },
    {
      icon: FileCheck,
      title: 'SOC2 & ISO 27001 Readiness',
      description: 'Fast-track compliance preparation for startups preparing for investor scrutiny and enterprise sales.',
      features: [
        'Gap Analysis & Remediation',
        'Automated Policy Generation',
        'Audit Readiness Programs',
        'Compliance Automation Setup'
      ],
      color: 'from-cyber-accent to-purple-400'
    },
    {
      icon: Zap,
      title: 'AI & Smart Contract Security',
      description: 'Specialized security auditing for AI models and blockchain smart contracts.',
      features: [
        'AI Model Security Assessment',
        'Smart Contract Auditing',
        'Machine Learning Adversarial Testing',
        'Blockchain Security Analysis'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'DevSecOps Integration',
      description: 'Seamless security integration into CI/CD pipelines without slowing down development velocity.',
      features: [
        'Security-as-Code Implementation',
        'Automated Security Testing',
        'Container Security Scanning',
        'Infrastructure Security Monitoring'
      ],
      color: 'from-cyber-secondary to-pink-400'
    },
    {
      icon: Users,
      title: 'Startup Security Strategy',
      description: 'Strategic security guidance for CTOs and DevOps engineers at fast-growing SaaS companies.',
      features: [
        'Security Roadmap Development',
        'Team Training & Enablement',
        'Incident Response Planning',
        'Security Budget Optimization'
      ],
      color: 'from-cyber-green to-green-400'
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-cyber-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Security automation and compliance solutions designed specifically for SaaS startups and fast-growing teams
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" 
                   style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
              
              <div className="relative z-10">
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyber-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-cyber-primary font-semibold mb-3">Key Features:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-cyber-primary rounded-full mr-3 group-hover:bg-cyber-accent transition-colors duration-300" />
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-cyber-primary to-cyber-accent text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Secure Your <span className="text-cyber-primary">Digital Assets</span>?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help strengthen your cybersecurity posture and protect 
              your organization from evolving threats.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyber-primary to-cyber-accent text-white font-semibold rounded-lg shadow-neon hover:shadow-neon-pink transition-all duration-300"
            >
              <Target className="w-5 h-5 mr-2" />
              Get Started Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services