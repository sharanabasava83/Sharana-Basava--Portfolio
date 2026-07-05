import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CountUp } from 'react-countup'

const Achievements = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const achievements = [
    {
      icon: '🏆',
      title: 'CGPA',
      value: 9.02,
      suffix: '/10',
      description: 'Consistent academic excellence',
    },
    {
      icon: '💼',
      title: 'Internships',
      value: 2,
      suffix: '+',
      description: 'Industry experience gained',
    },
    {
      icon: '🚀',
      title: 'Projects',
      value: 4,
      suffix: '+',
      description: 'Production-ready applications',
    },
    {
      icon: '⚙️',
      title: 'Technologies',
      value: 20,
      suffix: '+',
      description: 'Languages and frameworks mastered',
    },
    {
      icon: '📚',
      title: 'Courses',
      value: 15,
      suffix: '+',
      description: 'Online courses completed',
    },
    {
      icon: '🎯',
      title: 'GitHub Repos',
      value: 8,
      suffix: '+',
      description: 'Open source contributions',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="achievements" className="min-h-screen py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-jetbrains text-sm font-semibold mb-2">07 — ACHIEVEMENTS</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Key <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Highlights</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full bg-dark-card border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-tl from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="text-5xl mb-4 inline-block">{achievement.icon}</div>

                {/* Value */}
                <div className="text-4xl font-poppins font-bold text-primary mb-1">
                  {inView ? (
                    <>
                      <CountUp
                        end={achievement.value}
                        decimals={typeof achievement.value === 'number' && achievement.value % 1 !== 0 ? 2 : 0}
                        duration={2}
                      />
                      {achievement.suffix}
                    </>
                  ) : (
                    '0'
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-poppins font-bold text-text-primary mb-2 relative z-10">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-text-gray text-sm relative z-10">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Highlights */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-poppins font-bold text-primary mb-6">Key Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔥</span>
              <div>
                <p className="font-poppins font-bold text-text-primary">Strong Backend Skills</p>
                <p className="text-text-gray text-sm">Expert in Java, Spring Boot, and microservices</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-poppins font-bold text-text-primary">Problem Solving</p>
                <p className="text-text-gray text-sm">Strong DSA fundamentals and algorithm design</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📈</span>
              <div>
                <p className="font-poppins font-bold text-text-primary">Scalability Focus</p>
                <p className="text-text-gray text-sm">Design systems for performance and growth</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚀</span>
              <div>
                <p className="font-poppins font-bold text-text-primary">Quick Learner</p>
                <p className="text-text-gray text-sm">Rapidly adapt to new technologies</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <p className="font-poppins font-bold text-text-primary">Innovation</p>
                <p className="text-text-gray text-sm">Creative solutions to complex problems</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤝</span>
              <div>
                <p className="font-poppins font-bold text-text-primary">Team Player</p>
                <p className="text-text-gray text-sm">Excellent communication skills</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
