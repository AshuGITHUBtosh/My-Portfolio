import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stage } from '@react-three/drei'

const Rover = (props) => {
  // Load the model from public folder
  // ⚠️ If your file is named differently, change '/rover.glb' below
  const { scene } = useGLTF('/rover.glb') 
  const ref = useRef()

  // Optional: Auto-rotate the model slowly
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.002 // Slow spin
    }
  })

  return <primitive object={scene} ref={ref} {...props} />
}

const RoverScene = () => {
  return (
    <>
      {/* Controls allow the user to Rotate (Left Click) and Zoom (Scroll) */}
      <OrbitControls 
        enableZoom={true} 
        autoRotate={false} 
        enablePan={false}
        minPolarAngle={Math.PI / 4} // Limit vertical rotation
        maxPolarAngle={Math.PI / 2}
      />
      
      {/* Stage sets up a professional lighting environment automatically */}
      <Stage environment="city" intensity={0.6}>
        <Rover scale={0.5} /> 
      </Stage>
    </>
  )
}

export default RoverScene