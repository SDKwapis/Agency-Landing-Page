import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo" aria-label="Cairn Studio home">
            <span className="footer__logo-mark" aria-hidden="true">◆</span>
            <span>Cairn Studio</span>
          </a>
          <p className="footer__tagline">
            Lean marketing for small businesses that want to grow — without the agency overhead.
          </p>
          <p className="footer__location">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1.5A4.5 4.5 0 0 0 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6A4.5 4.5 0 0 0 8 1.5z" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Remote-first · Available across North America
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <div className="footer__nav-col">
            <div className="footer__nav-label">Services</div>
            <a href="#services" className="footer__nav-link">Website Intensive</a>
            <a href="#services" className="footer__nav-link">Lead Generation Starter</a>
            <a href="#services" className="footer__nav-link">Ads Cleanup Sprint</a>
            <a href="#services" className="footer__nav-link">Monthly Growth Partner</a>
          </div>
          <div className="footer__nav-col">
            <div className="footer__nav-label">Company</div>
            <a href="#proof" className="footer__nav-link">Results</a>
            <a href="#process" className="footer__nav-link">Process</a>
            <a href="#faq" className="footer__nav-link">FAQ</a>
            <a href="#book" className="footer__nav-link">Book a Call</a>
          </div>
          <div className="footer__nav-col">
            <div className="footer__nav-label">Get in touch</div>
            <a href="mailto:hello@cairnstudio.co" className="footer__nav-link">hello@cairnstudio.co</a>
            <a href="#audit" className="footer__nav-link">Free Marketing Audit</a>
          </div>
        </nav>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} Cairn Studio LLC. All rights reserved.</span>
          <span>Built for small businesses that deserve better marketing.</span>
        </div>
      </div>
    </footer>
  )
}
