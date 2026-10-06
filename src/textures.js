import * as THREE from 'three'

// Procedural blueprint placeholder so the room looks finished before real photos exist.
export function makePlaceholder(title, index) {
  const w = 1200, h = 800
  const c = document.createElement('canvas')
  c.width = w; c.height = h
  const g = c.getContext('2d')
  const hue = [14, 200, 150, 40, 280, 0][index % 6]
  const bg = g.createLinearGradient(0, 0, w, h)
  bg.addColorStop(0, `hsl(${hue} 35% 14%)`)
  bg.addColorStop(1, `hsl(${hue} 30% 6%)`)
  g.fillStyle = bg; g.fillRect(0, 0, w, h)
  g.strokeStyle = `hsl(${hue} 60% 55% / .12)`; g.lineWidth = 1
  for (let x = 0; x < w; x += 40) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke() }
  for (let y = 0; y < h; y += 40) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke() }
  g.strokeStyle = `hsl(${hue} 90% 62%)`; g.lineWidth = 3
  const cx = w / 2, cy = h / 2 + 20
  g.beginPath(); g.arc(cx, cy, 150, 0, Math.PI * 2); g.stroke()
  g.beginPath(); g.arc(cx, cy, 60, 0, Math.PI * 2); g.stroke()
  g.strokeRect(cx - 240, cy - 40, 480, 80)
  g.beginPath(); g.moveTo(cx - 300, cy); g.lineTo(cx + 300, cy); g.moveTo(cx, cy - 220); g.lineTo(cx, cy + 220); g.stroke()
  g.fillStyle = '#fff'; g.font = '600 54px "Space Grotesk", sans-serif'; g.fillText(title, 56, 96)
  g.fillStyle = `hsl(${hue} 90% 62%)`; g.font = '28px "JetBrains Mono", monospace'
  g.fillText(`PLACEHOLDER — ADD PHOTO  /  0${index + 1}`, 56, h - 48)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 8
  return t
}
