import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { resumeData } from '../data/resumeData'
import styles from './Projects.module.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = resumeData.projects

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className={styles.projectsContainer}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Carousel View */}
          <div className={styles.carouselContainer}>
            <motion.button
              className={styles.carouselButton}
              onClick={prevProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous project"
            >
              <FiChevronLeft />
            </motion.button>

            <motion.div
              className={styles.carousel}
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <div>
                    <span className={styles.projectCategory}>
                      {projects[currentIndex].category}
                    </span>
                    <h3 className={styles.projectTitle}>{projects[currentIndex].title}</h3>
                  </div>
                </div>
                <p className={styles.projectDescription}>
                  {projects[currentIndex].description}
                </p>
                <div className={styles.techStack}>
                  {projects[currentIndex].techStack.map((tech, index) => (
                    <span key={index} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  {projects[currentIndex].github && (
                    <motion.a
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub />
                      View Code
                    </motion.a>
                  )}
                  {projects[currentIndex].demo && (
                    <motion.a
                      href={projects[currentIndex].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.button
              className={styles.carouselButton}
              onClick={nextProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next project"
            >
              <FiChevronRight />
            </motion.button>
          </div>

          {/* Carousel Indicators */}
          <div className={styles.carouselIndicators}>
            {projects.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Grid View (Alternative) */}
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={styles.projectCardGrid}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className={styles.projectCardHeader}>
                  <span className={styles.projectCategory}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
                <p className={styles.projectDescription}>
                  {project.description.length > 150
                    ? `${project.description.substring(0, 150)}...`
                    : project.description}
                </p>
                <div className={styles.techStack}>
                  {project.techStack.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.modalClose}
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
              <p className={styles.modalDescription}>{selectedProject.description}</p>
              <div className={styles.modalTechStack}>
                {selectedProject.techStack.map((tech, index) => (
                  <span key={index} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.modalLinks}>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <FiGithub />
                    View Code
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects

