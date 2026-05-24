import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import PageCurtain from './components/PageCurtain'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalToolkit from './components/TechnicalToolkit'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import FAQ from './components/FAQ'
import ContactFooter from './components/ContactFooter'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const [cursor, setCursor] = useState({ x: -999, y: -999 })
  const [isOnDark, setIsOnDark] = useState(false)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined
    let handleLoadTimeoutId: ReturnType<typeof setTimeout> | undefined

    // Hide curtain after load event, or fallback to a timeout of 1.4s
    const handleLoad = () => {
      handleLoadTimeoutId = setTimeout(() => setIsLoading(false), 500)
    }

    if (document.readyState === 'complete') {
      timeoutId = setTimeout(() => setIsLoading(false), 1200)
    } else {
      window.addEventListener('load', handleLoad)
      // Fallback timeout
      timeoutId = setTimeout(() => setIsLoading(false), 1500)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
      if (timeoutId) clearTimeout(timeoutId)
      if (handleLoadTimeoutId) clearTimeout(handleLoadTimeoutId)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const hero = document.getElementById('hero')
      const contact = document.getElementById('contact')
      if (hero) {
        const rect = hero.getBoundingClientRect()
        hero.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
        hero.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
      }
      if (contact) {
        const rect = contact.getBoundingClientRect()
        contact.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
        contact.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
      }
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY })
      const el = document.elementFromPoint(e.clientX, e.clientY)
      setIsOnDark(!!el?.closest('.dark-section, .hero, .footer-body'))
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <a href="#about" className="skip-link">Skip to main content</a>
      {isOnDark && (
        <div
          className="cursor-glow"
          style={{ left: cursor.x, top: cursor.y }}
          aria-hidden="true"
        />
      )}
      <AnimatePresence mode="wait">
        {isLoading && <PageCurtain />}
      </AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechnicalToolkit />
        <Experience />
        <Projects />
        <Certifications />
        <FAQ />
      </main>
      <ContactFooter />
    </>
  )
}

export default App


