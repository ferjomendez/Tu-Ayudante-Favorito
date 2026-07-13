import Icon from './Icons.jsx'

const TYPE_META = {
  guia: { icon: 'guia', label: 'guía escrita' },
  video: { icon: 'video', label: 'video' },
  link: { icon: 'link', label: 'link externo' },
  descarga: { icon: 'descarga', label: 'descargable' },
}

const CATEGORY_STYLES = {
  problematica: 'bg-teal-500/10 text-teal-700 dark:text-teal-300',
  electronica: 'bg-amber-500/10 text-amber-700 dark:text-amber-300',
  ia: 'bg-violet-500/10 text-violet-700 dark:text-violet-300',
  modelado3d: 'bg-sky-500/10 text-sky-700 dark:text-sky-300',
  dashboard: 'bg-rose-500/10 text-rose-700 dark:text-rose-300',
  documentacion: 'bg-slate-500/10 text-slate-600 dark:text-slate-300',
}

const LEVEL_META = {
  basico: { label: 'básico', dot: 'bg-emerald-500' },
  intermedio: { label: 'intermedio', dot: 'bg-amber-500' },
  avanzado: { label: 'avanzado', dot: 'bg-red-500' },
}

export default function ResourceCard({ resource, categoryLabel }) {
  const type = TYPE_META[resource.type] ?? TYPE_META.guia
  const level = LEVEL_META[resource.level] ?? LEVEL_META.basico

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col gap-3 rounded-lg border border-line bg-surface p-5 transition-colors hover:border-accent"
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={`rounded px-2 py-0.5 font-mono text-[11px] ${CATEGORY_STYLES[resource.category] ?? CATEGORY_STYLES.documentacion}`}
        >
          {categoryLabel}
        </span>
        <span className="flex items-center gap-1.5 text-muted" title={type.label}>
          <Icon name={type.icon} className="h-4 w-4" />
          <span className="font-mono text-[11px]">{type.label}</span>
        </span>
      </div>

      <h3 className="font-mono text-[15px] font-medium leading-snug group-hover:text-accent">
        {resource.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{resource.description}</p>

      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="flex items-center gap-2 font-mono text-[11px] text-muted">
          <span className={`h-1.5 w-1.5 rounded-full ${level.dot}`} />
          {level.label}
        </span>
        <Icon
          name="arrowRight"
          className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
        />
      </div>
    </a>
  )
}
