import { useState } from 'react'

const features = [
  {
    title: 'Picks up small leaves',
    text: 'Designed to lift fine leaf debris that rakes and blowers tend to miss.',
  },
  {
    title: 'Leaves dirt and mulch behind',
    text: 'Gentle suction targets leaves only, so soil and mulch stay where they belong.',
  },
  {
    title: 'Protects your soil beds',
    text: 'Clean up garden beds without stripping them or ruining the soil.',
  },
]

export default function App() {
  const [feedback, setFeedback] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (feedback.trim() === '') {
      setError('Please enter some feedback before submitting.')
      setSubmitted(false)
      return
    }
    setError('')
    setSubmitted(true)
  }

  function handleReset() {
    setFeedback('')
    setError('')
    setSubmitted(false)
  }

  return (
    <div className="page">
      <header className="hero">
        <span className="badge">Classroom demo</span>
        <h1>My Product: the leaf vacuum for soil beds</h1>
        <p className="lead">
          A leaf vacuum that picks up small leaves without picking up dirt or mulch, so your
          soil beds stay intact.
        </p>
      </header>

      <main>
        <section aria-labelledby="features-heading">
          <h2 id="features-heading">Why it is different</h2>
          <div className="grid">
            {features.map((feature) => (
              <article className="card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="feedback" aria-labelledby="feedback-heading">
          <h2 id="feedback-heading">Tell us what you think</h2>
          <p>What would you want from a leaf vacuum like this?</p>

          {submitted ? (
            <div className="confirmation" role="status">
              <p>Thanks! Your feedback was submitted.</p>
              <button type="button" onClick={handleReset}>
                Submit more feedback
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="feedback">Your feedback</label>
              <textarea
                id="feedback"
                rows="4"
                value={feedback}
                onChange={(event) => setFeedback(event.target.value)}
                placeholder="Type your feedback here"
              />
              {error && (
                <p className="error" role="alert">
                  {error}
                </p>
              )}
              <button type="submit">Submit feedback</button>
            </form>
          )}
        </section>
      </main>

      <footer>
        <p>Classroom demo. Feedback is not stored.</p>
      </footer>
    </div>
  )
}
