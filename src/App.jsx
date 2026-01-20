import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Section Imports
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'

// Component Imports
import Navigation from './components/Navigation'
import ParticleBackground from './components/ParticleBackground'

import styles from './App.module.css'

function App() {
  // 🧹 REMOVED: Dark mode state. The app is now permanently set to Space Mode.

  return (
    // Force the 'dark' class always
    <div className={`${styles.app} ${styles.dark}`}>
      <ParticleBackground />
      
      {/* Removed props passed to Navigation */}
      <Navigation />
      
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