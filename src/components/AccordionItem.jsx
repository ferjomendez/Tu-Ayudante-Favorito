import { useId, useState } from 'react'
import Icon from './Icons.jsx'

export default function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-accent"
      >
        <span className="font-mono text-sm font-medium sm:text-[15px]">{question}</span>
        <Icon
          name="chevronDown"
          className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${open ? 'rotate-180 text-accent' : ''}`}
        />
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-8 text-sm leading-relaxed text-muted">{answer}</p>
        </div>
      </div>
    </div>
  )
}
