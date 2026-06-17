import { useState } from 'react';
import cards from './data/cards';
import FlashCard from './components/FlashCard';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * cards.length);
    } while (nextIndex === currentIndex);
    setCurrentIndex(nextIndex);
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>FlashFlags</h1>
        <p className="app-description">
          Test your flag knowledge! Can you name all 48 World Cup 2026 countries?
        </p>
        <p className="app-count">Number of cards: {cards.length}</p>
      </header>
      <main className="app-main">
        <FlashCard card={cards[currentIndex]} />
        <p className="card-hint">Click the card to reveal the country name</p>
        <button type="button" className="btn-next" onClick={handleNext}>
          Next →
        </button>
      </main>
    </div>
  );
}

export default App;
