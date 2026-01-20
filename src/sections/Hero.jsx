import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import RoverScene from '../components/RoverModel' // Ensure this path is correct based on your folder structure
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className={styles.content}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.greeting}
          >
            HELLO, I'M
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className={styles.name}
          >
            Ashutosh <br /> Bhardwaj
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={styles.title}
          >
            AI & Robotics Engineer
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={styles.description}
          >
            Building autonomous systems and intelligent solutions at the intersection of AI, Computer Vision, and Robotics.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={styles.buttons}
          >
            <a href="#projects" className={styles.primaryBtn}>View Projects</a>
            {/* Make sure resume.pdf is in your public folder */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>Download Resume</a>
          </motion.div>
        </div>

        {/* --- RIGHT SIDE: 3D MODEL --- */}
        <div className={styles.modelContainer}>
          {/* Canvas is the window into the 3D world */}
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <RoverScene />
            </Suspense>
          </Canvas>
          
          {/* User Hint */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className={styles.interactionHint}
          >
            <span>🖱️ Drag to Rotate | 📜 Scroll to Zoom</span>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero