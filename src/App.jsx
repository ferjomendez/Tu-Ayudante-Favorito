import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Resources from './components/Resources.jsx'
import Tools from './components/Tools.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        <Hero />
        <Resources />
        <Tools />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
