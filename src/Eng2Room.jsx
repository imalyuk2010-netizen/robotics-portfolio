import { useMemo } from 'react'
import * as THREE from 'three'
import { Text, Grid } from '@react-three/drei'
import Frame from './Frame'
import { LightStrip } from './Room'
import { roomProjects } from './config'

// Light variant of the studio palette: cream walls, racing-green floor and trim, brass accents.
const C = { wall: '#e6dfcc', floor: '#123528', ceiling: '#d9d1bc', green: '#0e3b2b', greenL: '#0f6b46', brass: '#d4ad55', cream: '#efe8d6', steel: '#9aa39c', ink: '#123528' }

function useBlueprint() {
  return useMemo(() => {
    const w = 1024, h = 680, c = document.createElement('canvas')
    c.width = w; c.height = h
    const g = c.getContext('2d')
    g.fillStyle = '#f4efe2'; g.fillRect(0, 0, w, h)
    g.strokeStyle = '#0e3b2b22'; g.lineWidth = 1
    for (let x = 0; x < w; x += 32) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke() }
    for (let y = 0; y < h; y += 32) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke() }
    g.strokeStyle = '#0e3b2b'; g.lineWidth = 4
    g.strokeRect(40, 40, w - 80, h - 80)
    // a simple bracket drawing with dimension lines
    g.lineWidth = 3
    g.beginPath(); g.moveTo(220, 470); g.lineTo(220, 220); g.lineTo(360, 220); g.lineTo(360, 400); g.lineTo(620, 400); g.lineTo(620, 470); g.closePath(); g.stroke()
    ;[[290, 300], [470, 435], [560, 435]].forEach(([x, y]) => { g.beginPath(); g.arc(x, y, 18, 0, Math.PI * 2); g.stroke() })
    g.strokeStyle = '#d4ad55'; g.lineWidth = 2
    g.beginPath(); g.moveTo(220, 520); g.lineTo(620, 520); g.moveTo(220, 508); g.lineTo(220, 532); g.moveTo(620, 508); g.lineTo(620, 532); g.stroke()
    g.fillStyle = '#0e3b2b'; g.font = '600 26px "JetBrains Mono", monospace'
    g.fillText('4.00 in', 380, 558)
    g.strokeRect(w - 300, h - 140, 240, 80)
    g.font = '20px "JetBrains Mono", monospace'; g.fillText('ENGINEERING 2', w - 285, h - 106); g.fillText('SHEET 1 / 1', w - 285, h - 78)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.anisotropy = 8
    return t
  }, [])
}

function DraftingTable() {
  const paper = useBlueprint()
  const steel = <meshStandardMaterial color={C.steel} metalness={0.7} roughness={0.35} />
  return (
    <group position={[0, 0, -2.2]}>
      {[-0.75, 0.75].map((x) => (
        <group key={x} position={[x, 0, 0]}>
          <mesh castShadow position={[0, 0.45, 0]}><boxGeometry args={[0.05, 0.9, 0.05]} />{steel}</mesh>
          <mesh position={[0, 0.03, 0]}><boxGeometry args={[0.07, 0.05, 0.7]} />{steel}</mesh>
        </group>
      ))}
      <mesh position={[0, 0.25, 0]}><boxGeometry args={[1.5, 0.04, 0.04]} />{steel}</mesh>
      {/* tilted drawing board */}
      <group position={[0, 1.0, 0]} rotation-x={0.42}>
        <mesh castShadow receiveShadow><boxGeometry args={[1.8, 0.04, 1.1]} /><meshStandardMaterial color={C.cream} roughness={0.7} /></mesh>
        <mesh position={[0, 0.022, 0]} rotation-x={-Math.PI / 2}><planeGeometry args={[1.5, 1.0]} /><meshStandardMaterial map={paper} roughness={0.9} /></mesh>
        {/* parallel rule + pencil */}
        <mesh position={[0, 0.035, 0.3]}><boxGeometry args={[1.7, 0.012, 0.05]} /><meshStandardMaterial color={C.green} /></mesh>
        <mesh position={[0.45, 0.04, 0.18]} rotation-y={0.6} rotation-z={Math.PI / 2}><cylinderGeometry args={[0.008, 0.008, 0.18, 6]} /><meshStandardMaterial color={C.brass} /></mesh>
      </group>
      {/* stool */}
      <group position={[0.2, 0, 0.95]}>
        <mesh castShadow position={[0, 0.66, 0]}><cylinderGeometry args={[0.2, 0.2, 0.05, 24]} /><meshStandardMaterial color={C.greenL} roughness={0.6} /></mesh>
        <mesh position={[0, 0.33, 0]}><cylinderGeometry args={[0.025, 0.025, 0.66, 10]} />{steel}</mesh>
        <mesh position={[0, 0.02, 0]}><cylinderGeometry args={[0.22, 0.22, 0.03, 20]} />{steel}</mesh>
      </group>
    </group>
  )
}

