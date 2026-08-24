function TestDetail({ test, onBack, onStart }) {
  return (
    <div className="container">
      <header className="header">
        <button className="back-btn" onClick={onBack}>&larr; All Tests</button>
        <div className="logo">RESA</div>
        <h1>{test.title}</h1>
        <p className="subtitle">Scientist-I Biotechnology (Medical Biotechnology)</p>
        {test.description && <p className="test-detail-desc">{test.description}</p>}
      </header>

      <section className="info-cards">
        <div className="card">
          <span className="card-icon">📝</span>
          <div className="card-label">Total Questions</div>
          <div className="card-value">{test.questions}</div>
          <div className="card-desc">Objective MCQs</div>
        </div>
        <div className="card">
          <span className="card-icon">✅</span>
          <div className="card-label">Correct Answer</div>
          <div className="card-value">+1</div>
          <div className="card-desc">Mark per question</div>
        </div>
        <div className="card">
          <span className="card-icon">❌</span>
          <div className="card-label">Negative Marking</div>
          <div className="card-value">-1/3</div>
          <div className="card-desc">For wrong answer</div>
        </div>
      </section>

      <section className="details">
        <h2>Test Instructions</h2>
        <ul>
          <li>The test contains <strong>{test.questions} objective type questions</strong> with 4 choices each.</li>
          <li>Each question carries <strong>1 mark</strong> for the correct answer.</li>
          <li>There is a <strong>negative marking of 1/3</strong> for each wrong answer.</li>
          <li>Only <strong>one option</strong> is correct per question.</li>
          <li>No marks will be deducted for unanswered questions.</li>
        </ul>
      </section>

      <button className="start-btn" onClick={onStart}>Start Test</button>

      <footer className="footer">
        {test.title}
      </footer>
    </div>
  )
}

export default TestDetail
