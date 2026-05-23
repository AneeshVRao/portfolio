import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import PageCurtain from './components/PageCurtain'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalToolkit from './components/TechnicalToolkit'
import Method from './components/Method'
import Projects from './components/Projects'
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

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PageCurtain />}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <About />
      <TechnicalToolkit />
      <Method />
      <Projects />
      <FAQ />
      <ContactFooter />
    </>
  )
}

export default App


