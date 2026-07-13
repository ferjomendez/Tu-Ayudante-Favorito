import { useMemo, useState } from 'react'
import data from '../data/resources.json'
import flow from '../data/flow.json'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import ResourceCard from './ResourceCard.jsx'
import SectionHeader from './SectionHeader.jsx'

const CATEGORY_LABELS = Object.fromEntries(data.categories.map((c) => [c.id, c.label]))

export default function Resources() {
  const [category, setCategory] = useState('todos')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return data.resources.filter((r) => {
      if (category !== 'todos' && r.category !== category) return false
      if (!q) return true
      return (
        r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)
      )
    })
  }, [category, query])

  return (
    <section id="recursos" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        {/* Flujo del semestre: la única secuencia real de la página */}
        <div id="flujo" className="mb-16">
          <SectionHeader
            command="cat ./flujo-del-semestre"
            title="El flujo del proyecto"
            sub="Ocho etapas en orden. Cada categoría de recursos corresponde a una etapa del semestre."
          />
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {flow.steps.map((step, i) => (
              <Reveal key={step.title} delay={(i % 4) * 70} className="h-full">
                <li className="h-full rounded-lg border border-line bg-surface p-4">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1.5 font-mono text-sm font-medium">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <SectionHeader
          command="ls ./recursos"
          title="Recursos y materiales"
          sub="Guías, videos y referencias para cada etapa. Filtra por categoría o busca por nombre."
        />

        <Reveal className="mb-8 flex flex-col gap-4">
          <label className="relative block max-w-md">
            <span className="sr-only">Buscar recursos</span>
            <Icon
              name="search"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar recursos…"
              className="w-full rounded-lg border border-line bg-surface py-2.5 pl-9 pr-3 font-mono text-sm placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            {[{ id: 'todos', label: 'Todos' }, ...data.categories].map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                aria-pressed={category === c.id}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                  category === c.id
                    ? 'border-accent bg-accent text-accent-ink'
                    : 'border-line bg-surface text-muted hover:border-accent hover:text-accent'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <p className="font-mono text-xs text-muted" role="status">
            → {filtered.length} {filtered.length === 1 ? 'recurso' : 'recursos'}
          </p>
        </Reveal>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r, i) => (
              <Reveal key={r.id} delay={(i % 3) * 70} className="h-full">
                <ResourceCard resource={r} categoryLabel={CATEGORY_LABELS[r.category]} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-line p-10 text-center">
            <p className="font-mono text-sm text-muted">
              No hay recursos que coincidan con tu búsqueda.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setCategory('todos')
              }}
              className="mt-3 font-mono text-sm text-accent hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
