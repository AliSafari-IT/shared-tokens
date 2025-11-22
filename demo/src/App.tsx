import React, { useEffect, useState } from 'react'

function ThemeToggle({ theme, setTheme }: { theme: string; setTheme: (t: string) => void }) {
  return (
    <div className="theme-toggle">
      <label className="toggle">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
        <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
      </label>
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState<string>(() => {
    try {
      return (localStorage.getItem('theme') as string) || 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  return (
    <div className="demo-root">
      <header className="demo-header">
        <div className="header-left">
          <h1>shared-tokens — Demo</h1>
          <p className="subtitle">Examples for light and dark themes using CSS tokens.</p>
        </div>
        <div className="header-right">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </header>

      <main className="demo-main">
        <section className="panel">
          <h2>Buttons</h2>
          <div className="controls">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-outline">Outline</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-danger">Danger</button>
          </div>
        </section>

        <section className="panel">
          <h2>Cards / Surfaces</h2>
          <div className="cards">
            <div className="card demo-card">
              <h3>Default surface</h3>
              <p>Background uses <code>--color-surface</code> with border <code>--color-border</code>.</p>
            </div>

            <div className="card demo-card shadow">
              <h3>Elevated</h3>
              <p>Shows <code>--shadow-md</code> and radius token usage.</p>
            </div>
          </div>
        </section>

        <section className="panel">
          <h2>Typography & Spacing</h2>
          <p className="lead">This paragraph demonstrates the tokenized typography and spacing scale.</p>
          <div className="spacers">
            <div className="spacer r">
              <span>Radius small</span>
            </div>
            <div className="spacer">
              <span>Radius medium</span>
            </div>
            <div className="spacer large">
              <span>Radius large</span>
            </div>
          </div>
        </section>

        <section className="panel">
          <h2>Form controls</h2>
          <label className="field">
            <span>Email</span>
            <input placeholder="you@example.com" />
          </label>
          <label className="field">
            <span>Message</span>
            <textarea placeholder="Hello" />
          </label>
        </section>
      </main>
    </div>
  )
}
