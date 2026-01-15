import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiDatabase, FiCpu, FiTerminal, FiLayers } from 'react-icons/fi'
import { resumeData } from '../data/resumeData'
import styles from './Skills.module.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Define categories to match your data structure
  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <FiCode />,
      skills: resumeData.skills.programming
    },
    {
      id: 'aiDataScience',
      title: 'AI & Data Science',
      icon: <FiCpu />,
      skills: resumeData.skills.aiDataScience
    },
    {
      id: 'dataTools',
      title: 'Data Tools',
      icon: <FiDatabase />,
      skills: resumeData.skills.dataTools
    },
    {
      id: 'robotics',
      title: 'Robotics',
      icon: <FiLayers />,
      skills: resumeData.skills.robotics
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: <FiTerminal />,
      skills: resumeData.skills.tools
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div 
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category) => (
            // Only render category if it has data
            category.skills && category.skills.length > 0 && (
              <motion.div 
                key={category.id} 
                className={styles.skillCard}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    {category.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                </div>

                <div className={styles.skillTags}>
                  {category.skills.map((skill, index) => (
                    <motion.span 
                      key={index} 
                      className={styles.skillTag}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills