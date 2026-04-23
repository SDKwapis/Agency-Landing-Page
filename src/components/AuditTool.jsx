import { useState } from 'react'
import './AuditTool.css'

const QUESTIONS = [
  {
    id: 'website_age',
    question: 'How old is your current website?',
    type: 'choice',
    options: [
      { label: 'Less than 1 year', value: 0 },
      { label: '1–3 years', value: 1 },
      { label: '3–5 years', value: 2 },
      { label: 'Older than 5 years / not sure', value: 3 },
    ],
  },
  {
    id: 'mobile',
    question: 'Does your site look good and work well on a phone?',
    type: 'yesno',
    yesValue: 0,
    noValue: 2,
  },
  {
    id: 'speed',
    question: 'Does your website load in under 3 seconds?',
    type: 'yesno',
    yesValue: 0,
    noValue: 2,
  },
  {
    id: 'leads',
    question: 'Are you regularly getting leads or inquiries from your website?',
    type: 'yesno',
    yesValue: 0,
    noValue: 3,
  },
  {
    id: 'ads',
    question: 'Are you currently running paid ads (Google, Meta, etc.)?',
    type: 'choice',
    options: [
      { label: "Yes, and they're working well", value: 0 },
      { label: 'Yes, but results are weak', value: 2 },
      { label: "No, but I'd like to", value: 1 },
      { label: 'No, not interested right now', value: 0 },
    ],
  },
  {
    id: 'clarity',
    question: 'When someone lands on your homepage, can they immediately tell what you do and who you help?',
    type: 'yesno',
    yesValue: 0,
    noValue: 3,
  },
  {
    id: 'tracking',
    question: 'Do you have analytics or tracking set up to know where leads come from?',
    type: 'yesno',
    yesValue: 0,
    noValue: 2,
  },
]

function getResult(score) {
  if (score <= 3) {
    return {
      level: 'strong',
      headline: 'Your fundamentals look solid.',
      body: "You've done the work. Your site and tracking are in reasonable shape — but there's likely a specific growth bottleneck we can identify quickly. A focused audit or single-service sprint may be all you need.",
      tag: 'Quick Win Opportunity',
      color: 'green',
    }
  } else if (score <= 8) {
    return {
      level: 'medium',
      headline: 'A few gaps are probably costing you leads.',
      body: "Your setup has some strong pieces, but there are 2–3 specific issues that are likely dragging down your conversion rate. The good news: these are fixable in weeks, not months. A conversion-focused website refresh or funnel audit would be a high-ROI next step.",
      tag: 'Conversion Gap',
      color: 'amber',
    }
  } else {
    return {
      level: 'high',
      headline: "Your marketing foundation needs attention — but it's fixable.",
      body: "There are several gaps that are almost certainly limiting your growth. Don't panic — most businesses at this stage are in the same position. A clear strategy and a few focused fixes can turn this around in 30–60 days. Let's start with the highest-leverage fix first.",
      tag: 'Foundation Issues',
      color: 'red',
    }
  }
}

export default function AuditTool() {
  const [answers, setAnswers] = useState({})
  const [current, setCurrent] = useState(0)
  const [done, setDone] = useState(false)

  const totalQ = QUESTIONS.length
  const q = QUESTIONS[current]
  const progress = Math.round((current / totalQ) * 100)

  function answer(value) {
    const next = { ...answers, [q.id]: value }
    setAnswers(next)

    if (current + 1 < totalQ) {
      setCurrent(c => c + 1)
    } else {
      setDone(true)
    }
  }

  function reset() {
    setAnswers({})
    setCurrent(0)
    setDone(false)
  }

  const score = Object.values(answers).reduce((a, b) => a + b, 0)
  const result = getResult(score)

  return (
    <section className="audit section" id="audit" aria-label="Free marketing audit">
      <div className="container">
        <div className="audit__header">
          <span className="section-label">Free Self-Audit</span>
          <h2 className="section-title">7 questions. Real clarity.</h2>
          <p className="section-subtitle">
            Answer honestly. In under 2 minutes you'll know exactly what's working
            and what's costing you leads right now.
          </p>
        </div>

        <div className="audit__widget">
          {!done ? (
            <div className="audit__question-panel">
              <div className="audit__progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
                <div className="audit__progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <div className="audit__progress-label">
                Question {current + 1} of {totalQ}
              </div>

              <h3 className="audit__question">{q.question}</h3>

              <div className={`audit__options ${q.type === 'yesno' ? 'audit__options--yesno' : 'audit__options--grid'}`}>
                {q.type === 'yesno' ? (
                  <>
                    <button className="audit__option audit__option--yes" onClick={() => answer(q.yesValue)}>
                      <span className="audit__option-icon">✓</span> Yes
                    </button>
                    <button className="audit__option audit__option--no" onClick={() => answer(q.noValue)}>
                      <span className="audit__option-icon">✕</span> No / Not sure
                    </button>
                  </>
                ) : (
                  q.options.map(opt => (
                    <button
                      key={opt.label}
                      className="audit__option audit__option--choice"
                      onClick={() => answer(opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))
                )}
              </div>

              {current > 0 && (
                <button className="audit__back" onClick={() => setCurrent(c => c - 1)}>
                  ← Back
                </button>
              )}
            </div>
          ) : (
            <div className="audit__result" role="region" aria-live="polite">
              <div className={`audit__result-badge audit__result-badge--${result.color}`}>
                {result.tag}
              </div>
              <h3 className="audit__result-heading">{result.headline}</h3>
              <p className="audit__result-body">{result.body}</p>

              <div className="audit__result-score">
                <div className="audit__score-label">Your marketing health score</div>
                <div className="audit__score-bar-wrap">
                  <div
                    className={`audit__score-bar audit__score-bar--${result.color}`}
                    style={{ width: `${Math.max(10, 100 - (score / 15) * 100)}%` }}
                  />
                </div>
                <div className="audit__score-note">
                  {result.level === 'strong' && 'Strong foundation — optimize for growth'}
                  {result.level === 'medium' && 'A few targeted fixes could unlock meaningful growth'}
                  {result.level === 'high' && 'Significant upside available once fundamentals are in place'}
                </div>
              </div>

              <div className="audit__result-actions">
                <a href="#book" className="btn btn--primary btn--lg">
                  Get My Custom Plan
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#book" className="btn btn--outline">
                  Book a Call
                </a>
                <button className="btn btn--ghost" onClick={reset}>
                  Retake audit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
