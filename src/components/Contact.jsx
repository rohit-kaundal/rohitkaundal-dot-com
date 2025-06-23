import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Shield,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Honeypot field for spam protection
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Honeypot check
    if (formData.honeypot) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rohit@vassagoconsultancy.com',
      href: 'mailto:rohit@vassagoconsultancy.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-981-648-3986',
      href: 'tel:+919816483986'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chandigarh | Shimla | Delhi, INDIA',
      href: null
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rohit-kaundal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rohitkaundal', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/rohitkaundal', label: 'Twitter' },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="text-cyber-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to secure your digital infrastructure? Let's discuss how I can help protect your organization.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">
              Let's Start a <span className="text-cyber-primary">Conversation</span>
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyber-primary to-cyber-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.label}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-400 hover:text-cyber-primary transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-400">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="glass p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-4 text-white flex items-center">
                <Shield className="w-5 h-5 mr-2 text-cyber-primary" />
                Why Choose Me?
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyber-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>12+ years of cybersecurity expertise</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyber-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Founder of Vassago Consultancy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyber-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Expert in digital forensics investigation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyber-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>ISMS compliance specialist</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-12 h-12 bg-gradient-to-br from-cyber-primary to-cyber-accent rounded-lg flex items-center justify-center hover:shadow-neon transition-all duration-300"
                  >
                    <social.icon className="w-6 h-6 text-white" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="absolute left-[-9999px]"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-dark/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary focus:outline-none transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-dark/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary focus:outline-none transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-dark/50 border border-gray-600 rounded-lg text-white focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary focus:outline-none transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="digital-forensics">Digital Forensics Investigation</option>
                  <option value="vulnerability-assessment">Vulnerability Assessment & Penetration Testing</option>
                  <option value="ai-security">AI Solutions Security Auditing</option>
                  <option value="blockchain-audit">Blockchain Smart Contract Auditing</option>
                  <option value="compliance">ISMS & Compliance Implementation</option>
                  <option value="cybercrime-investigation">Cybercrime Investigation</option>
                  <option value="consultation">Cybersecurity Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-cyber-dark/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your cybersecurity needs..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyber-primary to-cyber-accent hover:shadow-neon'
                } text-white`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
                >
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 mb-4">
            © 2024 Rohit Kaundal. Cybersecurity Professional.
          </p>
          <p className="text-sm text-gray-500 mb-2">
            PGP Key Fingerprint: 0BE2 9B1D 0BE2 E92B 94A4 457D 7930 6F4C 3DDE B1BD
          </p>
          <p className="text-sm text-gray-500">
            Built with React, Tailwind CSS, and Framer Motion. 
            Deployed with security best practices in mind.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact