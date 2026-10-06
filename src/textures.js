import * as THREE from 'three'

// Placeholder "drawing sheet" shown until a project has a real photo — matches the green/cream/brass palette.
export function makePlaceholder(title, index) {
  const w = 1200, h = 800
  const c = document.createElement('canvas')
  c.width = w; c.height = h
  const g = c.getContext('2d')
  const bg = g.createLinearGradient(0, 0, w, h)
  bg.addColorStop(0, '#f1ebdc')
  bg.addColorStop(1, '#e2d9c2')
  g.fillStyle = bg; g.fillRect(0, 0, w, h)
  g.strokeStyle = 'rgba(14, 59, 43, .1)'; g.lineWidth = 1
  for (let x = 0; x < w; x += 40) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke() }
  for (let y = 0; y < h; y += 40) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke() }
  g.strokeStyle = '#0e3b2b'; g.lineWidth = 3
  const cx = w / 2, cy = h / 2 + 20
  g.beginPath(); g.arc(cx, cy, 150, 0, Math.PI * 2); g.stroke()
  g.beginPath(); g.arc(cx, cy, 60, 0, Math.PI * 2); g.stroke()
  g.strokeRect(cx - 240, cy - 40, 480, 80)
  g.strokeStyle = '#d4ad55'; g.setLineDash([14, 10])
  g.beginPath(); g.moveTo(cx - 300, cy); g.lineTo(cx + 300, cy); g.moveTo(cx, cy - 220); g.lineTo(cx, cy + 220); g.stroke()
  g.setLineDash([])
  g.fillStyle = '#0e3b2b'; g.font = '600 54px "Space Grotesk", sans-serif'; g.fillText(title, 56, 96)
  g.fillStyle = '#9a7a2e'; g.font = '28px "JetBrains Mono", monospace'
  g.fillText(`COMING SOON  /  0${index + 1}`, 56, h - 48)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 8
  return t
}
