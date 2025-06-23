import React from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Shield
} from 'lucide-react'

const Contact = () => {

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

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-12 text-white">
              Let's Start a <span className="text-cyber-primary">Conversation</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass p-6 rounded-xl group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyber-primary to-cyber-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">{info.label}</h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-400 hover:text-cyber-primary transition-colors duration-200 break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-gray-400">{info.value}</span>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass p-8 rounded-2xl mb-12"
            >
              <h4 className="text-2xl font-semibold mb-6 text-white flex items-center justify-center">
                <Shield className="w-6 h-6 mr-3 text-cyber-primary" />
                Why Choose Me?
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  '12+ years of cybersecurity expertise',
                  'Founder of Vassago Consultancy',
                  'Expert in digital forensics investigation',
                  'ISMS compliance specialist',
                  'AI & Blockchain security auditing',
                  'Proven track record with law enforcement'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-left"
                  >
                    <div className="w-3 h-3 bg-cyber-primary rounded-full mr-4 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-2xl font-semibold mb-8 text-white">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-16 h-16 bg-gradient-to-br from-cyber-primary to-cyber-accent rounded-xl flex items-center justify-center hover:shadow-neon transition-all duration-300"
                  >
                    <social.icon className="w-8 h-8 text-white" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-400 mt-6">
                Feel free to reach out through any of these channels for cybersecurity consultation and services.
              </p>
            </motion.div>
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