import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import Room from './Room'
import CameraRig from './CameraRig'
import UI from './UI'
import { projects, tools } from './config'

export default function App() {
  const [view, setView] = useState('overview')
  const [focus, setFocus] = useState(null) // project id

  const [tool, setTool] = useState(null) // tool id

  const select = (id) => { setTool(null); setFocus(id) }
  const pickTool = (id) => { setFocus(null); setTool(id) }
  const close = () => { setFocus(null); setTool(null) }
  const step = (d) => {
    const list = tool ? tools : projects
    const cur = tool || focus
    const i = list.findIndex((p) => p.id === cur)
    const next = list[(i + d + list.length) % list.length].id
    tool ? setTool(next) : setFocus(next)
  }
  const goto = (v) => { close(); setView(v) }
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
        <color attach="background" args={['#07080a']} />
        <fog attach="fog" args={['#07080a', 9, 22]} />
        <Suspense fallback={null}>
          <Room focus={focus} onSelect={select} tool={tool} onTool={pickTool} />
          <CameraRig view={view} focus={focus} tool={tool} />
        </Suspense>
      </Canvas>
      <Loader />
      <UI view={view} focus={focus} tool={tool} goto={goto} close={close} step={step} />
    </>
  )
}
