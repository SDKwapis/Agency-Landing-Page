import './Proof.css'

const CASES = [
  {
    industry: 'Home Services',
    type: 'Website Intensive + Lead Gen',
    photo: '/images/proof-home.svg',
    photoAlt: 'Home services technician at work',
    metric: '3.2x',
    metricLabel: 'More qualified leads per month',
    stat2: { value: '11 days', label: 'From kickoff to live site' },
    stat3: { value: '$22', label: 'Cost per lead (down from $64)' },
    story: 'A local HVAC company had a 7-year-old website getting traffic but no calls. We rebuilt it in a week, rewrote the homepage around their strongest service, and added a clear booking flow. Their call volume tripled in 30 days.',
    quote: `"We went from 8 leads a month to 27 — and they're actually converting."`,
    author: 'Owner, HVAC company · Denver, CO',
  },
  {
    industry: 'Wellness & Med Spa',
    type: 'Ads Cleanup Sprint',
    photo: '/images/proof-wellness.svg',
    photoAlt: 'Wellness spa interior',
    metric: '54%',
    metricLabel: 'Reduction in cost per booking',
    stat2: { value: '4.8%', label: 'Booking conversion rate (up from 1.9%)' },
    stat3: { value: '6 weeks', label: 'To full account restructure and results' },
    story: 'A med spa owner was spending $3,000/month on Meta ads with almost nothing to show. The issue was targeting cold audiences with a high-friction booking page. We restructured the campaign, rebuilt the landing page, and halved their cost per booking.',
    quote: `"I finally understand where my ad money is going — and it's working."`,
    author: 'Owner, med spa · Austin, TX',
  },
  {
    industry: 'Legal Consulting',
    type: 'Monthly Growth Partner',
    photo: '/images/proof-legal.svg',
    photoAlt: 'Legal office with books and desk',
    metric: '2.1x',
    metricLabel: 'Revenue growth in 4 months',
    stat2: { value: '38%', label: 'Increase in consultation bookings' },
    stat3: { value: '$0', label: 'Ad spend — all from organic and referrals' },
    story: 'A solo immigration attorney had no system for consistent outreach or content. We built a simple content and referral engine, optimized her Google profile, and redesigned her intake form. Consultations went from 12/month to 24 without paid ads.',
    quote: '"It feels like I have a real marketing team for the first time."',
    author: 'Attorney, immigration law · Miami, FL',
  },
]

export default function Proof() {
  return (
    <section className="proof section" id="proof" aria-label="Client results">
      <div className="container">
        <span className="section-label">Results</span>
        <h2 className="section-title">Real numbers from real clients.</h2>
        <p className="section-subtitle">
          We don't work with dozens of clients at once. We work with a few, deeply.
          These are the kinds of results that come from focused work.
        </p>

        <div className="proof__grid">
          {CASES.map((c, i) => (
            <article key={i} className="proof__card" aria-label={`Case study: ${c.industry}`}>
              <div className="proof__card-img-wrap">
                <img
                  src={c.photo}
                  alt={c.photoAlt}
                  className="proof__card-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="proof__card-top">
                <div className="proof__tags">
                  <span className="proof__industry">{c.industry}</span>
                  <span className="proof__type">{c.type}</span>
                </div>
                <div className="proof__big-metric">
                  <span className="proof__metric-value">{c.metric}</span>
                  <span className="proof__metric-label">{c.metricLabel}</span>
                </div>
              </div>

              <div className="proof__stats">
                <div className="proof__stat">
                  <span className="proof__stat-value">{c.stat2.value}</span>
                  <span className="proof__stat-label">{c.stat2.label}</span>
                </div>
                <div className="proof__stat">
                  <span className="proof__stat-value">{c.stat3.value}</span>
                  <span className="proof__stat-label">{c.stat3.label}</span>
                </div>
              </div>

              <p className="proof__story">{c.story}</p>

              <blockquote className="proof__quote">
                <p>{c.quote}</p>
                <footer className="proof__author">— {c.author}</footer>
              </blockquote>
            </article>
          ))}
        </div>

        <div className="proof__cta">
          <p className="proof__cta-copy">
            Ready to see what focused work looks like for your business?
          </p>
          <a href="#book" className="btn btn--primary">
            Book a Strategy Call
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
