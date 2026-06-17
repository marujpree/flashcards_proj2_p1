import { useState, useEffect } from 'react';
import './FlashCard.css';

function FlashCard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [card]);

  return (
    <div
      className="flashcard-scene"
      data-difficulty={card.difficulty}
      onClick={() => setIsFlipped(f => !f)}
      role="button"
      aria-label="Flag card — click to flip"
      aria-pressed={isFlipped}
    >
      <div className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="flashcard__face flashcard__face--front">
          <img
            src={`https://flagcdn.com/w320/${card.code}.png`}
            alt={`Flag of ${card.country}`}
          />
        </div>
        <div className="flashcard__face flashcard__face--back">
          <span className="country-name">{card.country}</span>
          <span className="difficulty-badge">{card.difficulty} · #{card.rank}</span>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
