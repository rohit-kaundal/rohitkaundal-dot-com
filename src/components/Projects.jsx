import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  ExternalLink, 
  Shield, 
  Terminal, 
  Network, 
  Eye,
  Filter,
  Star,
  Search,
  AlertTriangle,
  Users,
  FileCheck,
  Cpu
} from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'Vassago Consultancy',
      description: 'Founded cyber security and digital forensics services company providing expert consultation for cybercrime investigation.',
      category: 'consultancy',
      technologies: ['Digital Forensics', 'Cybercrime Investigation', 'ISMS', 'Compliance'],
      features: [
        'Espionage Investigation',
        'Identity Theft Cases',
        'Credit/Debit Card Fraud',
        'Cyber Pornography Cases'
      ],
      github: null,
      demo: 'https://vassagoconsultancy.com',
      status: 'production',
      icon: Shield,
      gradient: 'from-cyber-primary to-cyan-500'
    },
    {
      title: 'QualSights DevSecOps Implementation',
      description: 'Leading cyber security and DevSecOps initiatives, conducting vulnerability assessments and penetration testing.',
      category: 'devsecops',
      technologies: ['DevSecOps', 'Vulnerability Assessment', 'Penetration Testing', 'Security Automation'],
      features: [
        'Automated security scanning',
        'CI/CD pipeline security',
        'Threat modeling',
        'Security policy implementation'
      ],
      github: null,
      demo: null,
      status: 'production',
      icon: Eye,
      gradient: 'from-cyber-accent to-purple-500'
    },
    {
      title: 'Chandigarh Police Cyber Forensic Lab',
      description: 'Set up and managed cyber forensic training lab for law enforcement, implementing CCPWC scheme.',
      category: 'training',
      technologies: ['Digital Forensics', 'Training', 'Law Enforcement', 'Cyber Crime'],
      features: [
        'Forensic lab setup',
        'Training program development',
        'Equipment procurement',
        'Personnel training'
      ],
      github: null,
      demo: null,
      status: 'completed',
      icon: Terminal,
      gradient: 'from-cyber-secondary to-pink-500'
    },
    {
      title: 'ISMS Implementation Projects',
      description: 'Multiple Information Security Management System implementations adhering to international standards.',
      category: 'compliance',
      technologies: ['ISO 27001', 'GDPR', 'PCI DSS', 'HIPAA'],
      features: [
        'Gap analysis and assessment',
        'Policy documentation',
        'Risk assessment',
        'Compliance auditing'
      ],
      github: null,
      demo: null,
      status: 'production',
      icon: Search,
      gradient: 'from-cyber-green to-emerald-500'
    },
    {
      title: 'Web Application Security Assessments',
      description: 'Comprehensive security testing of web applications focusing on OWASP Top 10 vulnerabilities.',
      category: 'security-testing',
      technologies: ['OWASP', 'Burp Suite', 'Web Security', 'Penetration Testing'],
      features: [
        'OWASP Top 10 testing',
        'Manual security testing',
        'Automated scanning',
        'Detailed reporting'
      ],
      github: null,
      demo: null,
      status: 'production',
      icon: Shield,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Mobile Forensics Investigation',
      description: 'Advanced mobile device forensics for cybercrime investigation and digital evidence recovery.',
      category: 'forensics',
      technologies: ['Cellebrite', 'Oxygen Suite', 'Mobile Forensics', 'Evidence Recovery'],
      features: [
        'iOS/Android extraction',
        'Deleted data recovery',
        'Communication analysis',
        'Timeline reconstruction'
      ],
      github: null,
      demo: null,
      status: 'production',
      icon: AlertTriangle,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Smart Contract Security Auditor',
      description: 'Automated smart contract security auditing tool for identifying vulnerabilities in Solidity code.',
      category: 'blockchain',
      technologies: ['Solidity', 'Python', 'Mythril', 'Slither'],
      features: [
        'Automated vulnerability detection',
        'Gas optimization analysis',
        'Reentrancy attack detection',
        'Comprehensive audit reports'
      ],
      github: 'https://github.com/rohit-kaundal/smart-contract-auditor',
      demo: null,
      status: 'production',
      icon: Shield,
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      title: 'AI Model Security Scanner',
      description: 'Security assessment tool for machine learning models to detect adversarial vulnerabilities.',
      category: 'ai-security',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Adversarial ML'],
      features: [
        'Adversarial attack simulation',
        'Model robustness testing',
        'Data poisoning detection',
        'Privacy leakage assessment'
      ],
      github: 'https://github.com/rohit-kaundal/ai-security-scanner',
      demo: null,
      status: 'development',
      icon: Cpu,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'K8s-Scanner',
      description: 'Open-source security tool for scanning Kubernetes clusters to detect misconfigurations and security vulnerabilities.',
      category: 'security-testing',
      technologies: ['Kubernetes', 'Security Scanning', 'Go', 'YAML'],
      features: [
        'Kubernetes misconfiguration detection',
        'Security vulnerability scanning',
        'Comprehensive reporting',
        'Easy integration with CI/CD'
      ],
      github: 'https://github.com/rohit-kaundal/k8s-scanner',
      demo: 'https://rohit-kaundal.github.io/k8s-scanner/',
      status: 'production',
      icon: Shield,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cryptocurrency Investigation Toolkit',
      description: 'Advanced toolkit for investigating cryptocurrency transactions and blockchain-based crimes.',
      category: 'blockchain',
      technologies: ['Python', 'Blockchain Analysis', 'Graph Theory', 'Machine Learning'],
      features: [
        'Transaction flow analysis',
        'Address clustering',
        'Mixing service detection',
        'Risk scoring algorithms'
      ],
      github: 'https://github.com/rohit-kaundal/crypto-investigation-toolkit',
      demo: null,
      status: 'production',
      icon: Search,
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'consultancy', name: 'Consultancy', count: projects.filter(p => p.category === 'consultancy').length },
    { id: 'forensics', name: 'Digital Forensics', count: projects.filter(p => p.category === 'forensics').length },
    { id: 'blockchain', name: 'Blockchain Security', count: projects.filter(p => p.category === 'blockchain').length },
    { id: 'ai-security', name: 'AI Security', count: projects.filter(p => p.category === 'ai-security').length },
    { id: 'compliance', name: 'Compliance', count: projects.filter(p => p.category === 'compliance').length },
    { id: 'security-testing', name: 'Security Testing', count: projects.filter(p => p.category === 'security-testing').length },
    { id: 'training', name: 'Training', count: projects.filter(p => p.category === 'training').length }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-cyber-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Open-source security tools and frameworks developed to advance cybersecurity practices
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-cyber-primary to-cyber-accent text-white shadow-neon'
                  : 'glass text-gray-300 hover:text-cyber-primary'
              }`}
            >
              <Filter className="w-4 h-4 inline-block mr-2" />
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              layout
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass p-6 rounded-xl group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <div className={`w-full h-full bg-gradient-to-br ${project.gradient} rounded-bl-full`} />
              </div>

              <div className="relative z-10">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'production' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-cyber-dark/50 text-cyber-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyber-primary mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center">
                        <div className="w-1 h-1 bg-cyber-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-cyber-primary/20 hover:bg-cyber-primary/30 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 text-cyber-primary" />
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-cyber-accent/20 hover:bg-cyber-accent/30 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 text-cyber-accent" />
                      </motion.a>
                    )}
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <Star className="w-3 h-3 mr-1 text-yellow-400" />
                    {Math.floor(Math.random() * 50) + 10}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Explore More on <span className="text-cyber-primary">GitHub</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Discover additional projects, contribute to open-source security tools, 
              and collaborate on innovative cybersecurity solutions.
            </p>
            <motion.a
              href="https://github.com/rohit-kaundal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyber-primary to-cyber-accent text-white font-semibold rounded-lg shadow-neon hover:shadow-neon-pink transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects