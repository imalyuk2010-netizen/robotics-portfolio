import { Text, Grid } from '@react-three/drei'
import Frame from './Frame'
import Robot from './Robot'
import Rover from './Rover'
import Tools from './Tools'
import { projects, owner } from './config'

const wallMat = <meshStandardMaterial color="#16181c" roughness={0.95} />

function LightStrip({ position, length = 3 }) {
  return (
    <group position={position}>
      <mesh><boxGeometry args={[length, 0.04, 0.12]} /><meshBasicMaterial color="#fff6e8" toneMapped={false} /></mesh>
      <pointLight intensity={22} distance={10} color="#ffe9cf" castShadow={false} />
    </group>
  )
}

function Bench() {
  return (
    <group position={[0, 0, -2.45]}>
      <mesh castShadow receiveShadow position={[0, 0.9, 0]}><boxGeometry args={[4.8, 0.07, 0.95]} /><meshStandardMaterial color="#2a2d33" roughness={0.5} metalness={0.2} /></mesh>
      {[-2.2, 2.2].flatMap((x) => [-0.4, 0.4].map((z) => (
        <mesh key={`${x}${z}`} castShadow position={[x, 0.45, z]}><boxGeometry args={[0.06, 0.9, 0.06]} /><meshStandardMaterial color="#0e0f11" metalness={0.6} roughness={0.4} /></mesh>
      )))}
      <mesh position={[0, 0.3, 0]}><boxGeometry args={[4.6, 0.04, 0.8]} /><meshStandardMaterial color="#1c1e22" /></mesh>
      <Robot position={[0.15, 0.935, -0.1]} />
    </group>
  )
}

function Pegboard() {
  const tools = [[-0.9, 0.5, 0.05, 0.5], [-0.5, 0.4, 0.12, 0.35], [0, 0.55, 0.06, 0.4], [0.5, 0.35, 0.18, 0.3], [0.9, 0.5, 0.05, 0.55]]
  return (
    <group position={[-3.97, 1.25, -2.15]} rotation-y={Math.PI / 2} scale={[0.66, 1, 1]}>
      <mesh receiveShadow><boxGeometry args={[2.4, 1.3, 0.04]} /><meshStandardMaterial color="#20232a" roughness={0.9} /></mesh>
      {tools.map(([x, y, w, h], i) => (
        <mesh key={i} castShadow position={[x, y - 0.3, 0.06]}><boxGeometry args={[w, h, 0.03]} /><meshStandardMaterial color={i % 2 ? '#ff5a1f' : '#9aa0a8'} metalness={0.6} roughness={0.4} /></mesh>
      ))}
    </group>
  )
}

export default function Room({ focus, onSelect, tool, onTool }) {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 5, 4]} intensity={1.1} castShadow shadow-mapSize={[1024, 1024]} />
      <LightStrip position={[-2, 3.3, -1.5]} />
      <LightStrip position={[2, 3.3, -1.5]} />
      <LightStrip position={[0, 3.3, 1.5]} />

      {/* shell */}
      <mesh rotation-x={-Math.PI / 2} receiveShadow><planeGeometry args={[8, 7]} /><meshStandardMaterial color="#0f1013" roughness={0.55} metalness={0.2} /></mesh>
      <Grid position={[0, 0.002, 0]} args={[8, 7]} cellSize={0.5} cellThickness={0.6} sectionSize={2} sectionThickness={1} cellColor="#23262c" sectionColor="#ff5a1f" fadeDistance={14} />
      <mesh position={[0, 1.7, -3]} receiveShadow>{<planeGeometry args={[8, 3.4]} />}{wallMat}</mesh>
      <mesh position={[-4, 1.7, 0]} rotation-y={Math.PI / 2} receiveShadow><planeGeometry args={[7, 3.4]} />{wallMat}</mesh>
      <mesh position={[4, 1.7, 0]} rotation-y={-Math.PI / 2} receiveShadow><planeGeometry args={[7, 3.4]} />{wallMat}</mesh>
      <mesh position={[0, 3.4, 0]} rotation-x={Math.PI / 2}><planeGeometry args={[8, 7]} /><meshStandardMaterial color="#0a0b0d" /></mesh>
      {/* baseboard glow */}
      <mesh position={[0, 0.04, -2.99]}><boxGeometry args={[8, 0.03, 0.02]} /><meshBasicMaterial color="#ff5a1f" toneMapped={false} /></mesh>

      <Bench />
      <Tools activeTool={tool} onSelect={onTool} />
      <Pegboard />
      <Rover />

      {/* name sign on left wall */}
      <group position={[-3.96, 2.2, 0.4]} rotation-y={Math.PI / 2}>
        <Text font="/fonts/display.woff" fontSize={0.42} color="#ff5a1f" anchorX="center" anchorY="middle" letterSpacing={0.02} fontWeight={700}>{owner.name.toUpperCase()}</Text>
        <Text font="/fonts/mono.woff" position={[0, -0.38, 0]} fontSize={0.12} color="#e8e6e1" anchorX="center" letterSpacing={0.18}>{owner.title.toUpperCase()}</Text>
        <Text font="/fonts/mono.woff" position={[0, -0.78, 0]} fontSize={0.075} color="#8a8f98" anchorX="center" maxWidth={2.6} textAlign="center" lineHeight={1.5}>{owner.about}</Text>
      </group>

      {projects.map((p, i) => (
        <Frame key={p.id} project={p} index={i} active={focus === p.id} dim={(focus && focus !== p.id) || !!tool} onSelect={onSelect} />
      ))}
    </>
  )
}
