import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiCheckCircle } from 'react-icons/fi'

const Certifications = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const certifications = [
    {
      title: 'Pentagon Space Pvt. Ltd. - Internship Certificate',
      issuer: 'Pentagon Space Pvt Ltd',
      date: 'Jun 2026',
      description: 'Completion of 6-month internship as Java Full Stack Developer',
      icon: '🏆',
    },
    {
      title: 'OWL AI - Java Developer Internship Certificate',
      issuer: 'Overload Ware Labs AI',
      date: 'Mar 2026',
      description: 'Completion of 1-month remote internship as Java Developer',
      icon: '🎓',
    },
    {
      title: 'Advanced Java Concepts - Online Course',
      issuer: 'Self-Paced Learning',
      date: '2025',
      description: 'Multithreading, Collections, Exception Handling, JDBC',
      icon: '☕',
    },
    {
      title: 'HackerRank - Problem Solving Certificates',
      issuer: 'HackerRank',
      date: '2024 - 2026',
      description: 'Multiple certificates in Java and Data Structures',
      icon: '💻',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="certifications" className="min-h-screen py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-jetbrains text-sm font-semibold mb-2">06 — CERTIFICATIONS</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Achievements & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full bg-dark-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex items-start gap-4 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="text-4xl flex-shrink-0">{cert.icon}</div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-poppins font-bold text-primary pr-2">{cert.title}</h3>
                    <FiCheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  </div>
                  <p className="text-text-gray text-sm mb-1">{cert.issuer}</p>
                  <p className="text-text-gray/70 text-xs mb-3 font-jetbrains">{cert.date}</p>
                  <p className="text-text-gray text-sm">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
