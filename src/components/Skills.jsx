import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'SQL', 'JavaScript', 'C', 'Python'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      skills: ['Spring Boot', 'REST APIs', 'JPA/Hibernate', 'Node.js', 'Express.js'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Frontend',
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'SQLite', 'MongoDB', 'H2 Database'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'Maven', 'Jenkins', 'Postman'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Concepts',
      skills: ['OOP', 'DSA', 'JDBC', 'Multithreading', 'Collections', 'DBMS'],
      color: 'from-rose-500 to-orange-500',
    },
  ]

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
    <section id="skills" className="min-h-screen py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-jetbrains text-sm font-semibold mb-2">02 — SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full bg-dark-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                {/* Category Title */}
                <div className={`inline-block mb-6 px-4 py-2 bg-gradient-to-r ${category.color} rounded-lg`}>
                  <h3 className="text-white font-poppins font-semibold">{category.title}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-inter border border-primary/30 group-hover:border-primary/60 transition-all duration-300"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 197, 94, 0.2)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-poppins font-bold text-primary mb-4">Proficiency Level</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-text-gray mb-2 font-inter">
                <span className="text-primary">Expert:</span> Java, Spring Boot, REST APIs, MySQL
              </p>
              <p className="text-text-gray mb-2 font-inter">
                <span className="text-primary">Intermediate:</span> React, JavaScript, Docker, Node.js
              </p>
              <p className="text-text-gray font-inter">
                <span className="text-primary">Familiar:</span> Python, TensorFlow, CI/CD, Kubernetes
              </p>
            </div>
            <div>
              <p className="text-text-gray mb-2 font-inter">
                <span className="text-primary">Problem Solving:</span> DSA, System Design, Architecture
              </p>
              <p className="text-text-gray mb-2 font-inter">
                <span className="text-primary">Soft Skills:</span> Communication, Teamwork, Adaptability
              </p>
              <p className="text-text-gray font-inter">
                <span className="text-primary">Learning:</span> Cloud Technologies, Advanced Backend Patterns
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
