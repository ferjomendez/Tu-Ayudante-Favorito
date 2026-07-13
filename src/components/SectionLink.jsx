import { useLocation, useNavigate } from 'react-router-dom'

export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
}

// Link a una sección de la página principal. Con HashRouter los anchors
// nativos (#recursos) se interpretarían como rutas, así que el scroll es
// programático; desde una vista de artículo primero navega a "/".
export default function SectionLink({ to, className, onClick, children }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = (e) => {
    e.preventDefault()
    onClick?.()
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: to } })
    } else {
      scrollToSection(to)
    }
  }

  return (
    <a href="#/" onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
