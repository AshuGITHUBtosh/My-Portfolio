import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { resumeData } from '../data/resumeData'
import styles from './Achievements.module.css'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="achievements" className={styles.achievements} ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Awards
        </motion.h2>

        <motion.div
          className={styles.achievementsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {resumeData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={styles.achievementCard}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)'
              }}
              style={{ perspective: 1000 }}
            >
              <div className={styles.cardGlow}></div>

              <div className={styles.achievementIcon}>
                {achievement.icon}
              </div>

              <div className={styles.achievementContent}>
                <h3 className={styles.achievementTitle}>
                  {achievement.title}
                </h3>

                <p className={styles.achievementDescription}>
                  {achievement.description}
                </p>

                <span className={styles.achievementYear}>
                  {achievement.year}
                </span>

                {/* Certificate Button */}
                {achievement.certificate && (
                  <a
                    href={achievement.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certificateButton}
                  >
                    <span>View Certificate</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
