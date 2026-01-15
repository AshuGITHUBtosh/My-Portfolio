import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiAward, FiX } from 'react-icons/fi'
import { resumeData } from '../data/resumeData'
import styles from './Achievements.module.css'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // State to track which image is currently enlarged
  const [selectedImage, setSelectedImage] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  // Animation for the modal pop-up
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 25 } },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } }
  }

  return (
    <section id="achievements" className={styles.achievements} ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          Achievements
        </motion.h2>

        <motion.div 
          className={styles.achievementsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {resumeData.achievements.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.achievementCard}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className={styles.iconWrapper}>
                <FiAward />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              
              <div className={styles.cardFooter}>
                <span className={styles.yearBadge}>{item.year}</span>
                
                {/* THUMBNAIL: Only shows if 'certificate' exists in data */}
                {item.certificate && (
                  <motion.div 
                    className={styles.thumbnailContainer}
                    onClick={() => setSelectedImage(item.certificate)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Click to enlarge"
                  >
                    <img 
                      src={item.certificate} 
                      alt="Certificate Thumbnail" 
                      className={styles.thumbnailImage}
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- ENLARGED IMAGE MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Click outside to close
          >
            {/* Close Button */}
            <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>
              <FiX />
            </button>

            {/* The Enlarged Image */}
            <motion.div 
              className={styles.modalContent}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // Clicking image doesn't close it
            >
              <img 
                src={selectedImage} 
                alt="Certificate Enlarged" 
                className={styles.fullImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Achievements