function SideDesk() {
  return (
    <group position={[2.35, 0, -2.3]}>
      <mesh castShadow receiveShadow position={[0, 0.76, 0]}><boxGeometry args={[1.5, 0.05, 0.75]} /><meshStandardMaterial color={C.cream} roughness={0.6} /></mesh>
      {[[-0.7, -0.33], [0.7, -0.33], [-0.7, 0.33], [0.7, 0.33]].map(([x, z]) => (
        <mesh key={`${x}${z}`} castShadow position={[x, 0.38, z]}><boxGeometry args={[0.05, 0.76, 0.05]} /><meshStandardMaterial color={C.green} /></mesh>
      ))}
      {/* laptop */}
      <group position={[-0.2, 0.79, 0.05]}>
        <mesh><boxGeometry args={[0.5, 0.02, 0.34]} /><meshStandardMaterial color="#2a2f2c" metalness={0.6} roughness={0.4} /></mesh>
        <group position={[0, 0.01, -0.17]} rotation-x={-0.25}>
          <mesh position={[0, 0.17, 0]}><boxGeometry args={[0.5, 0.34, 0.015]} /><meshStandardMaterial color="#2a2f2c" metalness={0.6} roughness={0.4} /></mesh>
          <mesh position={[0, 0.17, 0.009]}><planeGeometry args={[0.46, 0.3]} /><meshBasicMaterial color="#e9f2ec" toneMapped={false} /></mesh>
          <Text font="/fonts/mono.woff" position={[-0.2, 0.3, 0.011]} fontSize={0.022} anchorX="left" anchorY="top" color={C.green} lineHeight={1.6}>
            {'ENGINEERING 2\n> new project\n> sketch · model · build\n> test · iterate · _'}
          </Text>
        </group>
      </group>
      {/* sketchbook + calipers */}
      <mesh position={[0.4, 0.79, 0.05]} rotation-y={-0.2}><boxGeometry args={[0.3, 0.02, 0.4]} /><meshStandardMaterial color={C.greenL} /></mesh>
      <mesh position={[0.42, 0.805, 0.0]} rotation-y={0.5}><boxGeometry args={[0.03, 0.008, 0.22]} /><meshStandardMaterial color={C.steel} metalness={0.8} roughness={0.3} /></mesh>
    </group>
  )
}

function PartsShelf() {
  const parts = [
    [0, 0.6, '#0f6b46', 'box'], [0.3, 0.6, C.brass, 'cyl'], [-0.3, 0.6, C.cream, 'cyl'],
    [0.15, 1.15, C.brass, 'box'], [-0.2, 1.15, '#0f6b46', 'cyl'], [0.05, 1.7, C.cream, 'box'],
  ]
  return (
    <group position={[-3.15, 0, -2.75]}>
      {[-0.42, 0.42].map((x) => <mesh key={x} castShadow position={[x, 1.0, 0]}><boxGeometry args={[0.04, 2.0, 0.4]} /><meshStandardMaterial color={C.green} /></mesh>)}
      {[0.05, 0.5, 1.05, 1.6, 1.98].map((y) => (
        <mesh key={y} receiveShadow castShadow position={[0, y, 0]}><boxGeometry args={[0.88, 0.03, 0.4]} /><meshStandardMaterial color={C.cream} roughness={0.7} /></mesh>
      ))}
      {parts.map(([x, y, color, shape], i) => (
        <mesh key={i} castShadow position={[x, y, 0]}>
          {shape === 'box' ? <boxGeometry args={[0.16, 0.16, 0.16]} /> : <cylinderGeometry args={[0.07, 0.07, 0.16, 16]} />}
          <meshStandardMaterial color={color} roughness={0.5} metalness={color === C.brass ? 0.6 : 0.1} />
        </mesh>
      ))}
    </group>
  )
}

