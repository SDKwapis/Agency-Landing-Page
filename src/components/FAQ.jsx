import { useState } from 'react'
import './FAQ.css'

const FAQS = [
  {
    q: 'Do I need a full redesign, or can you fix specific things?',
    a: "Not everything needs a full rebuild. We start with a quick audit to identify the highest-leverage fix. Sometimes that's a single page, a better headline, or a form that actually works. We'll tell you honestly what needs to change — and what doesn't.",
  },
  {
    q: 'Can you work with a small budget?',
    a: "Yes. Our productized offers are designed with small businesses in mind. The Ads Cleanup Sprint starts at $997. The Lead Generation Starter starts at $1,500. We scope work tightly so you don't pay for things you don't need. If budget is a real constraint, mention it on the call — we'll be direct about what's realistic.",
  },
  {
    q: 'What if I only need one specific thing fixed?',
    a: "That's exactly what our sprint-style offers are designed for. We don't require you to sign a retainer before doing something useful. Pick the service that matches your problem, we scope it, we fix it. If it opens up more questions, we can talk about next steps — no obligation.",
  },
  {
    q: 'How fast can we actually get started?',
    a: "For most services, we can kick off within 3–5 business days of a signed agreement. Website Intensives require a strategy call first, then we schedule the build week. Monthly retainers start within 1–2 weeks. We keep a limited calendar visible so you always know when we have capacity.",
  },
  {
    q: 'Do you work with businesses that have no in-house marketing team?',
    a: "Most of our clients don't. That's kind of the point. You shouldn't need to already understand marketing to hire us. We'll explain what we're doing and why in plain language, and make sure you know how to maintain what we build together.",
  },
  {
    q: 'Who will I actually be working with?',
    a: "Us — directly. Cairn Studio is a two-to-four person team. You won't be handed off to a junior account manager or lost in a client portal. Every engagement is run by the same small group of people who do the actual work.",
  },
  {
    q: "What if I'm not happy with the results?",
    a: "Before we start any project, we agree on what success looks like. We don't promise miracles, but we do promise transparency. If something isn't working, we say so. If a scope needs to shift, we talk about it. Monthly retainers can be cancelled anytime — we earn your continued business every month.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq section" id="faq" aria-label="Frequently asked questions">
      <div className="container">
        <div className="faq__layout">
          <div className="faq__sidebar">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Questions we hear all the time.</h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              If you don't see your question answered here, just ask. We respond to every inquiry
              within one business day.
            </p>
            <a href="#book" className="btn btn--primary">
              Ask us directly
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="faq__list" role="list">
            {FAQS.map((item, i) => (
              <div
                key={i}
                className={`faq__item ${open === i ? 'faq__item--open' : ''}`}
                role="listitem"
              >
                <button
                  className="faq__question"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">
                    {open === i ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="faq__answer"
                  role="region"
                  aria-hidden={open !== i}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
