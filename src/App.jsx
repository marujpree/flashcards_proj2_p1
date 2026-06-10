import './App.css'
import events from './data/events'
import EventCard from './components/EventCard'

function App() {
  return (
    <main>
      <header className="site-header">
        <h1>FIFA World Cup 2026</h1>
        <p className="site-subtitle">Group Stage Tracker · <strong>Santiago Reyes</strong></p>
      </header>

      <section className="board">
        <div className="card-grid">
          {events.map((ev) => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
