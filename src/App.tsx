import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import PageCurtain from './components/PageCurtain'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalToolkit from './components/TechnicalToolkit'
import Experience from './components/Experience'
import Method from './components/Method'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import FAQ from './components/FAQ'
import ContactFooter from './components/ContactFooter'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide curtain after load event, or fallback to a timeout of 1.4s
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 500)
    }

    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), 1200)
    } else {
      window.addEventListener('load', handleLoad)
      // Fallback timeout
      const timeout = setTimeout(() => setIsLoading(false), 1500)
      return () => {
        window.removeEventListener('load', handleLoad)
        clearTimeout(timeout)
      }
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

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PageCurtain />}
      </AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechnicalToolkit />
        <Experience />
        <Method />
        <Projects />
        <Certifications />
        <FAQ />
      </main>
      <ContactFooter />
    </>
  )
}

export default App


