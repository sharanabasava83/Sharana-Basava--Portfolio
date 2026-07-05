import { motion } from 'framer-motion'
import { FiDownload, FiExternalLink } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const socialIcons = [
    { icon: FaGithub, href: 'https://github.com/sharanabasava83', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sharanabasava-797746280', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:sharanurs05@gmail.com', label: 'Email' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden px-4">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg to-dark-card opacity-50 pointer-events-none" />
      
      <motion.div
        className="relative z-10 max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <p className="text-primary text-lg font-poppins font-semibold mb-4">Hello 👋</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-4 leading-tight">
                I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sharanabasava</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-2xl md:text-3xl font-poppins font-semibold text-text-dim mb-2">
                Java Full Stack Developer
              </p>
              <p className="text-lg text-text-gray">
                Spring Boot • React • REST APIs • Scalable Systems
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-text-gray leading-relaxed">
              <p>
                Building scalable backend systems and modern web applications. Passionate about clean code, 
                software architecture, and creating solutions that make a difference.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-dark-bg font-poppins font-semibold rounded-lg flex items-center gap-2 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="group-hover:animate-bounce" />
                Download Resume
              </motion.a>

              <motion.a
                href="#projects"
                className="px-6 py-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-dark-bg font-poppins font-semibold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                className="px-6 py-3 border-2 border-text-gray text-text-gray hover:border-primary hover:text-primary font-poppins font-semibold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-6 pt-6">
              {socialIcons.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-gray hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={28} />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image / Card */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full min-h-96 rounded-xl overflow-hidden group"
            whileHover={{ y: -10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60" />
            
            {/* Placeholder for profile image */}
            <div className="w-full h-full bg-dark-card border-2 border-primary/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-text-gray font-jetbrains">Java Full Stack Developer</p>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-primary text-dark-bg px-6 py-3 rounded-full font-poppins font-bold text-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Open to Work
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-text-gray text-sm font-jetbrains">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-primary rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
