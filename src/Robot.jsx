import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const metal = { color: '#e9e2cf', metalness: 0.8, roughness: 0.3 }
const orange = { color: '#0f6b46', metalness: 0.3, roughness: 0.5 }

// Procedural 4-axis arm that idles on the workbench.
export default function Robot(props) {
  const base = useRef(), shoulder = useRef(), elbow = useRef(), wrist = useRef(), claw = useRef()
  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    base.current.rotation.y = Math.sin(t * 0.5) * 1.0
    shoulder.current.rotation.z = -0.5 + Math.sin(t * 0.8) * 0.35
    elbow.current.rotation.z = 1.1 + Math.sin(t * 1.1 + 1) * 0.4
    wrist.current.rotation.z = Math.sin(t * 1.6) * 0.4
    claw.current.position.x = 0.03 + (Math.sin(t * 2.4) * 0.5 + 0.5) * 0.03
  })
  return (
    <group {...props}>
      <mesh castShadow position={[0, 0.03, 0]}><cylinderGeometry args={[0.16, 0.18, 0.06, 32]} /><meshStandardMaterial {...metal} /></mesh>
      <group ref={base} position={[0, 0.06, 0]}>
        <mesh castShadow position={[0, 0.06, 0]}><cylinderGeometry args={[0.1, 0.12, 0.12, 32]} /><meshStandardMaterial {...orange} /></mesh>
        <group ref={shoulder} position={[0, 0.14, 0]}>
          <mesh castShadow position={[0, 0.2, 0]}><boxGeometry args={[0.07, 0.4, 0.1]} /><meshStandardMaterial {...metal} /></mesh>
          <mesh rotation-x={Math.PI / 2}><cylinderGeometry args={[0.055, 0.055, 0.14, 24]} /><meshStandardMaterial {...orange} /></mesh>
          <group ref={elbow} position={[0, 0.4, 0]}>
            <mesh rotation-x={Math.PI / 2}><cylinderGeometry args={[0.05, 0.05, 0.13, 24]} /><meshStandardMaterial {...orange} /></mesh>
            <mesh castShadow position={[0, 0.17, 0]}><boxGeometry args={[0.06, 0.34, 0.08]} /><meshStandardMaterial {...metal} /></mesh>
            <group ref={wrist} position={[0, 0.34, 0]}>
              <mesh castShadow><sphereGeometry args={[0.045, 16, 16]} /><meshStandardMaterial {...orange} /></mesh>
              <mesh position={[0, 0.06, 0]}><boxGeometry args={[0.1, 0.03, 0.06]} /><meshStandardMaterial {...metal} /></mesh>
              <group ref={claw} position={[0, 0.11, 0]}>
                <mesh position={[0.0, 0, 0]}><boxGeometry args={[0.015, 0.08, 0.04]} /><meshStandardMaterial {...metal} /></mesh>
              </group>
              <mesh position={[-0.04, 0.11, 0]}><boxGeometry args={[0.015, 0.08, 0.04]} /><meshStandardMaterial {...metal} /></mesh>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
