import { useEffect, useState } from 'react'
import { preloadFont } from 'troika-three-text'
import { owner, projects } from './config'

const CHARS = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;!?%&()[]{}<>/\\|_+-–—=*#$@"\'’•·°®…→>_'

const loadFont = (font) => new Promise((res) => { try { preloadFont({ font, characters: CHARS }, res) } catch { res() } })
const loadImage = (src) => new Promise((res) => { const i = new Image(); i.onload = i.onerror = res; i.src = src })

// Preloads the 3D text fonts + project images so the room appears fully formed instead of popping in.
export function useAssetPreload() {
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const jobs = [
      loadFont('/fonts/mono.woff'),
      loadFont('/fonts/display.woff'),
      document.fonts?.ready ?? Promise.resolve(),
      ...projects.filter((p) => p.image).map((p) => loadImage(p.image)),
    ]
    let done = 0
    jobs.forEach((j) => j.then(() => { done++; setProgress(done / jobs.length) }))
    const minTime = new Promise((r) => setTimeout(r, 1100))
    Promise.all([...jobs, minTime]).then(() => setReady(true))
  }, [])
  return { progress, ready }
}

export default function Loading({ progress, ready }) {
  const [gone, setGone] = useState(false)
  useEffect(() => { if (ready) { const t = setTimeout(() => setGone(true), 900); return () => clearTimeout(t) } }, [ready])
  if (gone) return null
  return (
    <div className={`loading ${ready ? 'out' : ''}`} role="status" aria-live="polite">
      <svg className="gear" viewBox="0 0 100 100" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="3">
          <circle cx="50" cy="50" r="14" />
          <path d="M50 8l5 10h-10zM50 92l-5-10h10zM8 50l10-5v10zM92 50l-10 5v-10zM20 20l11 3-8 8zM80 80l-11-3 8-8zM80 20l-3 11-8-8zM20 80l3-11 8 8z" fill="currentColor" stroke="none" />
          <circle cx="50" cy="50" r="30" />
        </g>
      </svg>
      <div className="l-name">{owner.name}<i>®</i></div>
      <div className="l-sub">Entering the studio</div>
      <div className="bar"><span style={{ width: `${Math.round((ready ? 1 : progress * 0.95) * 100)}%` }} /></div>
      <div className="l-pct">{Math.round((ready ? 1 : progress * 0.95) * 100)}%</div>
    </div>
  )
}
