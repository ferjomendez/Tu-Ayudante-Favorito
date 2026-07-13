import Icon from './Icons.jsx'

const REPO_URL = 'https://github.com/ferjomendez/Tu-Ayudante-Favorito'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:px-6">
        <p>
          <span className="text-accent">❯</span> Hecho por Fernando Méndez — Taller de
          Diseño en Ingeniería — UAI 2026
        </p>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 transition-colors hover:text-accent"
        >
          <Icon name="branch" className="h-3.5 w-3.5" />
          ver repo en GitHub
        </a>
      </div>
    </footer>
  )
}
