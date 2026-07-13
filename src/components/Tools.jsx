import data from '../data/tools.json'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import ToolCard from './ToolCard.jsx'

export default function Tools() {
  return (
    <section id="herramientas" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeader
          command="ls ./herramientas"
          title="Herramientas"
          sub="El software que vas a usar durante el semestre. Todo es gratis o tiene licencia educativa."
        />

        <div className="space-y-12">
          {data.categories.map((group) => {
            const tools = data.tools.filter((t) => t.category === group.id)
            return (
              <div key={group.id}>
                <Reveal>
                  <h3 className="mb-4 font-mono text-sm text-muted">
                    <span className="text-accent"># </span>
                    {group.label}
                  </h3>
                </Reveal>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {tools.map((tool, i) => (
                    <Reveal key={tool.id} delay={(i % 4) * 70} className="h-full">
                      <ToolCard tool={tool} />
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
