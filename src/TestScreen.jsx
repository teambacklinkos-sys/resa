import { useState, useEffect, useRef } from 'react'

function TestScreen({ questions, testTitle, onFinish, onQuit }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showConfirmQuit, setShowConfirmQuit] = useState(false)
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false)
  const [showAnswers, setShowAnswers] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setElapsed(prev => prev + 1)
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [])

  function formatTime(seconds) {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  const total = questions.length
  const q = questions[currentIndex]
  const selected = answers[q.id] ?? null
  const answered = Object.keys(answers).length

  function selectOption(optionIndex) {
    setAnswers({ ...answers, [q.id]: optionIndex })
  }

  function clearAnswer() {
    const next = { ...answers }
    delete next[q.id]
    setAnswers(next)
  }

  function goBack() {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  function goNext() {
    if (currentIndex < total - 1) setCurrentIndex(currentIndex + 1)
  }

  function skip() {
    const next = { ...answers }
    delete next[q.id]
    setAnswers(next)
    if (currentIndex < total - 1) setCurrentIndex(currentIndex + 1)
  }

  function handleSubmit() {
    setShowConfirmSubmit(true)
  }

  function confirmSubmit() {
    clearInterval(timerRef.current)
    onFinish(answers, elapsed)
  }

  function handleQuit() {
    setShowConfirmQuit(true)
  }

  return (
    <div className="container test-screen">
      {/* Header bar */}
      <div className="ts-header">
        <button className="back-btn" onClick={handleQuit}>&larr; Quit</button>
        <div className="ts-title-row">
          <h2 className="ts-title">{testTitle}</h2>
          <div className="ts-timer">⏱ {formatTime(elapsed)}</div>
        </div>
        <div className="ts-progress">
          <span className="ts-progress-text">{answered} / {total} answered</span>
          <div className="ts-progress-bar">
            <div className="ts-progress-fill" style={{ width: `${(answered / total) * 100}%` }} />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="ts-question-card">
        <div className="ts-q-number">Question {currentIndex + 1} of {total}</div>
        <p className="ts-q-text">{q.question}</p>

        <div className="ts-options">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={`ts-option ${selected === i ? 'ts-option-selected' : ''}`}
              onClick={() => selectOption(i)}
            >
              <span className="ts-option-letter">{String.fromCharCode(65 + i)}</span>
              <span className="ts-option-text">{opt}</span>
            </button>
          ))}
        </div>

        {selected !== null && (
          <button className="ts-clear" onClick={clearAnswer}>Clear selection</button>
        )}
      </div>

      {/* Navigation */}
      <div className="ts-nav">
        <button className="ts-nav-btn ts-nav-secondary" onClick={goBack} disabled={currentIndex === 0}>
          &larr; Back
        </button>
        <button className="ts-nav-btn ts-nav-secondary" onClick={skip}>
          Skip &raquo;
        </button>
        {currentIndex < total - 1 ? (
          <button className="ts-nav-btn ts-nav-primary" onClick={goNext}>
            Next &rarr;
          </button>
        ) : (
          <button className="ts-nav-btn ts-nav-submit" onClick={handleSubmit}>
            Submit Test
          </button>
        )}
      </div>

      {/* Show Answers button */}
      {Object.keys(answers).length > 0 && (
        <button
          className="ts-nav-btn ts-nav-answers"
          onClick={() => setShowAnswers(!showAnswers)}
        >
          {showAnswers ? 'Hide Answers' : `Show Answers (${Object.keys(answers).length})`}
        </button>
      )}

      {/* Answers panel for answered questions */}
      {showAnswers && (
        <section className="ts-answers-panel">
          <h3 className="ts-answers-title">Answers for Attempted Questions</h3>
          {questions.map((item, i) => {
            const userAnswer = answers[item.id]
            if (userAnswer === undefined) return null
            const isCorrect = userAnswer === item.answer
            return (
              <div key={item.id} className={`rs-q ${isCorrect ? 'rs-q-correct' : 'rs-q-wrong'}`}>
                <div className="rs-q-header">
                  <span className="rs-q-num">Q{i + 1}</span>
                  <span className={`rs-q-badge ${isCorrect ? 'rs-badge-correct' : 'rs-badge-wrong'}`}>
                    {isCorrect ? 'Correct' : 'Wrong'}
                  </span>
                </div>
                <p className="rs-q-text">{item.question}</p>
                <div className="rs-options">
                  {item.options.map((opt, oi) => {
                    let cls = 'rs-opt'
                    if (oi === item.answer) cls += ' rs-opt-correct'
                    if (oi === userAnswer && !isCorrect) cls += ' rs-opt-wrong'
                    return (
                      <div key={oi} className={cls}>
                        <span className="rs-opt-letter">{String.fromCharCode(65 + oi)}</span>
                        <span>{opt}</span>
                        {oi === item.answer && <span className="rs-opt-tag">Correct</span>}
                        {oi === userAnswer && oi !== item.answer && <span className="rs-opt-tag rs-opt-tag-wrong">Your answer</span>}
                      </div>
                    )
                  })}
                </div>
                <div className="rs-explanation">
                  <strong>Explanation:</strong> {item.explanation}
                </div>
              </div>
            )
          })}
        </section>
      )}

      {/* Question palette */}
      <div className="ts-palette">
        <div className="ts-palette-title">Question Palette</div>
        <div className="ts-palette-grid">
          {questions.map((item, i) => (
            <button
              key={item.id}
              className={`ts-palette-btn ${i === currentIndex ? 'ts-palette-current' : ''} ${answers[item.id] !== undefined ? 'ts-palette-answered' : ''}`}
              onClick={() => setCurrentIndex(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="ts-palette-legend">
          <span><span className="ts-dot ts-dot-answered" /> Answered</span>
          <span><span className="ts-dot ts-dot-current" /> Current</span>
          <span><span className="ts-dot ts-dot-unanswered" /> Unanswered</span>
        </div>
      </div>

      {/* Confirm submit modal */}
      {showConfirmSubmit && (
        <div className="ts-modal-overlay">
          <div className="ts-modal">
            <h3>Submit Test?</h3>
            <p>You have answered <strong>{answered}</strong> out of <strong>{total}</strong> questions.</p>
            {answered < total && (
              <p className="ts-modal-warn">{total - answered} question(s) are unanswered and will not be scored.</p>
            )}
            <div className="ts-modal-actions">
              <button className="ts-nav-btn ts-nav-secondary" onClick={() => setShowConfirmSubmit(false)}>Go Back</button>
              <button className="ts-nav-btn ts-nav-submit" onClick={confirmSubmit}>Confirm Submit</button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm quit modal */}
      {showConfirmQuit && (
        <div className="ts-modal-overlay">
          <div className="ts-modal">
            <h3>Quit Test?</h3>
            <p>Your progress will be lost. Are you sure?</p>
            <div className="ts-modal-actions">
              <button className="ts-nav-btn ts-nav-secondary" onClick={() => setShowConfirmQuit(false)}>Continue Test</button>
              <button className="ts-nav-btn ts-nav-danger" onClick={onQuit}>Quit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TestScreen
