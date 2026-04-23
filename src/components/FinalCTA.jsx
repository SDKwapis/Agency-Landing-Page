import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="finalcta section" id="book" aria-label="Book a strategy call">
      <div className="container">
        <div className="finalcta__inner">
          <div className="finalcta__content">
            <span className="section-label">Ready to start?</span>
            <h2 className="finalcta__heading">
              Let's figure out<br />
              <em>what you actually need.</em>
            </h2>
            <p className="finalcta__sub">
              Book a free 30-minute strategy call. We'll review your current
              setup, identify the biggest opportunity, and recommend a clear path
              forward — whether that's working with us or not.
            </p>

            <ul className="finalcta__promises" aria-label="What to expect">
              {[
                'No sales pitch — just honest assessment',
                'Specific recommendations, not vague advice',
                'Response within 24 hours to confirm',
                'Cancel or reschedule anytime',
              ].map(p => (
                <li key={p} className="finalcta__promise">
                  <span className="finalcta__check" aria-hidden="true">✓</span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="finalcta__actions">
              <a
                href="mailto:hello@cairnstudio.co?subject=Strategy Call Request"
                className="btn btn--primary btn--lg"
              >
                Book a Strategy Call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="mailto:hello@cairnstudio.co"
                className="btn btn--outline btn--lg"
              >
                Just send us a message
              </a>
            </div>

            <p className="finalcta__contact">
              Prefer email?{' '}
              <a href="mailto:hello@cairnstudio.co" className="finalcta__link">
                hello@cairnstudio.co
              </a>
              {' '}· We read every message personally.
            </p>
          </div>

          <div className="finalcta__card">
            <div className="finalcta__card-label">What a strategy call looks like</div>
            <div className="finalcta__timeline">
              {[
                { time: '0–5 min', text: 'Introductions — who you are, what you do, who you serve' },
                { time: '5–15 min', text: "Current state review — where leads come from, what's not working" },
                { time: '15–25 min', text: "Opportunity diagnosis — we tell you exactly what we'd focus on first" },
                { time: '25–30 min', text: "Next steps — whether that's a proposal, another call, or just good advice" },
              ].map(item => (
                <div key={item.time} className="finalcta__timeline-item">
                  <span className="finalcta__timeline-time">{item.time}</span>
                  <span className="finalcta__timeline-text">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="finalcta__card-footer">
              <div className="finalcta__team">
                <div className="finalcta__avatars" aria-hidden="true">
                  <div className="finalcta__avatar finalcta__avatar--a">S</div>
                  <div className="finalcta__avatar finalcta__avatar--b">M</div>
                </div>
                <div>
                  <div className="finalcta__team-names">Sam & Maya</div>
                  <div className="finalcta__team-role">Co-founders · Cairn Studio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
