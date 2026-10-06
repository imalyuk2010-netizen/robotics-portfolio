import * as THREE from 'three'

const BACK_X = [-3.1, -1.55, 0, 1.55, 3.1]
const RIGHT_Z = [-1.7, 0.1, 1.9]

export function placeProject(p) {
  const y = 2.35
  if (p.wall === 'back') {
    const pos = new THREE.Vector3(BACK_X[p.slot], y, -2.93)
    return { pos, rotY: 0, normal: new THREE.Vector3(0, 0, 1) }
  }
  const pos = new THREE.Vector3(3.93, y, RIGHT_Z[p.slot])
  return { pos, rotY: -Math.PI / 2, normal: new THREE.Vector3(-1, 0, 0) }
}

export const VIEWS = {
  overview: { cam: [0, 1.9, 6.3], look: [0, 1.7, -2] },
  gallery: { cam: [0, 2.1, 1.6], look: [0, 2.2, -3] },
  bench: { cam: [0, 1.7, 1.2], look: [0, 1.15, -2.4] },
  about: { cam: [2.2, 1.6, 2.6], look: [-4, 1.8, 0.2] },
}
