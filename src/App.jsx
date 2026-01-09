import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Navigation from './components/Navigation'
import ParticleBackground from './components/ParticleBackground'
import styles from './App.module.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : styles.light}`}>
      <ParticleBackground />
      <Navigation activeSection={activeSection} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default App

