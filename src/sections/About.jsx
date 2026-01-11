import React, { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { resumeData } from '../data/resumeData'
import styles from './About.module.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className={styles.aboutContent}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className={styles.aboutText} variants={itemVariants}>
            <p className={styles.intro}>
              I am a B.Tech final year student at Vellore Institute of Technology, currently pursuing Computer Science & Engineering with Data Science and also  passionate about <span className={styles.highlight}>AI & Robotics Engineer</span>.
            </p>
            <p>
              With a strong foundation in <span className={styles.highlight}>autonomous navigation</span>, <span className={styles.highlight}>computer vision</span>, and <span className={styles.highlight}>data analysis</span>, I specialize in building intelligent systems that bridge the gap between AI research and real-world applications.
            </p>
            <p>
              As a Senior Autonomous Member at Team Vyadh, I've engineered autonomous navigation systems using ROS and SLAM, achieving significant improvements in path efficiency and collision avoidance. My experience extends to developing CNN pipelines for document processing, achieving 92% accuracy in field extraction, and building NLP systems for sentiment analysis across global news.
            </p>
            <p>
              I'm driven by the challenge of solving complex problems at the intersection of <span className={styles.highlight}>robotics</span>, <span className={styles.highlight}>computer vision</span>, and <span className={styles.highlight}>data science</span>, and I'm always eager to take on new challenges that push the boundaries of what's possible.
            </p>
          </motion.div>



          <motion.div className={styles.educationCard} variants={itemVariants}>
            <h3 className={styles.educationTitle}>Education</h3>
            <div className={styles.educationInfo}>
              <h4 className={styles.institution}>{resumeData.education.institution}</h4>
              <p className={styles.degree}>{resumeData.education.degree}</p>
              <div className={styles.educationDetails}>
                <span className={styles.graduationDate}>{resumeData.education.graduationDate}</span>
                <span className={styles.cgpa}>CGPA: {resumeData.education.cgpa}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

