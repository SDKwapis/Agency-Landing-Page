import { useState, useEffect } from 'react'
import './StickyCTA.css'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`sticky-cta ${visible ? 'sticky-cta--visible' : ''}`}
      role="complementary"
      aria-label="Quick booking button"
    >
      <a href="#book" className="btn btn--primary sticky-cta__btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.75"/>
          <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        </svg>
        Book a Call
      </a>
    </div>
  )
}
