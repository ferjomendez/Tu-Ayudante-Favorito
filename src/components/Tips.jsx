import data from '../data/tips.json'
import Reveal from './Reveal.jsx'

export default function Tips() {
  return (
    <div className="mt-16">
      <Reveal>
        <h3 className="mb-6 font-mono text-sm text-muted">
          <span className="text-accent"># </span>tips del ayudante
        </h3>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.tips.map((tip, i) => (
          <Reveal key={tip.title} delay={(i % 3) * 70} className="h-full">
            <div className="h-full rounded-r-lg border-l-2 border-accent bg-surface p-5">
              <h4 className="font-mono text-sm font-medium text-accent">{tip.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{tip.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
