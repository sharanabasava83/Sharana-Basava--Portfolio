import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGraduationCap, FiCalendar, FiMapPin } from 'react-icons/fi'

const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Computer Science Engineering',
      institution: 'Government Engineering College, Huvina Hadagali',
      duration: '2022 - May 2026',
      cgpa: '9.02 / 10.0',
      details: [
        'Consistent academic performance with strong fundamentals in CS',
        'Specialization in Software Engineering and Backend Development',
        'Participated in technical competitions and coding contests',
      ],
    },
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="education" className="min-h-screen py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-jetbrains text-sm font-semibold mb-2">05 — EDUCATION</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Academic <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Background</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Education Cards */}
        <motion.div
          className="space-y-8"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-card border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden group"
            >
              {/* Gradient Background */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6 flex-col md:flex-row gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiGraduationCap className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-poppins font-bold text-primary mb-1">{edu.degree}</h3>
                      <p className="text-text-gray font-inter">{edu.field}</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-poppins font-bold text-lg">
                    {edu.cgpa}
                  </div>
                </div>

                {/* Institution and Duration */}
                <div className="mb-6 space-y-2">
                  <p className="text-text-gray flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {edu.institution}
                  </p>
                  <p className="text-text-gray flex items-center gap-2">
                    <FiCalendar size={16} />
                    {edu.duration}
                  </p>
                </div>

                {/* Details */}
                <ul className="space-y-2">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="text-text-gray flex gap-3">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="p-6 bg-dark-card border border-primary/20 rounded-lg text-center hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl font-poppins font-bold text-primary mb-2">9.02</div>
            <p className="text-text-gray text-sm">Cumulative CGPA</p>
          </div>
          <div className="p-6 bg-dark-card border border-primary/20 rounded-lg text-center hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl font-poppins font-bold text-primary mb-2">4</div>
            <p className="text-text-gray text-sm">Years of Study</p>
          </div>
          <div className="p-6 bg-dark-card border border-primary/20 rounded-lg text-center hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl font-poppins font-bold text-primary mb-2">30+</div>
            <p className="text-text-gray text-sm">Technologies Learned</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
