import { useState } from 'react'
import './ServiceSelector.css'

const PATHS = [
  {
    id: 'leads',
    icon: '📈',
    title: 'I need more leads',
    tagline: 'Traffic exists but not converting',
    recommendation: {
      heading: 'Your funnel needs a tune-up, not a rebuild.',
      body: "Most businesses in this position aren't missing leads because of brand awareness — they're losing them at the website. We typically start with a conversion audit to find exactly where visitors are dropping off, then move into a focused website sprint or landing page build.",
      service: 'Lead Generation Starter',
      timeline: '2–3 weeks to first results',
      nextStep: "Book a 30-min discovery call — we'll tell you where your funnel is leaking before you spend another dollar.",
      cta: 'Get My Funnel Audit',
    },
  },
  {
    id: 'website',
    icon: '🖥️',
    title: 'I need a better website',
    tagline: 'Current site is slow, old, or embarrassing',
    recommendation: {
      heading: 'A new website in days, not months.',
      body: "You don't need a 6-month agency engagement. Our Website Intensive is a focused, collaborative sprint: strategy on day one, design on day two, build through day four, and launch by day five. The result is a fast, conversion-focused site you're proud to send people to.",
      service: 'Website Intensive',
      timeline: '5 business days start to launch',
      nextStep: 'Book a strategy call to confirm your site is a fit for the intensive format. Most are.',
      cta: 'Book a Strategy Call',
    },
  },
  {
    id: 'ads',
    icon: '🎯',
    title: 'I need help with ads',
    tagline: 'Running ads but seeing poor ROI',
    recommendation: {
      heading: "Bad ads or bad destination? We'll find out fast.",
      body: "Most underperforming ad accounts have 2–3 specific issues — wrong audience, weak offer, or a landing page that doesn't convert. Our Ads Cleanup Sprint audits your current setup, fixes the structural problems, and resets your targeting in under a week. No long-term retainer required to start.",
      service: 'Ads Cleanup Sprint',
      timeline: '1 week audit + fix',
      nextStep: "Share your ad account access and we'll run a free 15-minute diagnostic before you commit.",
      cta: 'Get a Free Ad Diagnostic',
    },
  },
  {
    id: 'partner',
    icon: '🤝',
    title: 'I need a full marketing partner',
    tagline: 'No in-house team, need ongoing strategy',
    recommendation: {
      heading: 'A marketing team without the full-time overhead.',
      body: "If you're past the one-fix stage and need consistent strategy, content, ads, and reporting — our Monthly Growth Partner retainer gives you a dedicated team of two who know your business cold. We handle the marketing calendar so you can stay focused on delivery.",
      service: 'Monthly Growth Partner',
      timeline: 'Ongoing, cancel anytime',
      nextStep: "Let's do a 30-minute strategy session to map your current gaps and see if the retainer is the right fit.",
      cta: 'Book a Strategy Session',
    },
  },
]

export default function ServiceSelector() {
  const [selected, setSelected] = useState(null)

  const current = PATHS.find(p => p.id === selected)

  return (
    <section className="selector section section--alt" id="selector" aria-label="Find your path">
      <div className="container">
        <span className="section-label">Where to start</span>
        <h2 className="section-title">What's the biggest thing holding you back?</h2>
        <p className="section-subtitle">
          Pick the option that sounds most like you. We'll show you exactly what we'd
          recommend — no form, no email required.
        </p>

        <div className="selector__cards" role="listbox" aria-label="Select your situation">
          {PATHS.map(path => (
            <button
              key={path.id}
              className={`selector__card ${selected === path.id ? 'selector__card--active' : ''}`}
              onClick={() => setSelected(selected === path.id ? null : path.id)}
              role="option"
              aria-selected={selected === path.id}
            >
              <span className="selector__card-icon" aria-hidden="true">{path.icon}</span>
              <span className="selector__card-title">{path.title}</span>
              <span className="selector__card-tagline">{path.tagline}</span>
              {selected === path.id && (
                <span className="selector__card-check" aria-hidden="true">✓</span>
              )}
            </button>
          ))}
        </div>

        {current && (
          <div className="selector__result" role="region" aria-live="polite" aria-label="Recommendation">
            <div className="selector__result-inner">
              <div className="selector__result-content">
                <div className="selector__result-badge">Recommended for you</div>
                <h3 className="selector__result-heading">{current.recommendation.heading}</h3>
                <p className="selector__result-body">{current.recommendation.body}</p>

                <div className="selector__result-meta">
                  <div className="selector__meta-item">
                    <span className="selector__meta-label">Service</span>
                    <span className="selector__meta-value">{current.recommendation.service}</span>
                  </div>
                  <div className="selector__meta-item">
                    <span className="selector__meta-label">Timeline</span>
                    <span className="selector__meta-value">{current.recommendation.timeline}</span>
                  </div>
                </div>

                <p className="selector__result-nextstep">
                  <strong>Next step:</strong> {current.recommendation.nextStep}
                </p>

                <div className="selector__result-actions">
                  <a href="#book" className="btn btn--primary">
                    {current.recommendation.cta}
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#services" className="btn btn--ghost">
                    See full service details
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
