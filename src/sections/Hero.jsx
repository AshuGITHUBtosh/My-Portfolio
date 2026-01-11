import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowDown } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { resumeData } from '../data/resumeData'
import styles from './Hero.module.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContainer}>
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.greeting} variants={itemVariants}>
            <span className={styles.greetingText}>Hello, I'm</span>
          </motion.div>

          <motion.h1 className={styles.name} variants={itemVariants}>
            {resumeData.personal.name.split(' ').map((word, index) => (
              <span key={index} className={styles.nameWord}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          <motion.h2 className={styles.title} variants={itemVariants}>
            {resumeData.personal.title}
          </motion.h2>

          <motion.p className={styles.tagline} variants={itemVariants}>
            {resumeData.personal.tagline}
          </motion.p>

          <motion.div className={styles.ctaButtons} variants={itemVariants}>
            <motion.button
              className={styles.primaryButton}
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <FiArrowDown className={styles.buttonIcon} />
            </motion.button>

            {/* --- UPDATED DOWNLOAD BUTTON --- */}
            {/* We use motion.a instead of motion.button to support the 'download' attribute */}
            <motion.a
              className={styles.secondaryButton}
              href={resumeData.personal.resumeUrl} // Points to /resume.pdf
              download="Ashutosh_Bhardwaj_Resume.pdf" // Forces the file to download
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className={styles.buttonIcon} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div className={styles.socialLinks} variants={itemVariants}>
            <motion.a
              href={`https://github.com/${resumeData.personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={`https://linkedin.com/in/${resumeData.personal.linkedin.toLowerCase().replace(/\s+/g, '-')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href={`mailto:${resumeData.personal.email}`}
              className={styles.socialLink}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <FiArrowDown />
        </motion.div>
      </div>

      <div className={styles.gradientOrb1}></div>
      <div className={styles.gradientOrb2}></div>
    </section>
  )
}

export default Hero