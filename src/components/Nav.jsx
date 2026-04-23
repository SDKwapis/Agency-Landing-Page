import { useState, useEffect } from 'react'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#proof' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`} role="banner">
      <div className="container nav__inner">
        <a href="#" className="nav__logo" aria-label="Cairn Studio home">
          <span className="nav__logo-mark" aria-hidden="true">◆</span>
          <span>Cairn Studio</span>
        </a>

        <nav className="nav__links" aria-label="Main navigation">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#book" className="btn btn--primary btn--sm nav__cta">
          Book a Call
        </a>

        <button
          className="nav__hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="nav__mobile" role="dialog" aria-label="Mobile menu">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="nav__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#book" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
            Book a Call
          </a>
        </div>
      )}
    </header>
  )
}
