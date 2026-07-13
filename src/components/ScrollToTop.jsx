import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Volver arriba"
      className={`fixed bottom-5 right-5 z-40 rounded-lg border border-line bg-surface p-2.5 text-muted shadow-lg transition-all hover:border-accent hover:text-accent ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <Icon name="arrowUp" className="h-4 w-4" />
    </button>
  )
}
