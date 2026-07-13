import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import cpp from 'react-syntax-highlighter/dist/esm/languages/prism/cpp'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import data from '../data/resources.json'

// Solo los lenguajes que aparecen en los artículos, para no cargar Prism completo.
SyntaxHighlighter.registerLanguage('cpp', cpp)
SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('json', json)

// Cada artículo es un .md en src/data/articles/; se cargan bajo demanda.
const articles = import.meta.glob('../data/articles/*.md', {
  query: '?raw',
  import: 'default',
})

const CATEGORY_LABELS = Object.fromEntries(data.categories.map((c) => [c.id, c.label]))

const LEVEL_LABELS = { basico: 'básico', intermedio: 'intermedio', avanzado: 'avanzado' }

function CodeBlock({ className, children }) {
  const match = /language-(\w+)/.exec(className || '')
  const text = String(children).replace(/\n$/, '')

  // Bloques de código (con lenguaje o multilínea) van con highlighting; el
  // resto es código inline.
  if (match || text.includes('\n')) {
    return (
      <SyntaxHighlighter
        language={match?.[1]}
        style={oneDark}
        customStyle={{
          background: '#0a100e',
          border: '1px solid #22302b',
          borderRadius: '0.5rem',
          fontSize: '13px',
          margin: '1.25rem 0',
        }}
        codeTagProps={{ style: { fontFamily: '"JetBrains Mono", monospace' } }}
      >
        {text}
      </SyntaxHighlighter>
    )
  }
  return <code className="inline-code">{children}</code>
}

export default function ArticleView() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [content, setContent] = useState(null)
  const [failed, setFailed] = useState(false)

  const meta = data.resources.find((r) => r.type === 'articulo' && r.slug === slug)
  const loader = articles[`../data/articles/${slug}.md`]

  useEffect(() => {
    window.scrollTo(0, 0)
    setContent(null)
    setFailed(false)
    if (!loader) {
      setFailed(true)
      return
    }
    let cancelled = false
    loader()
      .then((md) => !cancelled && setContent(md))
      .catch(() => !cancelled && setFailed(true))
    return () => {
      cancelled = true
    }
  }, [slug, loader])

  useEffect(() => {
    if (meta) document.title = `${meta.title} — Taller de Diseño en Ingeniería`
    return () => {
      document.title = 'Taller de Diseño en Ingeniería — Recursos'
    }
  }, [meta])

  const goBack = () => navigate('/', { state: { scrollTo: 'recursos' } })

  if (failed || !meta) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <p className="font-mono text-sm text-muted">
          <span className="text-accent">❯</span> cat ./articulos/{slug}.md
        </p>
        <p className="mt-4 font-mono text-muted">
          Artículo no encontrado. Puede que el link esté desactualizado.
        </p>
        <button
          type="button"
          onClick={goBack}
          className="mt-6 font-mono text-sm text-accent hover:underline"
        >
          ← Volver a recursos
        </button>
      </section>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <button
        type="button"
        onClick={goBack}
        className="mb-8 flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
      >
        <span aria-hidden="true">←</span> Volver a recursos
      </button>

      <p className="mb-3 font-mono text-sm text-accent">
        <span aria-hidden="true">❯ </span>cat ./articulos/{slug}.md
      </p>
      <h1 className="font-mono text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
        {meta.title}
      </h1>
      <div className="mt-4 flex items-center gap-3 font-mono text-xs text-muted">
        <span>{CATEGORY_LABELS[meta.category]}</span>
        <span aria-hidden="true">·</span>
        <span>{LEVEL_LABELS[meta.level]}</span>
      </div>

      <div className="article-body mt-10">
        {content === null ? (
          <p className="font-mono text-sm text-muted">
            cargando<span className="cursor-blink">_</span>
          </p>
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code: CodeBlock }}>
            {content}
          </ReactMarkdown>
        )}
      </div>

      <div className="mt-14 border-t border-line pt-6">
        <button
          type="button"
          onClick={goBack}
          className="flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
        >
          <span aria-hidden="true">←</span> Volver a recursos
        </button>
      </div>
    </article>
  )
}
