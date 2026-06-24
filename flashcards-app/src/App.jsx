import { useState } from 'react';
import { cards as initialCards } from './data/cards';
import FlashCard from './components/FlashCard';
import './App.css';

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalize(str) {
  return str.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
}

function isCorrect(guess, card) {
  const g = guess.trim().toUpperCase();
  if (g === card.answer) return true;
  const correctText = card.options[card.answer];
  if (normalize(guess) === normalize(correctText)) return true;
  if (normalize(guess).length >= 3 && normalize(correctText).includes(normalize(guess))) return true;
  return false;
}

function App() {
  const [deck, setDeck] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [instantFlip, setInstantFlip] = useState(false);

  const card = deck[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === deck.length - 1;

  function handleFlip() {
    if (!isFlipped && !guess.trim() && !feedback) {
      const confirmed = window.confirm("You haven't typed a guess. Are you sure you want to flip?");
      if (!confirmed) return;
    }
    setIsFlipped(f => !f);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!guess.trim() || isFlipped) return;
    const correct = isCorrect(guess, card);
    setFeedback(correct ? 'correct' : 'incorrect');
    if (correct) {
      const next = currentStreak + 1;
      setCurrentStreak(next);
      setLongestStreak(prev => Math.max(prev, next));
      setIsFlipped(true);
    } else {
      setCurrentStreak(0);
    }
  }

  function goTo(index) {
    setInstantFlip(true);
    setCurrentIndex(index);
    setIsFlipped(false);
    setGuess('');
    setFeedback(null);
    requestAnimationFrame(() => setInstantFlip(false));
  }

  function handleShuffle() {
    setDeck(shuffleArray(initialCards));
    goTo(0);
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>World Cup Trivia</h1>
        <p className="app-description">
          Test your football knowledge! Answer all 10 World Cup questions.
        </p>
        <p className="app-count">
          Card {currentIndex + 1} of {deck.length}
        </p>
      </header>

      <main className="app-main">
        <div className="streak-bar">
          <span className="streak-current">🔥 Streak: {currentStreak}</span>
          <span className="streak-best">Best: {longestStreak}</span>
        </div>

        <FlashCard
          card={card}
          isFlipped={isFlipped}
          onFlip={handleFlip}
          feedback={feedback}
          instant={instantFlip}
        />

        <form className="guess-form" onSubmit={handleSubmit}>
          <input
            className={`guess-input${feedback ? ` guess-input--${feedback}` : ''}`}
            type="text"
            placeholder="Type A, B, C, or D and press Submit…"
            value={guess}
            onChange={e => { setGuess(e.target.value); setFeedback(null); }}
            disabled={isFlipped}
            aria-label="Your answer"
          />
          <button
            type="submit"
            className="btn-submit"
            disabled={isFlipped || !guess.trim()}
          >
            Submit
          </button>
        </form>

        {feedback && (
          <p className={`feedback feedback--${feedback}`}>
            {feedback === 'correct'
              ? '✓ Correct!'
              : '✗ Incorrect — try again or click the card to see the answer'}
          </p>
        )}

        <div className="nav-row">
          <button
            className="btn-nav"
            onClick={() => goTo(currentIndex - 1)}
            disabled={isFirst}
            aria-label="Previous card"
          >
            ← Back
          </button>

          <button className="btn-shuffle" onClick={handleShuffle}>
            Shuffle
          </button>

          <button
            className="btn-nav"
            onClick={() => goTo(currentIndex + 1)}
            disabled={isLast}
            aria-label="Next card"
          >
            Next →
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