function Whiteboard() {
  return (
    <group position={[-3.96, 1.85, 0.4]} rotation-y={Math.PI / 2}>
      <mesh position={[0, 0, -0.02]}><boxGeometry args={[3.2, 1.7, 0.04]} /><meshStandardMaterial color={C.steel} metalness={0.7} roughness={0.35} /></mesh>
      <mesh position={[0, 0, 0.006]}><planeGeometry args={[3.08, 1.58]} /><meshStandardMaterial color="#fbfaf6" roughness={0.25} /></mesh>
      <mesh position={[0, -0.86, 0.05]}><boxGeometry args={[1.4, 0.03, 0.08]} /><meshStandardMaterial color={C.steel} metalness={0.7} roughness={0.35} /></mesh>
      {[[-0.3, C.green], [-0.15, C.brass], [0, '#2d5fbf']].map(([x, c]) => (
        <mesh key={x} position={[x, -0.83, 0.06]} rotation-z={Math.PI / 2}><cylinderGeometry args={[0.012, 0.012, 0.12, 8]} /><meshStandardMaterial color={c} /></mesh>
      ))}
      <Text font="/fonts/display.woff" position={[0, 0.42, 0.015]} fontSize={0.34} color={C.green} anchorX="center" anchorY="middle">ENGINEERING 2</Text>
      <Text font="/fonts/mono.woff" position={[0, 0.1, 0.015]} fontSize={0.09} color={C.brass} anchorX="center" letterSpacing={0.2}>CLASS PORTFOLIO</Text>
      <Text font="/fonts/mono.woff" position={[0, -0.28, 0.015]} fontSize={0.07} color="#3e5a4d" anchorX="center" maxWidth={2.5} textAlign="center" lineHeight={1.55}>
        Projects from my Engineering 2 class. New work gets added here as the class goes on.
      </Text>
    </group>
  )
}

export default function Eng2Room({ focus, onSelect }) {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 4]} intensity={0.9} castShadow shadow-mapSize={[1024, 1024]} />
      <LightStrip position={[-2, 3.3, -1.5]} intensity={14} />
      <LightStrip position={[2, 3.3, -1.5]} intensity={14} />
      <LightStrip position={[0, 3.3, 1.5]} intensity={14} />

      <mesh rotation-x={-Math.PI / 2} receiveShadow><planeGeometry args={[8, 7]} /><meshStandardMaterial color={C.floor} roughness={0.7} /></mesh>
      <Grid position={[0, 0.002, 0]} args={[8, 7]} cellSize={0.5} cellThickness={0.6} sectionSize={2} sectionThickness={1} cellColor="#1d4a39" sectionColor={C.brass} fadeDistance={14} />
      <mesh position={[0, 1.7, -3]} receiveShadow><planeGeometry args={[8, 3.4]} /><meshStandardMaterial color={C.wall} roughness={0.95} /></mesh>
      <mesh position={[-4, 1.7, 0]} rotation-y={Math.PI / 2} receiveShadow><planeGeometry args={[7, 3.4]} /><meshStandardMaterial color={C.wall} roughness={0.95} /></mesh>
      <mesh position={[4, 1.7, 0]} rotation-y={-Math.PI / 2} receiveShadow><planeGeometry args={[7, 3.4]} /><meshStandardMaterial color={C.wall} roughness={0.95} /></mesh>
      <mesh position={[0, 3.4, 0]} rotation-x={Math.PI / 2}><planeGeometry args={[8, 7]} /><meshStandardMaterial color={C.ceiling} /></mesh>
      {/* green wainscot band + brass trim */}
      <mesh position={[0, 0.45, -2.99]}><planeGeometry args={[8, 0.9]} /><meshStandardMaterial color={C.green} roughness={0.9} /></mesh>
      <mesh position={[0, 0.9, -2.985]}><boxGeometry args={[8, 0.025, 0.01]} /><meshBasicMaterial color={C.brass} toneMapped={false} /></mesh>
      {[-1, 1].map((side) => (
        <group key={side}>
          <mesh position={[3.99 * side, 0.45, 0]} rotation-y={-side * Math.PI / 2}><planeGeometry args={[7, 0.9]} /><meshStandardMaterial color={C.green} roughness={0.9} /></mesh>
          <mesh position={[3.985 * side, 0.9, 0]} rotation-y={-side * Math.PI / 2}><boxGeometry args={[7, 0.025, 0.01]} /><meshBasicMaterial color={C.brass} toneMapped={false} /></mesh>
        </group>
      ))}

      <DraftingTable />
      <SideDesk />
      <PartsShelf />
      <Whiteboard />

      {roomProjects('eng2').map((p, i) => (
        <Frame key={p.id} project={p} index={i} active={focus === p.id} dim={focus && focus !== p.id} onSelect={onSelect}
          frameColor={C.green} ink={C.ink} dateColor="#9a7a2e" />
      ))}
    </>
  )
}
