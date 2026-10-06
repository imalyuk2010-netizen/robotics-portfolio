import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Small rover that drives circles around the floor.
export default function Rover() {
  const g = useRef()
  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 0.45
    const r = 1.5
    g.current.position.set(Math.cos(t) * r * 1.4, 0.09, Math.sin(t) * r * 0.55 + 0.6)
    g.current.rotation.y = -t + Math.PI
  })
  const wheels = [[-0.14, -0.13], [0.14, -0.13], [-0.14, 0.13], [0.14, 0.13]]
  return (
    <group ref={g}>
      <mesh castShadow><boxGeometry args={[0.36, 0.08, 0.2]} /><meshStandardMaterial color="#0f6b46" roughness={0.5} /></mesh>
      <mesh castShadow position={[0, 0.08, 0]}><cylinderGeometry args={[0.04, 0.04, 0.05, 16]} /><meshStandardMaterial color="#d4ad55" /></mesh>
      {wheels.map(([x, z], i) => (
        <mesh key={i} castShadow position={[x, -0.02, z * 1.35]} rotation-x={Math.PI / 2}>
          <cylinderGeometry args={[0.065, 0.065, 0.05, 20]} /><meshStandardMaterial color="#111" roughness={0.9} />
        </mesh>
      ))}
    </group>
  )
}
