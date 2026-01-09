import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import styles from './Navigation.module.css'

const Navigation = ({ activeSection, darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.navContainer}>
        <motion.div
          className={styles.logo}
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={styles.logoText}>AB</span>
        </motion.div>

        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <motion.button
            className={styles.themeToggle}
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>

          <motion.button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      <motion.div
        className={styles.mobileMenu}
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </motion.div>
    </motion.nav>
  )
}

export default Navigation

