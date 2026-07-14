import { useState } from 'react'
import Icon from './Icons.jsx'
import SectionLink from './SectionLink.jsx'

const LINKS = [
  { to: 'inicio', label: 'inicio' },
  { to: 'recursos', label: 'recursos' },
  { to: 'herramientas', label: 'herramientas' },
  { to: 'faq', label: 'faq' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <SectionLink to="inicio" className="font-mono text-sm font-medium">
          <span className="text-accent">❯</span> fer
          <span className="text-muted">.ayudante</span>
        </SectionLink>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <li key={l.to}>
                <SectionLink
                  to={l.to}
                  className="rounded px-3 py-2 font-mono text-sm text-muted transition-colors hover:text-accent"
                >
                  ./{l.label}
                </SectionLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            className="ml-2 rounded border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="rounded border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            <Icon name={open ? 'x' : 'menu'} className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line px-4 pb-4 pt-2 md:hidden">
          {LINKS.map((l) => (
            <li key={l.to}>
              <SectionLink
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2.5 font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                ./{l.label}
              </SectionLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
