import { useState } from 'react'
import TestDetail from './TestDetail'
import TestScreen from './TestScreen'
import ResultScreen from './ResultScreen'
import molecularBiologyTest1 from './data/molecular-biology-test1'
import './App.css'

const tests = [
  { id: 1, title: "Molecular Biology - Test 1 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest1, description: "DNA replication, transcription, translation, gene regulation, operons, mutations, DNA repair" },
]

const categories = [...new Set(tests.map(t => t.category))]

function App() {
  const [selectedTest, setSelectedTest] = useState(null)
  const [screen, setScreen] = useState('list')
  const [testAnswers, setTestAnswers] = useState(null)
  const [timeTaken, setTimeTaken] = useState(0)
  const [activeCategory, setActiveCategory] = useState(categories[0])

  function selectTest(test) {
    setSelectedTest(test)
    setScreen('detail')
  }

  function startTest() {
    setScreen('test')
  }

  function finishTest(answers, elapsed) {
    setTestAnswers(answers)
    setTimeTaken(elapsed)
    setScreen('result')
  }

  function backToList() {
    setSelectedTest(null)
    setTestAnswers(null)
    setScreen('list')
  }

  function backToDetail() {
    setTestAnswers(null)
    setScreen('detail')
  }

  if (screen === 'result' && selectedTest) {
    return (
      <ResultScreen
        questions={selectedTest.data}
        answers={testAnswers}
        testTitle={selectedTest.title}
        timeTaken={timeTaken}
        onBack={backToList}
      />
    )
  }

  if (screen === 'test' && selectedTest) {
    return (
      <TestScreen
        questions={selectedTest.data}
        testTitle={selectedTest.title}
        onFinish={finishTest}
        onQuit={backToDetail}
      />
    )
  }

  if (screen === 'detail' && selectedTest) {
    return (
      <TestDetail
        test={selectedTest}
        onBack={backToList}
        onStart={startTest}
      />
    )
  }

  const filteredTests = tests.filter(t => t.category === activeCategory)

  return (
    <div className="home">
      <header className="home-header">
        <div className="logo">RESA</div>
        <h1>RESA MCQ Tests</h1>
        <p className="subtitle">Scientist-I Biotechnology (Medical Biotechnology) — Practice Tests</p>
      </header>

      <div className="home-body">
        <aside className="sidebar">
          <div className="sidebar-title">Subjects</div>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`sidebar-tab ${activeCategory === cat ? 'sidebar-tab-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </aside>

        <main className="main-content">
          <h2 className="main-content-title">{activeCategory}</h2>
          <p className="main-content-subtitle">{filteredTests.length} tests available</p>
          <section className="test-list">
            {filteredTests.map((test) => (
              <button
                key={test.id}
                className="test-card"
                onClick={() => selectTest(test)}
              >
                <div className="test-card-left">
                  <h2 className="test-card-title">{test.title}</h2>
                  <p className="test-card-desc">{test.description}</p>
                  <p className="test-card-meta">{test.questions} Questions &middot; +1 / -1/3 Marking</p>
                </div>
                <span className="test-card-arrow">&rarr;</span>
              </button>
            ))}
          </section>
        </main>
      </div>

      <footer className="footer">
        <a href="/notes.html" className="notes-link">Preparation Notes &amp; Strategy</a>
        <span>RESA MCQ Tests</span>
      </footer>
    </div>
  )
}

export default App
