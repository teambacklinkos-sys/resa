import { useState } from 'react'

function ResultScreen({ questions, answers, testTitle, timeTaken, onBack }) {
  const [showAnswers, setShowAnswers] = useState(false)
  const total = questions.length
  let correct = 0
  let wrong = 0
  let unanswered = 0

  function formatTime(seconds) {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  questions.forEach((q) => {
    if (answers[q.id] === undefined) {
      unanswered++
    } else if (answers[q.id] === q.answer) {
      correct++
    } else {
      wrong++
    }
  })

  const score = correct * 1 - wrong * (1 / 3)
  const maxScore = total
  const percentage = ((score / maxScore) * 100).toFixed(1)

  return (
    <div className="container result-screen">
      <header className="header">
        <div className="logo">RESA</div>
        <h1>Test Results</h1>
        <p className="subtitle">{testTitle}</p>
      </header>

      {/* Score cards */}
      <section className="info-cards">
        <div className="card">
          <div className="card-label">Score</div>
          <div className="card-value" style={{ color: score >= 0 ? '#059669' : '#dc2626' }}>
            {score.toFixed(2)}
          </div>
          <div className="card-desc">out of {maxScore}</div>
        </div>
        <div className="card">
          <div className="card-label">Time Taken</div>
          <div className="card-value" style={{ fontSize: '24px' }}>{formatTime(timeTaken)}</div>
          <div className="card-desc">hh:mm:ss</div>
        </div>
        <div className="card">
          <div className="card-label">Percentage</div>
          <div className="card-value">{percentage}%</div>
          <div className="card-desc">Overall</div>
        </div>
      </section>

      <section className="rs-summary">
        <div className="rs-summary-item rs-correct">
          <span className="rs-summary-count">{correct}</span>
          <span className="rs-summary-label">Correct (+{correct})</span>
        </div>
        <div className="rs-summary-item rs-wrong">
          <span className="rs-summary-count">{wrong}</span>
          <span className="rs-summary-label">Wrong (-{(wrong / 3).toFixed(2)})</span>
        </div>
        <div className="rs-summary-item rs-skipped">
          <span className="rs-summary-count">{unanswered}</span>
          <span className="rs-summary-label">Unanswered (0)</span>
        </div>
      </section>

      {/* Toggle answers button */}
      <button
        className="start-btn rs-toggle-btn"
        onClick={() => setShowAnswers(!showAnswers)}
      >
        {showAnswers ? 'Hide Answers' : 'Show Answers'}
      </button>

      {/* Detailed answers (only answered questions) */}
      {showAnswers && (
        <section className="rs-detail">
          <h2>Detailed Answers &amp; Explanations</h2>
          {questions.map((q, i) => {
            const userAnswer = answers[q.id]
            const isCorrect = userAnswer === q.answer
            const isUnanswered = userAnswer === undefined

            if (isUnanswered) return null

            return (
              <div key={q.id} className={`rs-q ${isCorrect ? 'rs-q-correct' : 'rs-q-wrong'}`}>
                <div className="rs-q-header">
                  <span className="rs-q-num">Q{i + 1}</span>
                  <span className={`rs-q-badge ${isCorrect ? 'rs-badge-correct' : 'rs-badge-wrong'}`}>
                    {isCorrect ? 'Correct' : 'Wrong'}
                  </span>
                </div>
                <p className="rs-q-text">{q.question}</p>
                <div className="rs-options">
                  {q.options.map((opt, oi) => {
                    let cls = 'rs-opt'
                    if (oi === q.answer) cls += ' rs-opt-correct'
                    if (oi === userAnswer && !isCorrect) cls += ' rs-opt-wrong'
                    return (
                      <div key={oi} className={cls}>
                        <span className="rs-opt-letter">{String.fromCharCode(65 + oi)}</span>
                        <span>{opt}</span>
                        {oi === q.answer && <span className="rs-opt-tag">Correct</span>}
                        {oi === userAnswer && oi !== q.answer && <span className="rs-opt-tag rs-opt-tag-wrong">Your answer</span>}
                      </div>
                    )
                  })}
                </div>
                <div className="rs-explanation">
                  <strong>Explanation:</strong> {q.explanation}
                </div>
              </div>
            )
          })}
        </section>
      )}

      <button className="start-btn" onClick={onBack}>Back to Tests</button>
    </div>
  )
}

export default ResultScreen
