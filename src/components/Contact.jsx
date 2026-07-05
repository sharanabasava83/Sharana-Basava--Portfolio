import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'sharanurs05@gmail.com',
      link: 'mailto:sharanurs05@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 8310523509',
      link: 'tel:+918310523509',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Bengaluru, India',
      link: '#',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'sharanabasava',
      link: 'https://www.linkedin.com/in/sharanabasava-797746280',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'sharanabasava83',
      link: 'https://github.com/sharanabasava83',
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the form data to a backend
      // For now, we'll just simulate the submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-jetbrains text-sm font-semibold mb-2">08 — GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 bg-dark-card border border-primary/20 rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Icon className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-text-gray font-inter mb-1">{info.label}</p>
                    <p className="text-text-primary font-poppins font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="lg:col-span-2 bg-dark-card border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-poppins font-semibold text-text-primary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-primary/20 rounded-lg text-text-primary placeholder-text-gray focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-poppins font-semibold text-text-primary mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-primary/20 rounded-lg text-text-primary placeholder-text-gray focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-sm font-poppins font-semibold text-text-primary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Let's talk about..."
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-primary/20 rounded-lg text-text-primary placeholder-text-gray focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-poppins font-semibold text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message here..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-primary/20 rounded-lg text-text-primary placeholder-text-gray focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-dark-bg font-poppins font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-primary/20 border border-primary text-primary rounded-lg text-center font-inter"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-text-gray mb-4">Want to work together? Let's make something amazing!</p>
          <motion.a
            href="mailto:sharanurs05@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-dark-bg font-poppins font-semibold rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail size={20} />
            Send me an Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
