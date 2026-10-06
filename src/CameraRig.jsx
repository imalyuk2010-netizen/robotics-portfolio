import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { projects, tools } from './config'
import { BENCH_TOP, BENCH_Z } from './Tools'
import { VIEWS, placeProject } from './layout'

// Slide camera + target sideways so the focused item appears centred in the space right of the info panel.
const PANEL_PX = 470
function clearPanel(cam, tgt, rx, rz, state) {
  const vw = state.size.width
  if (vw < 900) return
  const dist = cam.distanceTo(tgt)
  const viewW = 2 * dist * Math.tan(THREE.MathUtils.degToRad(state.camera.fov / 2)) * state.camera.aspect
  const shift = (PANEL_PX / 2 / vw) * viewW
  cam.x -= rx * shift; cam.z -= rz * shift
  tgt.x -= rx * shift; tgt.z -= rz * shift
}

export default function CameraRig({ view, focus, tool }) {
  const look = useRef(new THREE.Vector3(0, 1.4, -2))
  const target = useRef(new THREE.Vector3())
  const camT = useRef(new THREE.Vector3())
  const { pointer } = useThree()

  useFrame((state, dt) => {
    let cam, lk, par = 1
    if (tool) {
      const t = tools.find((q) => q.id === tool)
      const fit = 0.8 / (Math.tan(THREE.MathUtils.degToRad(state.camera.fov / 2)) * state.camera.aspect)
      target.current.set(t.x, BENCH_TOP + (t.id === 'cad' ? 0.4 : 0.2), BENCH_Z + t.z)
      camT.current.set(t.x + 0.15, BENCH_TOP + 0.55, BENCH_Z + t.z + Math.max(1.5, fit))
      if (state.camera.aspect < 1) { camT.current.y -= 0.25; target.current.y -= 0.25 }
      else clearPanel(camT.current, target.current, 1, 0, state)
      cam = camT.current; lk = target.current; par = 0.15
    } else if (focus) {
      const p = projects.find((q) => q.id === focus)
      const { pos, normal } = placeProject(p)
      const fitDist = 1.05 / (Math.tan(THREE.MathUtils.degToRad(state.camera.fov / 2)) * state.camera.aspect)
      camT.current.copy(pos).addScaledVector(normal, Math.max(2.3, fitDist))
      target.current.copy(pos)
      if (state.camera.aspect < 1) { camT.current.y -= 1.0; target.current.y -= 1.0 } // keep frame above the mobile panel
      else clearPanel(camT.current, target.current, normal.z, -normal.x, state) // keep frame clear of the left panel
      cam = camT.current; lk = target.current; par = 0.15
    } else {
      const v = VIEWS[view]
      camT.current.set(...v.cam); target.current.set(...v.look)
      if (view === 'bench') { // keep the whole bench in frame on narrow screens
        const fit = 2.7 / (Math.tan(THREE.MathUtils.degToRad(state.camera.fov / 2)) * state.camera.aspect)
        camT.current.z = v.look[2] + Math.max(3.6, fit)
      }
      cam = camT.current; lk = target.current
    }
    const s = 2.4
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, cam.x + pointer.x * 0.5 * par, s, dt)
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, cam.y + pointer.y * 0.25 * par, s, dt)
    state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, cam.z, s, dt)
    look.current.x = THREE.MathUtils.damp(look.current.x, lk.x, s, dt)
    look.current.y = THREE.MathUtils.damp(look.current.y, lk.y, s, dt)
    look.current.z = THREE.MathUtils.damp(look.current.z, lk.z, s, dt)
    state.camera.lookAt(look.current)
  })
  return null
}
