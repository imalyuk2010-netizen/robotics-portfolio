import { owner, projects, tools } from './config'

const NAV = [['overview', 'Studio'], ['gallery', 'Work'], ['bench', 'Bench'], ['about', 'About']]

export default function UI({ view, focus, tool, goto, close, step }) {
  const list = tool ? tools : projects
  const p = list.find((q) => q.id === (tool || focus))
  const i = p ? list.indexOf(p) : 0
  return (
    <div className="ui">
      <header>
        <span className="logo">{owner.name}<i>®</i></span>
        <a href={`mailto:${owner.email}`}>Get in touch ↗</a>
      </header>

      {p ? (
        <aside className="panel" key={p.id}>
          <span className="idx">{tool ? 'TOOL' : 'PROJECT'} 0{i + 1} / 0{list.length}{p.date ? ` — ${p.date}` : ''}</span>
          <h2>{(p.title || p.name).trim()}</h2>
          <p>{p.text}</p>
          <ul>{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          <div className="row">
            <button onClick={() => step(-1)}>← Prev</button>
            <button onClick={() => step(1)}>Next →</button>
            <button className="ghost" onClick={close}>Close ✕</button>
          </div>
        </aside>
      ) : (
        <p className="hint">Move the mouse to look around · click a frame or a tool on the bench</p>
      )}

      <nav>
        {NAV.map(([k, label]) => (
          <button key={k} className={!focus && !tool && view === k ? 'on' : ''} onClick={() => goto(k)}>{label}</button>
        ))}
      </nav>
    </div>
  )
}
