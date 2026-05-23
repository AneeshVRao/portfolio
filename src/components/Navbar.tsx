import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light' | 'beige'>('dark')
  const [menuActive, setMenuActive] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('theme')
        if (saved) return saved === 'dark'
      } catch (e) {
        console.warn('localStorage is disabled:', e)
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.setAttribute('data-theme', 'dark')
      try {
        localStorage.setItem('theme', 'dark')
      } catch (e) {
        console.warn('localStorage is disabled:', e)
      }
    } else {
      root.setAttribute('data-theme', 'light')
      try {
        localStorage.setItem('theme', 'light')
      } catch (e) {
        console.warn('localStorage is disabled:', e)
      }
    }
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      // Check if user scrolled down
      const isTop = window.scrollY <= 40
      setScrolled(!isTop)

      // Section theme mapping
      const sections = ['hero', 'about', 'toolkit', 'method', 'projects', 'certifications', 'faq', 'contact']
      const sectionThemes: Record<string, 'dark' | 'light' | 'beige'> = {
        hero: 'dark',
        about: 'beige',
        toolkit: 'light',
        method: 'beige',
        projects: 'light',
        certifications: 'light',
        faq: 'beige',
        contact: 'dark',
      }

      let activeTheme: 'dark' | 'light' | 'beige' = 'dark'

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          // If the section top is above 32px (midpoint of navbar) and bottom is below 32px, it is active
          if (rect.top <= 32 && rect.bottom > 32) {
            activeTheme = sectionThemes[id]
            break
          }
        }
      }
      setTheme(activeTheme)

      // Scroll progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Run initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`navbar ${scrolled || menuActive ? 'navbar--scrolled' : ''} ${scrolled || menuActive ? `navbar--theme-${theme}` : ''}`}
      aria-label="Main Navigation"
    >
      <div className="container" style={{ position: 'relative' }}>
        <a href="#hero" className="navbar__logo">AVR</a>

        <div className="navbar__actions" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft: 'auto' }}>
          {/* Mobile Theme Toggle */}
          <button 
            className="theme-toggle theme-toggle--mobile" 
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            className="navbar__burger" 
            onClick={() => setMenuActive(!menuActive)}
            aria-label="Toggle Navigation Menu"
            style={{ margin: 0 }}
          >
            <span style={{ transform: menuActive ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ opacity: menuActive ? 0 : 1 }}></span>
            <span style={{ transform: menuActive ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </button>
        </div>

        <div className={`navbar__menu ${menuActive ? 'navbar__menu--active' : ''}`}>
          <a href="#about" className="navbar__link" onClick={() => setMenuActive(false)}>About</a>
          <a href="#toolkit" className="navbar__link" onClick={() => setMenuActive(false)}>Toolkit</a>
          <a href="#projects" className="navbar__link" onClick={() => setMenuActive(false)}>Projects</a>
          <a href="#certifications" className="navbar__link" onClick={() => setMenuActive(false)}>Certifications</a>
          <a href="#faq" className="navbar__link" onClick={() => setMenuActive(false)}>FAQ</a>
          <a 
            href={`${import.meta.env.BASE_URL}resume.pdf`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="navbar__cta"
            onClick={() => setMenuActive(false)}
            style={{ marginBottom: menuActive ? '10px' : '0' }}
            aria-label="View Resume PDF (opens in a new tab)"
          >
            Resume
          </a>

          {/* Desktop Theme Toggle */}
          <button 
            className="theme-toggle theme-toggle--desktop" 
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      <div 
        className="navbar-progress-bar"
        style={{
          position: 'absolute',
          bottom: scrolled || menuActive ? '0px' : '-20px',
          left: 0,
          height: '3px',
          width: `${scrollProgress}%`,
          background: 'var(--accent)',
          transition: 'width 0.1s ease-out, bottom 0.3s ease',
          opacity: scrolled || menuActive ? 1 : 0,
        }}
      />
    </nav>

  )
}

