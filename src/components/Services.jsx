import './Services.css'

const SERVICES = [
  {
    name: 'Website Intensive',
    emoji: '⚡',
    photo: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=700&h=220&q=80',
    photoAlt: 'Designer working on a website layout',
    description: "A focused, collaborative 5-day sprint to launch a fast, conversion-optimized website you're proud to send leads to. Strategy, design, copywriting, and launch — all in one week.",
    bestFor: 'Businesses with an outdated or underperforming website',
    timeline: '5 business days',
    price: 'Starting at $2,800',
    features: [
      'Custom strategy session',
      'Professional design + copywriting',
      'Mobile-first build',
      'SEO foundations included',
      'Analytics setup',
      '30-day post-launch support',
    ],
    cta: 'Book a Strategy Call',
    href: '#book',
    highlight: true,
  },
  {
    name: 'Lead Generation Starter',
    emoji: '📥',
    photo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&h=220&q=80',
    photoAlt: 'Analytics dashboard showing conversion data',
    description: 'A focused audit and fix of your lead funnel: landing page, form flow, offer clarity, and conversion tracking. Designed to find and close the gap between visits and inquiries.',
    bestFor: 'Businesses with traffic but few or low-quality leads',
    timeline: '2–3 weeks',
    price: 'Starting at $1,500',
    features: [
      'Full funnel conversion audit',
      'Landing page rebuild or refresh',
      'Offer and CTA rewrite',
      'Lead tracking setup',
      'A/B test setup',
    ],
    cta: 'Get Your Funnel Audited',
    href: '#book',
    highlight: false,
  },
  {
    name: 'Ads Cleanup Sprint',
    emoji: '🎯',
    photo: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?auto=format&fit=crop&w=700&h=220&q=80',
    photoAlt: 'Person reviewing ad performance on a phone',
    description: "A rapid audit and rebuild of your underperforming ad campaigns. We diagnose what's wrong, fix targeting and creative structure, and reset your account for a better baseline ROAS.",
    bestFor: 'Businesses spending on ads with poor ROI',
    timeline: '1 week',
    price: 'Starting at $997',
    features: [
      'Full account audit (Google or Meta)',
      'Audience and targeting rebuild',
      'Ad copy and creative review',
      'Budget reallocation strategy',
      'Tracking and attribution fix',
    ],
    cta: 'Get a Free Diagnostic',
    href: '#book',
    highlight: false,
  },
  {
    name: 'Monthly Growth Partner',
    emoji: '🤝',
    photo: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&h=220&q=80',
    photoAlt: 'Small team collaborating in a bright office',
    description: 'Ongoing strategy, content, ads, and reporting — without hiring a full-time team. You get two dedicated specialists who know your business and show up every month with a clear plan.',
    bestFor: 'Businesses ready for consistent growth without the overhead',
    timeline: 'Ongoing · Cancel anytime',
    price: 'Starting at $1,200/mo',
    features: [
      'Monthly strategy and planning call',
      'Content calendar and copy',
      'Paid ad management',
      'Monthly reporting + insights',
      'Priority response time',
      'Quarterly growth review',
    ],
    cta: 'Book a Strategy Session',
    href: '#book',
    highlight: false,
  },
]

export default function Services() {
  return (
    <section className="services section section--alt" id="services" aria-label="Our services">
      <div className="container">
        <span className="section-label">What we do</span>
        <div className="services__header">
          <h2 className="section-title">Focused services. Predictable results.</h2>
          <p className="section-subtitle">
            We don't do everything. We do a few things exceptionally well. Each offer is designed
            to solve a specific, common problem for small businesses — clearly scoped, clearly priced.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map(s => (
            <article
              key={s.name}
              className={`services__card ${s.highlight ? 'services__card--highlight' : ''}`}
              aria-label={s.name}
            >
              {s.highlight && (
                <div className="services__card-badge">Most popular</div>
              )}

              {s.photo && (
                <div className="services__card-img-wrap">
                  <img
                    src={s.photo}
                    alt={s.photoAlt}
                    className="services__card-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              <div className="services__card-top">
                <span className="services__card-emoji" aria-hidden="true">{s.emoji}</span>
                <h3 className="services__card-name">{s.name}</h3>
                <p className="services__card-desc">{s.description}</p>
              </div>

              <div className="services__card-meta">
                <div className="services__meta-row">
                  <span className="services__meta-label">Best for</span>
                  <span className="services__meta-value">{s.bestFor}</span>
                </div>
                <div className="services__meta-row">
                  <span className="services__meta-label">Timeline</span>
                  <span className="services__meta-value">{s.timeline}</span>
                </div>
                <div className="services__meta-row">
                  <span className="services__meta-label">Investment</span>
                  <span className="services__meta-value services__meta-price">{s.price}</span>
                </div>
              </div>

              <ul className="services__features" aria-label="What's included">
                {s.features.map(f => (
                  <li key={f} className="services__feature">
                    <span className="services__feature-check" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href={s.href} className={`btn ${s.highlight ? 'btn--primary' : 'btn--outline'} services__card-cta`}>
                {s.cta}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </article>
          ))}
        </div>

        <p className="services__footnote">
          Not sure which one fits? The free audit above will point you in the right direction — or
          just <a href="#book" className="services__footnote-link">book a 20-minute intro call</a> and we'll figure it out together.
        </p>
      </div>
    </section>
  )
}
