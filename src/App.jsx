import { Suspense, lazy, useEffect, useState } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Resources from './components/Resources.jsx'
import Tools from './components/Tools.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { scrollToSection } from './components/SectionLink.jsx'

// Lazy: el highlighter de código pesa; no debe cargar con la página principal.
const ArticleView = lazy(() => import('./components/ArticleView.jsx'))

function Home() {
  const location = useLocation()

  // Al volver desde un artículo, scrollea a la sección pedida.
  useEffect(() => {
    if (location.state?.scrollTo) {
      requestAnimationFrame(() => scrollToSection(location.state.scrollTo))
    }
  }, [location.state])

  return (
    <>
      <Hero />
      <Resources />
      <Tools />
      <FAQ />
    </>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <HashRouter>
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        <Suspense
          fallback={
            <p className="mx-auto max-w-6xl px-4 py-24 font-mono text-sm text-muted sm:px-6">
              cargando<span className="cursor-blink">_</span>
            </p>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articulo/:slug" element={<ArticleView />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </HashRouter>
  )
}
