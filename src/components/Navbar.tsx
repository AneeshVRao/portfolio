import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container">
        <a href="#hero" className="navbar__logo">AVR</a>

        <button 
          className="navbar__burger" 
          onClick={() => setMenuActive(!menuActive)}
          aria-label="Toggle Navigation Menu"
        >
          <span style={{ transform: menuActive ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: menuActive ? 0 : 1 }}></span>
          <span style={{ transform: menuActive ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>

        <div className={`navbar__menu ${menuActive ? 'navbar__menu--active' : ''}`}>
          <a href="#about" className="navbar__link" onClick={() => setMenuActive(false)}>About</a>
          <a href="#projects" className="navbar__link" onClick={() => setMenuActive(false)}>Projects</a>
          <a href="#skills" className="navbar__link" onClick={() => setMenuActive(false)}>Skills</a>
          <a href="#faq" className="navbar__link" onClick={() => setMenuActive(false)}>FAQ</a>
          <a 
            href="mailto:hello@aneeshrao.dev" 
            className="navbar__cta"
            onClick={() => setMenuActive(false)}
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  )
}
