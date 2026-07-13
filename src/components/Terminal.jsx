import { useEffect, useState } from 'react'

const LINES = [
  'initializing taller_diseno_2026s1...',
  'loading recursos [████████████] done',
  'connecting sensores... OK',
  'building prototipo... en progreso',
  'status: ready to innovate',
]

const CHAR_DELAY = 26
const LINE_DELAY = 420

// La terminal mantiene su look oscuro en ambos temas: una consola es oscura.
export default function Terminal() {
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [pos, setPos] = useState(() =>
    reduceMotion ? { line: LINES.length - 1, char: LINES.at(-1).length } : { line: 0, char: 0 },
  )

  useEffect(() => {
    if (reduceMotion) return
    const { line, char } = pos
    if (line >= LINES.length) return

    let timer
    if (char < LINES[line].length) {
      timer = setTimeout(() => setPos({ line, char: char + 1 }), CHAR_DELAY)
    } else if (line < LINES.length - 1) {
      timer = setTimeout(() => setPos({ line: line + 1, char: 0 }), LINE_DELAY)
    }
    return () => clearTimeout(timer)
  }, [pos, reduceMotion])

  return (
    <div className="overflow-hidden rounded-lg border border-[#22302b] bg-[#0a100e] shadow-2xl shadow-black/30">
      <div className="flex items-center gap-2 border-b border-[#22302b] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a4a44]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a4a44]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a4a44]" />
        <span className="ml-2 font-mono text-xs text-[#71857d]">ayudante@uai:~</span>
      </div>
      <div className="min-h-[10.5rem] px-4 py-4 font-mono text-[13px] leading-7 sm:text-sm">
        {LINES.slice(0, pos.line + 1).map((full, i) => {
          const text = i < pos.line ? full : full.slice(0, pos.char)
          const isLast = i === pos.line
          const finished = pos.line === LINES.length - 1 && pos.char === full.length
          return (
            <div key={i} className="whitespace-pre-wrap break-words">
              <span className="mr-2 text-[#71857d]">&gt;</span>
              <span className={finished && isLast ? 'text-[#00e65a]' : 'text-[#b9cfc4]'}>
                {text}
              </span>
              {isLast && (
                <span className="cursor-blink ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.2em] bg-[#00e65a]" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
