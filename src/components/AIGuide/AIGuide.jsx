import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMic, FiMicOff, FiCpu } from 'react-icons/fi'
import styles from './AIGuide.module.css'

// 🤖 The Script: What the robot says for each section
const sectionScripts = {
  hero: "Welcome. You are viewing the portfolio of Ashutosh Bhardwaj, an AI and Robotics Engineer.",
  about: "About Ashutosh. He is a passionate engineer building autonomous systems and intelligent solutions.",
  skills: "Technical capabilities. Ashutosh specializes in Python, ROS, Computer Vision, and Deep Learning.",
  experience: "Professional Experience. Featuring work with Team Vyadh on Mars Rovers and internships in Computer Vision.",
  projects: "Project Showcase. Here you can see autonomous navigation, data analysis, and AI assistant projects.",
  achievements: "Honors and Awards. International recognition in rover challenges and hackathons.",
  contact: "Communication Link. Ready to collaborate? Send a message directly through this secure channel."
}

const AIGuide = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const lastSpokenSection = useRef('')

  // 1. Toggle the AI
  const toggleAI = () => {
    if (isEnabled) {
      window.speechSynthesis.cancel()
      setIsEnabled(false)
      setIsSpeaking(false)
    } else {
      setIsEnabled(true)
      speak("AI Assistant Online. I will guide you through the sections.")
    }
  }

  // 2. Speak Function
  const speak = (text) => {
    if (!window.speechSynthesis) return

    // Stop any previous speech
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1.0
    utterance.pitch = 1.0
    utterance.volume = 0.8
    
    // Optional: Try to find a "Google US English" or similar voice
    const voices = window.speechSynthesis.getVoices()
    const preferredVoice = voices.find(voice => voice.name.includes('Google US English')) || voices[0]
    if (preferredVoice) utterance.voice = preferredVoice

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }

  // 3. Track Scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionScripts)
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If section is roughly in the middle of the screen
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            if (activeSection !== section) {
              setActiveSection(section)
            }
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  // 4. React to Section Change
  useEffect(() => {
    if (isEnabled && activeSection && activeSection !== lastSpokenSection.current) {
      speak(sectionScripts[activeSection])
      lastSpokenSection.current = activeSection
    }
  }, [activeSection, isEnabled])

  return (
    <div className={styles.wrapper}>
      <AnimatePresence>
        {isSpeaking && (
          <motion.div 
            className={styles.speechBubble}
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
          >
            <span className={styles.wave}></span>
            <span className={styles.wave}></span>
            <span className={styles.wave}></span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`${styles.aiButton} ${isEnabled ? styles.active : ''}`}
        onClick={toggleAI}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={isEnabled ? "Deactivate AI Guide" : "Activate AI Guide"}
      >
        <div className={styles.iconContainer}>
          {isEnabled ? <FiCpu className={styles.pulse} /> : <FiMicOff />}
        </div>
      </motion.button>
    </div>
  )
}

export default AIGuide