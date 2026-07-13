import Reveal from './Reveal.jsx'

// Encabezado de sección con eyebrow estilo comando de shell.
export default function SectionHeader({ command, title, sub }) {
  return (
    <Reveal className="mb-10">
      <p className="mb-3 font-mono text-sm text-accent">
        <span aria-hidden="true">❯ </span>
        {command}
      </p>
      <h2 className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {sub && <p className="mt-3 max-w-2xl text-muted">{sub}</p>}
    </Reveal>
  )
}
