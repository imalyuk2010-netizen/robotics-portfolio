import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Billboard, useCursor } from '@react-three/drei'
import { tools } from './config'

const M = { metal: { color: '#c9ccd1', metalness: 0.8, roughness: 0.35 }, dark: { color: '#15171b', roughness: 0.6, metalness: 0.3 }, orange: { color: '#ff5a1f', roughness: 0.5, metalness: 0.3 } }
const Mat = ({ k }) => <meshStandardMaterial {...M[k]} />

function Drill() {
  return (<group>
    <mesh castShadow position={[0, 0.015, 0]}><boxGeometry args={[0.3, 0.03, 0.22]} /><Mat k="dark" /></mesh>
    <mesh castShadow position={[0, 0.28, -0.07]}><cylinderGeometry args={[0.025, 0.025, 0.54, 16]} /><Mat k="metal" /></mesh>
    <mesh castShadow position={[0, 0.5, -0.02]}><boxGeometry args={[0.14, 0.12, 0.2]} /><Mat k="orange" /></mesh>
    <mesh castShadow position={[0, 0.34, 0.0]}><cylinderGeometry args={[0.012, 0.012, 0.16, 12]} /><Mat k="metal" /></mesh>
    <mesh position={[0, 0.25, 0]}><cylinderGeometry args={[0.02, 0.02, 0.04, 12]} /><Mat k="dark" /></mesh>
    <mesh position={[0.11, 0.46, -0.02]} rotation-z={Math.PI / 2}><cylinderGeometry args={[0.008, 0.008, 0.14, 8]} /><Mat k="metal" /></mesh>
  </group>)
}
function Laser() {
  return (<group>
    <mesh castShadow position={[0, 0.09, 0]}><boxGeometry args={[0.55, 0.18, 0.36]} /><Mat k="dark" /></mesh>
    <mesh position={[0, 0.21, 0]}><boxGeometry args={[0.5, 0.07, 0.32]} /><meshStandardMaterial color="#ff8a3d" transparent opacity={0.55} emissive="#ff5a1f" emissiveIntensity={0.4} /></mesh>
    <mesh position={[0.2, 0.1, 0.185]}><boxGeometry args={[0.05, 0.03, 0.005]} /><meshBasicMaterial color="#3dff9a" toneMapped={false} /></mesh>
  </group>)
}
function Printer() {
  const head = useRef()
  useFrame(({ clock }) => { head.current.position.x = Math.sin(clock.elapsedTime * 2) * 0.1 })
  return (<group>
    <mesh castShadow position={[0, 0.02, 0]}><boxGeometry args={[0.38, 0.04, 0.34]} /><Mat k="dark" /></mesh>
    {[[-0.17, -0.15], [0.17, -0.15], [-0.17, 0.15], [0.17, 0.15]].map(([x, z], i) => <mesh key={i} position={[x, 0.2, z]}><boxGeometry args={[0.02, 0.36, 0.02]} /><Mat k="metal" /></mesh>)}
    <mesh position={[0, 0.39, 0]}><boxGeometry args={[0.38, 0.02, 0.34]} /><Mat k="dark" /></mesh>
    <mesh position={[0, 0.06, 0]}><boxGeometry args={[0.28, 0.01, 0.26]} /><Mat k="metal" /></mesh>
    <mesh position={[0, 0.2, 0]}><boxGeometry args={[0.34, 0.015, 0.015]} /><Mat k="metal" /></mesh>
    <mesh ref={head} position={[0, 0.2, 0]}><boxGeometry args={[0.05, 0.05, 0.05]} /><Mat k="orange" /></mesh>
    <mesh position={[0.27, 0.12, 0]} rotation-z={Math.PI / 2}><cylinderGeometry args={[0.08, 0.08, 0.07, 24]} /><meshStandardMaterial color="#3ddc84" roughness={0.6} /></mesh>
    <mesh position={[0.23, 0.12, 0]} rotation-z={Math.PI / 2}><cylinderGeometry args={[0.03, 0.03, 0.09, 16]} /><Mat k="dark" /></mesh>
  </group>)
}
function Gearbox() {
  return (<group>
    <mesh castShadow position={[0, 0.1, 0]}><boxGeometry args={[0.26, 0.2, 0.03]} /><Mat k="metal" /></mesh>
    <mesh castShadow position={[0.07, 0.15, -0.09]} rotation-x={Math.PI / 2}><cylinderGeometry args={[0.055, 0.055, 0.15, 24]} /><Mat k="dark" /></mesh>
    <mesh position={[-0.06, 0.06, 0.07]} rotation-x={Math.PI / 2}><cylinderGeometry args={[0.012, 0.012, 0.12, 12]} /><Mat k="metal" /></mesh>
    <mesh position={[-0.06, 0.06, 0.0]} rotation-x={Math.PI / 2}><cylinderGeometry args={[0.05, 0.05, 0.016, 24]} /><Mat k="orange" /></mesh>
  </group>)
}
function Tap() {
  return (<group>
    <mesh position={[0, 0.012, 0]} rotation-z={Math.PI / 2}><cylinderGeometry args={[0.008, 0.008, 0.2, 10]} /><Mat k="metal" /></mesh>
    <mesh position={[-0.11, 0.012, 0]}><boxGeometry args={[0.02, 0.02, 0.14]} /><Mat k="orange" /></mesh>
    <mesh position={[0.2, 0.02, 0.02]}><cylinderGeometry args={[0.02, 0.02, 0.04, 6]} /><meshStandardMaterial color="#2d6cdf" /></mesh>
  </group>)
}
function Chain() {
  return (<group>
    <mesh position={[0, 0.015, 0]} rotation-x={Math.PI / 2} scale={[1.7, 1, 1]}><torusGeometry args={[0.07, 0.011, 6, 28]} /><Mat k="metal" /></mesh>
    <mesh position={[-0.12, 0.03, 0]}><cylinderGeometry args={[0.055, 0.055, 0.02, 16]} /><meshStandardMaterial color="#ffd23d" metalness={0.4} roughness={0.5} /></mesh>
    <mesh position={[0.12, 0.03, 0]}><cylinderGeometry args={[0.035, 0.035, 0.02, 12]} /><meshStandardMaterial color="#ffd23d" metalness={0.4} roughness={0.5} /></mesh>
  </group>)
}
function Cad() {
  return (<group>
    <mesh position={[0, 0.02, 0]}><boxGeometry args={[0.3, 0.02, 0.2]} /><Mat k="dark" /></mesh>
    <mesh position={[0, 0.2, 0]}><boxGeometry args={[0.04, 0.4, 0.04]} /><Mat k="dark" /></mesh>
    <mesh position={[0, 0.5, 0]}><boxGeometry args={[0.8, 0.46, 0.04]} /><Mat k="dark" /></mesh>
    <mesh position={[0, 0.5, 0.025]}><planeGeometry args={[0.76, 0.42]} /><meshBasicMaterial color="#0b1a14" toneMapped={false} /></mesh>
    <Text font="/fonts/mono.woff" position={[-0.34, 0.66, 0.03]} fontSize={0.03} anchorX="left" anchorY="top" color="#3dff9a" lineHeight={1.5}>
      {'$ onshape open gearbox_v3\n> mate: 12T → 50T  ok\n> export dxf → illustrator\n> laser_cut --hairline .001in\n> _'}
    </Text>
  </group>)
}
const MODELS = { cad: Cad, laser: Laser, printer: Printer, drill: Drill, gearbox: Gearbox, tap: Tap, chain: Chain }

