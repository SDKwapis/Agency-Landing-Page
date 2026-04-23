import './Hero.css'

export default function Hero() {
  return (
    <section className="hero section" id="home" aria-label="Hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__dot" aria-hidden="true" />
            <span>3 client spots open this quarter</span>
          </div>

          <h1 className="hero__headline">
            Your website should be working<br className="hero__br" />
            <em>harder than your sales team.</em>
          </h1>

          <p className="hero__sub">
            We help small businesses close the gap between traffic and revenue —
            through sharper websites, cleaner ads, and a strategy that actually fits
            your stage of growth. No retainers you don't need. No team of 40 you'll
            never meet.
          </p>

          <div className="hero__actions">
            <a href="#book" className="btn btn--primary btn--lg">
              Book a Strategy Call
              <ArrowIcon />
            </a>
            <a href="#audit" className="btn btn--outline btn--lg">
              Take the Free Audit
            </a>
          </div>

          <p className="hero__trust">
            <LockIcon />
            No obligation · Response within 24 hours · We only take on clients we're
            confident we can help
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__photo-wrap">
            <img
              className="hero__photo"
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80"
              alt=""
              loading="eager"
              decoding="async"
            />
            <div className="hero__photo-stats">
              <div className="hero__stat-chip">
                <div className="hero__stat-chip-label">Conversion Rate</div>
                <div className="hero__stat-chip-value">4.8%</div>
                <div className="hero__stat-chip-delta">↑ 2.1x from baseline</div>
              </div>
              <div className="hero__stat-chip">
                <div className="hero__stat-chip-label">Cost Per Lead</div>
                <div className="hero__stat-chip-value">$18</div>
                <div className="hero__stat-chip-delta">↓ 54% in 6 weeks</div>
              </div>
              <div className="hero__stat-chip">
                <div className="hero__stat-chip-label">Launch Time</div>
                <div className="hero__stat-chip-value">5 days</div>
                <div className="hero__stat-chip-delta">↑ not 5 months</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__logos" aria-label="Client industries served">
        <span className="hero__logos-label">Small businesses we've worked with</span>
        <div className="hero__logos-row">
          {['Wellness & Med Spa', 'Home Services', 'Legal & Consulting', 'Restaurants & Food', 'E-commerce', 'Real Estate'].map(name => (
            <span key={name} className="hero__logo-tag">{name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{flexShrink:0}}>
      <rect x="3" y="7" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
