import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionLink from './SectionLink.jsx'
import Terminal from './Terminal.jsx'

const QUICK_LINKS = [
  {
    to: 'flujo',
    icon: 'branch',
    label: 'flujo del proyecto',
    text: 'Las 8 etapas del semestre, del problema al DemoDay',
  },
  {
    to: 'recursos',
    icon: 'guia',
    label: 'recursos',
    text: 'Guías, artículos y videos organizados por etapa del proyecto',
  },
  {
    to: 'herramientas',
    icon: 'chip',
    label: 'herramientas',
    text: 'Software para electrónica, 3D, dashboards y más',
  },
  {
    to: 'faq',
    icon: 'terminal',
    label: 'faq + tips',
    text: 'Respuestas a las dudas más comunes del taller',
  },
]

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 md:pt-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-muted">
            ~/uai <span className="text-accent">·</span> Sección 2{' '}
            <span className="text-accent">·</span> Semestre 2026/1
          </p>
          <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Tu Ayudante{' '}
            <span className="text-accent">Favorito</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted">
            Soy Fernando Méndez, estudiante de Ingeniería Civil Informática e Industrial, y
            ayudante del Taller de Diseño en Ingeniería. Esta página tiene todo lo
            que necesitas para tu proyecto semestral: guías, herramientas, tips y
            respuestas a las dudas más comunes.
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <p className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-0.5 font-mono text-accent">→</span>
              Siempre intentaré estar presente en todas las clases.
            </p>
            <p className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-0.5 font-mono text-accent">→</span>
              Pueden contactarme cuando quieran, o juntarnos a trabajar en su proyecto.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <Terminal />
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {QUICK_LINKS.map((card, i) => (
          <Reveal key={card.to} delay={i * 80} className="h-full">
            <SectionLink
              to={card.to}
              className="group flex h-full flex-col gap-3 rounded-lg border border-line bg-surface p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between text-muted">
                <Icon name={card.icon} className="h-5 w-5" />
                <Icon
                  name="arrowRight"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-accent"
                />
              </div>
              <h2 className="font-mono text-sm font-medium group-hover:text-accent">
                ./{card.label}
              </h2>
              <p className="text-sm text-muted">{card.text}</p>
            </SectionLink>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