export const BENCH_TOP = 0.935
export const BENCH_Z = -2.45

function Tool({ tool, active, onSelect }) {
  const [hover, setHover] = useState(false)
  useCursor(hover && !active)
  const Model = MODELS[tool.id]
  const lit = hover || active
  return (
    <group position={[tool.x, BENCH_TOP, tool.z]} scale={hover && !active ? 1.06 : 1}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true) }} onPointerOut={() => setHover(false)}
      onClick={(e) => { e.stopPropagation(); onSelect(tool.id) }}>
      <Model />
      {/* generous invisible hit box so tiny tools are easy to hit */}
      <mesh position={[0, 0.2, 0]}><boxGeometry args={[0.55, 0.45, 0.4]} /><meshBasicMaterial transparent opacity={0} depthWrite={false} /></mesh>
      {lit && <mesh position={[0, 0.002, 0]} rotation-x={-Math.PI / 2}><ringGeometry args={[0.2, 0.215, 40]} /><meshBasicMaterial color="#ff5a1f" toneMapped={false} /></mesh>}
      <Billboard visible={lit} position={[0, tool.id === 'cad' ? 0.85 : 0.72, 0]}>
        <Text font="/fonts/mono.woff" fontSize={0.05} color={lit ? '#ff5a1f' : '#e8e6e1'} outlineWidth={0.004} outlineColor="#000">
          {tool.name.toUpperCase()}
        </Text>
      </Billboard>
    </group>
  )
}

export default function Tools({ activeTool, onSelect }) {
  return (
    <group position={[0, 0, BENCH_Z]}>
      {tools.map((t) => <Tool key={t.id} tool={t} active={activeTool === t.id} onSelect={onSelect} />)}
    </group>
  )
}
