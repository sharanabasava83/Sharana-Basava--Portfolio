import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/sharanabasava83', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sharanabasava-797746280', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:sharanurs05@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-dark-card border-t border-primary/20 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-dark-bg font-poppins font-bold">SB</span>
              </div>
              <span className="text-lg font-poppins font-bold">Sharanabasava</span>
            </div>
            <p className="text-text-gray text-sm leading-relaxed max-w-xs">
              Java Full Stack Developer passionate about building scalable systems and innovative solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-poppins font-bold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-text-gray hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-poppins font-bold text-primary">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-dark-bg transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 mb-8" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-text-gray text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Sharanabasava. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Vite & Tailwind CSS
            <motion.span animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity }}>
              ⚡
            </motion.span>
          </p>
          <a
            href="https://github.com/sharanabasava83"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary hover:text-secondary transition-colors"
          >
            View Source <FiExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
