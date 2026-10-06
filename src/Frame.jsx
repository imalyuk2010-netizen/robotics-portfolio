import { useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'
import { useCursor, Text } from '@react-three/drei'
import { makePlaceholder } from './textures'
import { placeProject } from './layout'

const W = 1.35, H = 0.9

// Looping muted clip laid over the centre of the poster image (poster is a 9:16 still letterboxed in the frame).
function VideoPlane({ src }) {
  const tex = useMemo(() => {
    const v = document.createElement('video')
    Object.assign(v, { src, loop: true, muted: true, playsInline: true, autoplay: true, crossOrigin: 'anonymous' })
    v.play().catch(() => {})
    const t = new THREE.VideoTexture(v)
    t.colorSpace = THREE.SRGBColorSpace
    return t
  }, [src])
  useEffect(() => () => { tex.image.pause(); tex.dispose() }, [tex])
  const h = H * 0.92
  return (
    <mesh position={[0, 0, 0.016]}>
      <planeGeometry args={[h * (9 / 16), h]} />
      <meshBasicMaterial map={tex} toneMapped={false} />
    </mesh>
  )
}

export default function Frame({ project, index, active, dim, onSelect }) {
  const [hover, setHover] = useState(false)
  useCursor(hover && !active)
  const { pos, rotY } = useMemo(() => placeProject(project), [project])
  const placeholder = useMemo(() => makePlaceholder(project.title.trim(), index), [project, index])
  const [tex, setTex] = useState(placeholder)

  useEffect(() => {
    if (!project.image) return
    new THREE.TextureLoader().load(project.image, (t) => {
      t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; setTex(t)
    })
  }, [project.image])

  const s = hover && !active ? 1.04 : 1
  return (
    <group position={pos} rotation-y={rotY} scale={s}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true) }}
      onPointerOut={() => setHover(false)}
      onClick={(e) => { e.stopPropagation(); onSelect(project.id) }}>
      {/* frame */}
      <mesh castShadow position={[0, 0, -0.02]}>
        <boxGeometry args={[W + 0.12, H + 0.12, 0.06]} />
        <meshStandardMaterial color={hover ? '#d4ad55' : '#e9e2cf'} roughness={0.6} metalness={0.4} />
      </mesh>
      <mesh position={[0, 0, 0.012]}>
        <planeGeometry args={[W, H]} />
        <meshBasicMaterial map={tex} toneMapped={false} color={dim ? '#777' : '#fff'} />
      </mesh>
      {project.video && <VideoPlane src={project.video} />}
      {/* plaque */}
      <Text font="/fonts/mono.woff" position={[-W / 2, -H / 2 - 0.17, 0.02]} fontSize={0.075} anchorX="left" color="#efe8d6" letterSpacing={0.04}>
        {`0${index + 1}  ${project.title.trim().toUpperCase()}`}
      </Text>
      <Text font="/fonts/mono.woff" position={[-W / 2, -H / 2 - 0.27, 0.02]} fontSize={0.055} anchorX="left" letterSpacing={0.06} color="#d4ad55">
        {project.date.toUpperCase()}
      </Text>
    </group>
  )
}
