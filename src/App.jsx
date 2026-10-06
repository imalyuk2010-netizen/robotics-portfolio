import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loading, { useAssetPreload } from './Loading'
import Room from './Room'
import Eng2Room from './Eng2Room'
import CameraRig from './CameraRig'
import UI from './UI'
import { roomProjects, tools } from './config'

// Mounts only once everything in the same Suspense boundary (rooms, 3D text) has finished loading.
function SceneReady({ onReady }) {
  useEffect(() => { const t = setTimeout(onReady, 300); return () => clearTimeout(t) }, [onReady])
  return null
}

export default function App() {
  const { progress, ready: assetsReady } = useAssetPreload()
  const [sceneReady, setSceneReady] = useState(false)
  const ready = assetsReady && sceneReady
  const [view, setView] = useState('overview')
  const [focus, setFocus] = useState(null) // project id

  const [tool, setTool] = useState(null) // tool id
  const [room, setRoom] = useState('robotics')
  const [fading, setFading] = useState(false)

  const select = (id) => { setTool(null); setFocus(id) }
  const pickTool = (id) => { setFocus(null); setTool(id) }
  const close = () => { setFocus(null); setTool(null) }
  const step = (d) => {
    const list = tool ? tools : roomProjects(room)
    const cur = tool || focus
    const i = list.findIndex((p) => p.id === cur)
    const next = list[(i + d + list.length) % list.length].id
    tool ? setTool(next) : setFocus(next)
  }
  const goto = (v) => { close(); setView(v) }
  // fade out, swap rooms while hidden, fade back in
  const switchRoom = (r) => {
    if (r === room || fading) return
    close(); setFading(true)
    setTimeout(() => { setRoom(r); setView('overview') }, 450)
    setTimeout(() => setFading(false), 750)
  }
  const open = tool || focus

  useEffect(() => {
    const k = (e) => {
      if (e.key === 'Escape') close()
      if (open && e.key === 'ArrowRight') step(1)
      if (open && e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  })

  return (
    <>
      <Canvas shadows camera={{ fov: 50, position: [0, 1.9, 8], near: 0.1, far: 60 }} dpr={[1, 2]}>
        <color attach="background" args={['#06140f']} />
        <fog attach="fog" args={['#06140f', 10, 24]} />
        <Suspense fallback={null}>
          {/* both rooms stay mounted (so switching is instant); the inactive one is hidden and parked out of reach of clicks */}
          <group visible={room === 'robotics'} position-y={room === 'robotics' ? 0 : -200}>
            <Room focus={focus} onSelect={select} tool={tool} onTool={pickTool} />
          </group>
          <group visible={room === 'eng2'} position-y={room === 'eng2' ? 0 : -200}>
            <Eng2Room focus={focus} onSelect={select} />
          </group>
          <CameraRig view={view} focus={focus} tool={tool} />
          <SceneReady onReady={() => setSceneReady(true)} />
        </Suspense>
      </Canvas>
      <Loading progress={progress} ready={ready} />
      <div className={`fade ${fading ? 'on' : ''}`} aria-hidden="true" />
      <UI view={view} focus={focus} tool={tool} room={room} switchRoom={switchRoom} goto={goto} close={close} step={step} />
    </>
  )
}
