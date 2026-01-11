import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { resumeData } from '../data/resumeData'
import styles from './Experience.module.css'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // ⭐ NEW STATE FOR MODAL IMAGE
  const [selectedImage, setSelectedImage] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <motion.div
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className={styles.timelineMarker}>
                <span className={styles.markerIcon}>{exp.icon}</span>
              </div>

              <div className={styles.timelineContent}>
                <div className={styles.experienceCard}>
                  {/* Header */}
                  <div className={styles.experienceHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>{exp.title}</h3>
                      <h4 className={styles.company}>{exp.company}</h4>
                    </div>
                    <div className={styles.experienceMeta}>
                      <span className={styles.period}>{exp.period}</span>
                      <span className={styles.location}>{exp.location}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className={styles.achievementsList}>
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        className={styles.achievement}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          delay: index * 0.2 + achIndex * 0.1 + 0.3
                        }}
                      >
                        <span className={styles.bullet}>▸</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>

                  {/* ⭐ IMAGE GALLERY */}
                  {exp.images && exp.images.length > 0 && (
                    <div className={styles.workGallery}>
                      {exp.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          onClick={() => setSelectedImage(img.src)} // ⭐ CLICK
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ⭐ FULLSCREEN IMAGE MODAL */}
      {selectedImage && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className={styles.modalImage}
            onClick={(e) => e.stopPropagation()} // prevent close on image click
          />
        </div>
      )}
    </section>
  )
}

export default Experience
