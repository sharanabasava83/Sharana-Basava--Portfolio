import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useState } from 'react'

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'Global AI Surgical Copilot',
      description: 'AI-powered surgical assistance system with real-time monitoring and 3D visualization. Comprehensive backend with Spring Boot microservices.',
      tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker', 'WebSocket', 'AI/ML'],
      image: '🏥',
      github: 'https://github.com/sharanabasava83/Surgical-copilot-AI',
      live: 'https://surgical-copilot-frontend.onrender.com',
      featured: true,
      category: 'fullstack',
    },
    {
      title: 'Glass Co Website',
      description: 'Full-stack business website built from scratch with customer inquiry management system. No templates, pure custom development.',
      tech: ['Node.js', 'Express.js', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      image: '🏢',
      github: 'https://github.com/sharanabasava83/glassco-website',
      live: 'https://glassco-website.onrender.com',
      featured: true,
      category: 'fullstack',
    },
    {
      title: 'Orbital Traffic Dashboard',
      description: 'Space traffic tracking system using Keplerian orbital mechanics with live telemetry streaming via WebSocket. 3D visualization with Three.js.',
      tech: ['Java 17', 'Spring Boot 3', 'WebSocket', 'Three.js', 'Docker', 'Real-time APIs'],
      image: '🛰️',
      github: 'https://github.com/sharanabasava83/space-traffic',
      live: 'https://space-traffic-dashboard-java.onrender.com',
      featured: true,
      category: 'backend',
    },
    {
      title: 'AI Infant Brain Tumor Classifier',
      description: 'Deep learning model trained on MRI datasets for medical imaging classification. CNN with transfer learning, exposed as REST API.',
      tech: ['Python', 'TensorFlow', 'PyTorch', 'CNN', 'Flask', 'Docker', 'Transfer Learning'],
      image: '🧠',
      github: 'https://github.com/sharanabasava83/Infant-Brain-Tumor',
      live: '',
      featured: true,
      category: 'ml',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend' },
    { id: 'ml', label: 'Machine Learning' },
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)

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
    <section id="projects" className="min-h-screen py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-jetbrains text-sm font-semibold mb-2">04 — PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-lg font-inter font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-primary text-dark-bg'
                  : 'bg-dark-card text-text-gray hover:text-primary border border-primary/20 hover:border-primary/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group h-full"
            >
              <div className="h-full bg-dark-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col">
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-7xl opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {project.image}
                  </span>
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-primary text-dark-bg text-xs font-poppins font-bold rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-poppins font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="text-text-gray text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs font-jetbrains bg-primary/10 text-primary rounded border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="px-2 py-1 text-xs font-jetbrains text-text-gray">
                          +{project.tech.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 font-inter font-medium"
                        whileHover={{ x: 4 }}
                      >
                        <FiGithub size={18} />
                        GitHub
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 font-inter font-medium"
                        whileHover={{ x: 4 }}
                      >
                        <FiExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-text-gray mb-4">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/sharanabasava83"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-dark-bg font-poppins font-semibold rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={20} />
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
