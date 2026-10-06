import { owner, rooms, roomProjects, tools } from './config'

const NAV = { robotics: [['overview', 'Studio'], ['gallery', 'Work'], ['bench', 'Bench'], ['about', 'About']],
  eng2: [['overview', 'Room'], ['gallery', 'Work'], ['bench', 'Desk'], ['about', 'About']] }
const HINT = { robotics: 'click a frame or a tool on the bench', eng2: 'click a frame to open it' }

export default function UI({ view, focus, tool, room, switchRoom, goto, close, step }) {
  const list = tool ? tools : roomProjects(room)
  const p = list.find((q) => q.id === (tool || focus))
  const i = p ? list.indexOf(p) : 0
  return (
    <div className="ui">
      <header>
        <span className="logo">{owner.name}<i>®</i></span>
        <div className="rooms" role="tablist" aria-label="Rooms">
          {rooms.map((r) => (
            <button key={r.id} role="tab" aria-selected={room === r.id} className={room === r.id ? 'on' : ''} onClick={() => switchRoom(r.id)}>{r.name}</button>
          ))}
        </div>
        <a href={`mailto:${owner.email}`}>Get in touch ↗</a>
      </header>

      {p ? (
        <aside className="panel" key={p.id}>
          <span className="idx">{tool ? 'TOOL' : 'PROJECT'} 0{i + 1} / 0{list.length}{p.date ? ` — ${p.date}` : ''}</span>
          <h2>{(p.title || p.name).trim()}</h2>
          <p>{p.text}</p>
          <ul>{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          {p.process && (
            <section className="process" aria-label="Design process">
              <h3>Design process <small>in my own words, from my weekly reports</small></h3>
              <ol>
                {p.process.map(([label, quote], n) => (
                  <li key={n}>
                    <span className="step"><b>{String(n + 1).padStart(2, '0')}</b>{label}</span>
                    <blockquote>{quote}</blockquote>
                  </li>
                ))}
              </ol>
            </section>
          )}
          <div className="row sticky">
            <button onClick={() => step(-1)}>← Prev</button>
            <button onClick={() => step(1)}>Next →</button>
            <button className="ghost" onClick={close}>Close ✕</button>
          </div>
        </aside>
      ) : (
        <p className="hint">Move the mouse to look around · {HINT[room]}</p>
      )}

      <nav>
        {NAV[room].map(([k, label]) => (
          <button key={k} className={!focus && !tool && view === k ? 'on' : ''} onClick={() => goto(k)}>{label}</button>
        ))}
      </nav>
    </div>
  )
}
