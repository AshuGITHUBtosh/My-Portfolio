import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
// IMPORT EMAILJS
import emailjs from '@emailjs/browser'
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { resumeData } from '../data/resumeData'
import styles from './Contact.module.css'

const Contact = () => {
  // Ref for the section animation
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  // Ref for the form (Required for EmailJS)
  const form = useRef()

  // Updated state keys to match EmailJS variable names
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // --- EMAILJS INTEGRATION ---
    emailjs
      .sendForm(
        'service_5d2408v',   // Paste your Service ID here
        'template_yw4g8km',  // Paste your Template ID here
        form.current,
        'qs3MSI-zukEZCgzRz'    // Paste your Public Key here
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text)
          alert('Message sent successfully!')
          // Clear the form
          setFormData({ user_name: '', user_email: '', message: '' })
          setIsSubmitting(false)
        },
        (error) => {
          console.log('FAILED...', error.text)
          alert('Failed to send message. Please try again.')
          setIsSubmitting(false)
        }
      )
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

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className={styles.contactContent}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left Side: Contact Info */}
          <motion.div className={styles.contactInfo} variants={itemVariants}>
            <h3 className={styles.contactInfoTitle}>Let's Connect</h3>
            <p className={styles.contactInfoText}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className={styles.contactDetails}>
              <motion.a
                href={`mailto:${resumeData.personal.email}`}
                className={styles.contactItem}
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className={styles.contactIcon}>
                  <FiMail />
                </div>
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>{resumeData.personal.email}</span>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${resumeData.personal.phone}`}
                className={styles.contactItem}
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className={styles.contactIcon}>
                  <FiPhone />
                </div>
                <div>
                  <span className={styles.contactLabel}>Phone</span>
                  <span className={styles.contactValue}>{resumeData.personal.phone}</span>
                </div>
              </motion.a>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FiMapPin />
                </div>
                <div>
                  <span className={styles.contactLabel}>Location</span>
                  <span className={styles.contactValue}>{resumeData.personal.location}</span>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <motion.a
                href={`https://github.com/${resumeData.personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href={`https://linkedin.com/in/${resumeData.personal.linkedin.toLowerCase().replace(/\s+/g, '-')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href={`mailto:${resumeData.personal.email}`}
                className={styles.socialLink}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.form
            className={styles.contactForm}
            ref={form} // Attach the form ref here
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className={styles.formGroup}>
              <label htmlFor="user_name" className={styles.formLabel}>Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name" // Updated to match EmailJS variable
                value={formData.user_name}
                onChange={handleChange}
                className={styles.formInput}
                required
                placeholder="Your Name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="user_email" className={styles.formLabel}>Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email" // Updated to match EmailJS variable
                value={formData.user_email}
                onChange={handleChange}
                className={styles.formInput}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextarea}
                required
                rows="6"
                placeholder="Your message here..."
              />
            </div>

            <motion.button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <FiSend className={styles.buttonIcon} />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact