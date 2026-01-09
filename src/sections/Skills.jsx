import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { resumeData } from '../data/resumeData'
import styles from './Skills.module.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    { title: 'Programming Languages', skills: resumeData.skills.programming, icon: '💻' },
    { title: 'AI & Data Science', skills: resumeData.skills.aiDataScience, icon: '🤖' },
    { title: 'Data Tools', skills: resumeData.skills.dataTools, icon: '📊' },
    { title: 'Robotics & Systems', skills: resumeData.skills.robotics, icon: '🔧' },
    { title: 'Tools & Technologies', skills: resumeData.skills.tools, icon: '⚙️' }
  ]

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
    hidden: { opacity: 0, y: 30 },
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
    <section id="skills" className={styles.skills} ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className={styles.skillCategory}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className={styles.skillItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercentage}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <motion.div
                        className={styles.progressFill}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, duration: 1, ease: 'easeOut' }}
                        style={{
                          background: `linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))`
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

