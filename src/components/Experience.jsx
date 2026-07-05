import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const experiences = [
    {
      company: 'Pentagon Space Pvt Ltd',
      position: 'Java Full Stack Developer Intern',
      duration: 'Jan 2026 – Jun 2026',
      location: 'Bengaluru, India',
      type: 'Internship',
      achievements: [
        'Developed RESTful APIs using Spring Boot for user authentication and product management',
        'Designed and optimized MySQL database schemas with query tuning',
        'Tested API endpoints using Postman, reducing defects by 20%',
        'Collaborated with senior developers on backend module development',
      ],
    },
    {
      company: 'Overload Ware Labs AI (OWL AI)',
      position: 'Java Developer Intern',
      duration: 'Feb 2026 – Mar 2026',
      location: 'Remote',
      type: 'Internship',
      achievements: [
        'Built application modules using Spring Boot and MySQL',
        'Applied OOP principles to resolve business logic issues',
        'Deployed modules to Render cloud platform',
        'Practiced structured debugging and code optimization',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-jetbrains text-sm font-semibold mb-2">03 — EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Work <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-4 top-6 w-4 h-4 bg-primary rounded-full border-4 border-dark-bg" />

              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-16 w-0.5 h-32 bg-gradient-to-b from-primary to-primary/20" />
              )}

              {/* Content Card */}
              <div className="ml-8 p-6 bg-dark-card border border-primary/20 rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-poppins font-bold text-primary mb-1">{exp.position}</h3>
                    <p className="text-text-gray font-inter">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-jetbrains border border-primary/30 whitespace-nowrap">
                    {exp.type}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 mb-6 text-text-gray text-sm">
                  <div className="flex items-center gap-2">
                    <FiCalendar size={16} />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin size={16} />
                    {exp.location}
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3 text-text-gray">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
