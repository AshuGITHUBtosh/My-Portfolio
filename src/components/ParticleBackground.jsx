import React from 'react'
import styles from './ParticleBackground.module.css'

const ParticleBackground = () => {
  return (
    <div className={styles.wrapper}>
      {/* Deep Space Gradient Base */}
      <div className={styles.mainBackground}></div>
      
      {/* 3 Layers of Stars for Parallax Effect */}
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      
      {/* Dark overlay to ensure text is always readable */}
      <div className={styles.overlay}></div>
    </div>
  )
}

export default ParticleBackground