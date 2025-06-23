import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Search, 
  Bug, 
  Network, 
  Lock, 
  Eye, 
  Terminal, 
  Cloud,
  Database,
  Cpu,
  FileText,
  Settings
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web & Application Security',
      icon: Shield,
      skills: [
        { name: 'OWASP Top 10 Vulnerabilities', level: 98 },
        { name: 'Web Vulnerability Assessment', level: 96 },
        { name: 'Mobile Vulnerability Assessment', level: 94 },
        { name: 'Source Code Testing', level: 92 }
      ]
    },
    {
      title: 'Digital Forensics & Investigation',
      icon: Search,
      skills: [
        { name: 'Digital Forensics', level: 97 },
        { name: 'Cybercrime Investigation', level: 95 },
        { name: 'Cryptocurrency Investigation', level: 93 },
        { name: 'Malware Analysis', level: 91 }
      ]
    },
    {
      title: 'Emerging Technologies & Penetration Testing',
      icon: Cpu,
      skills: [
        { name: 'AI Solutions Security Auditing', level: 94 },
        { name: 'Blockchain Smart Contract Auditing', level: 92 },
        { name: 'Network Penetration Testing', level: 96 },
        { name: 'Writing Exploits', level: 89 }
      ]
    },
    {
      title: 'Compliance & Frameworks',
      icon: Settings,
      skills: [
        { name: 'ISO 27001 Implementation', level: 95 },
        { name: 'GDPR Compliance', level: 93 },
        { name: 'PCI DSS Standards', level: 91 },
        { name: 'HIPAA Compliance', level: 89 }
      ]
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
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="text-cyber-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Expertise across the cybersecurity spectrum, from threat detection to secure system architecture
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-8 rounded-2xl group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyber-primary to-cyber-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyber-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyber-primary to-cyber-accent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
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
          <h3 className="text-2xl font-bold mb-8 text-white">
            Tools & <span className="text-cyber-primary">Technologies</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Nmap', 'Wireshark', 'Metasploit', 'Burp Suite', 
              'OWASP ZAP', 'Nessus', 'Autopsy', 'Volatility',
              'FTK Imager', 'EnCase', 'Cellebrite', 'Oxygen Suite',
              'Solidity', 'Remix IDE', 'Mythril', 'Slither',
              'TensorFlow', 'PyTorch', 'Adversarial Robustness', 'Model Security',
              'Blockchain Analysis', 'Chainalysis', 'Elliptic', 'Crystal',
              'Kali Linux', 'ParrotOS', 'SIFT', 'SANS DFIR',
              'Python', 'PowerShell', 'Bash', 'SQL',
              'ISO 27001', 'GDPR', 'PCI DSS', 'HIPAA'
            ].map((tool, index) => (
              <motion.div
                key={tool}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass p-4 rounded-lg text-center cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <span className="text-gray-300 group-hover:text-cyber-primary transition-colors duration-200">
                  {tool}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills