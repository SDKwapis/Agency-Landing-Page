import './HowItWorks.css'

const STEPS = [
  {
    number: '01',
    title: 'Choose your path',
    body: 'Use the service selector above or just book a 20-minute intro call. We\'ll confirm the right fit and scope within 24 hours — no drawn-out proposals.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Get your custom plan',
    body: 'We run a quick strategy session to understand your business, your current gaps, and what good looks like for your stage of growth. You get a clear roadmap — before you\'ve spent a dollar.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'We build and launch',
    body: 'We execute the work fast, with daily check-ins so you\'re never in the dark. Most projects move from strategy to live in days — not months.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Track and grow',
    body: 'We set up the tracking before we launch so you know exactly what\'s working. Every engagement ends with clear data, next steps, and the option to continue.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="process section section--alt" id="process" aria-label="How it works">
      <div className="container">
        <span className="section-label">The process</span>
        <div className="process__header">
          <h2 className="section-title">Simple. Fast. No surprises.</h2>
          <p className="section-subtitle">
            Working with us shouldn't feel like managing a vendor. We run a tight, communicative process
            that keeps you informed without pulling you into every detail.
          </p>
        </div>

        <div className="process__photo-wrap">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=440&q=80"
            alt="Small team strategy session at a whiteboard"
            className="process__photo"
            loading="lazy"
            decoding="async"
          />
          <div className="process__photo-caption">
            A typical strategy session — where we map your funnel and identify the highest-leverage fix first.
          </div>
        </div>

        <div className="process__steps">
          {STEPS.map((step, i) => (
            <div key={step.number} className="process__step">
              <div className="process__step-icon">{step.icon}</div>
              <div className="process__step-number" aria-hidden="true">{step.number}</div>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-body">{step.body}</p>
              {i < STEPS.length - 1 && (
                <div className="process__connector" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <div className="process__note">
          <div className="process__note-icon" aria-hidden="true">💬</div>
          <div>
            <strong>How long does it really take?</strong>{' '}
            From your first call to project kickoff is usually 3–5 business days. We keep
            our calendar visible so you know exactly when we can start.
          </div>
        </div>
      </div>
    </section>
  )
}
