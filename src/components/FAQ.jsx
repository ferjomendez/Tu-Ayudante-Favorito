import data from '../data/faq.json'
import AccordionItem from './AccordionItem.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import Tips from './Tips.jsx'

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeader
          command="man taller"
          title="Preguntas frecuentes"
          sub="Las dudas que aparecen todos los semestres, respondidas de una vez."
        />

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
          {data.groups.map((group) => (
            <Reveal key={group.id}>
              <h3 className="mb-2 font-mono text-sm text-muted">
                <span className="text-accent"># </span>
                {group.label}
              </h3>
              <div className="border-t border-line">
                {group.items.map((item) => (
                  <AccordionItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Tips />
      </div>
    </section>
  )
}
