import { motion } from 'framer-motion'
import { CountUp } from 'react-countup'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const stats = [
    { label: 'Projects Completed', value: 4, suffix: '+' },
    { label: 'Internships', value: 2, suffix: '+' },
    { label: 'Technologies', value: 20, suffix: '+' },
    { label: 'CGPA', value: 9.02, decimals: 2, suffix: '' },
  ]

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-jetbrains text-sm font-semibold mb-2">01 — ABOUT</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Introduction */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-text-gray text-lg leading-relaxed">
              I'm a <span className="text-primary font-semibold">Computer Science Engineering graduate</span> with a strong 
              academic background (CGPA: 9.02/10) and hands-on software development experience.
            </p>

            <p className="text-text-gray text-lg leading-relaxed">
              Specialized in <span className="text-primary font-semibold">Java Full Stack Development</span>, I have experience 
              building scalable backend systems with Spring Boot, RESTful APIs, and modern frontend applications with React.
            </p>

            <p className="text-text-gray text-lg leading-relaxed">
              I am passionate about writing clean, maintainable code and solving complex problems through innovative solutions. 
              Currently seeking Software Engineer or Java Full Stack Developer roles.
            </p>

            <div className="pt-4">
              <p className="text-text-gray text-sm mb-4 font-jetbrains">Quick Facts:</p>
              <ul className="space-y-2 text-text-gray">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Graduated: May 2026
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Location: Bengaluru, India
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Open to Work: Yes ✓
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-dark-card border border-primary/20 rounded-lg hover:border-primary/50 transition-colors duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05, borderColor: 'rgb(34, 197, 94)' }}
              >
                <div className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-2">
                  {inView ? (
                    <>
                      <CountUp end={stat.value} decimals={stat.decimals || 0} duration={2.5} />
                      {stat.suffix}
                    </>
                  ) : (
                    '0'
                  )}
                </div>
                <p className="text-text-gray text-sm font-inter">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Career Objective */}
        <motion.div
          className="bg-dark-card border border-primary/20 rounded-lg p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ borderColor: 'rgb(34, 197, 94)' }}
        >
          <h3 className="text-xl font-poppins font-bold mb-4 text-primary">Career Objective</h3>
          <p className="text-text-gray leading-relaxed">
            Seeking an entry-level <span className="text-primary font-semibold">Software Engineer</span> or 
            <span className="text-primary font-semibold"> Java Full Stack Developer</span> role where I can leverage my strong 
            programming foundation, internship experience, and passion for building scalable systems. Committed to continuous 
            learning and contributing meaningful solutions to organizational goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
