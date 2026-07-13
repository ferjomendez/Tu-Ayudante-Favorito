import Icon from './Icons.jsx'

const PRICING_STYLES = {
  gratis: 'bg-accent/10 text-accent',
  'licencia edu': 'bg-sky-500/10 text-sky-700 dark:text-sky-300',
  freemium: 'bg-violet-500/10 text-violet-700 dark:text-violet-300',
}

export default function ToolCard({ tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col gap-3 rounded-lg border border-line bg-surface p-5 transition-colors hover:border-accent"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors group-hover:border-accent group-hover:text-accent">
          <Icon name={tool.icon} className="h-5 w-5" />
        </span>
        <span
          className={`rounded px-2 py-0.5 font-mono text-[11px] ${PRICING_STYLES[tool.pricing] ?? PRICING_STYLES.freemium}`}
        >
          {tool.pricing}
        </span>
      </div>
      <h4 className="font-mono text-[15px] font-medium group-hover:text-accent">
        {tool.name}
      </h4>
      <p className="text-sm leading-relaxed text-muted">{tool.description}</p>
      <span className="mt-auto flex items-center gap-1.5 pt-1 font-mono text-[11px] text-muted transition-colors group-hover:text-accent">
        <Icon name="link" className="h-3.5 w-3.5" />
        abrir sitio
      </span>
    </a>
  )
}
