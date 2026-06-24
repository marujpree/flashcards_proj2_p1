import './FlashCard.css';

function FlashCard({ card, isFlipped, onFlip, feedback, instant }) {
  return (
    <div
      className={`flashcard-scene${feedback ? ` flashcard-scene--${feedback}` : ''}`}
      data-difficulty={card.difficulty}
      onClick={onFlip}
      role="button"
      aria-label="Question card — click to flip"
      aria-pressed={isFlipped}
    >
      <div className={`flashcard ${isFlipped ? 'is-flipped' : ''}${instant ? ' no-transition' : ''}`}>

        <div className="flashcard__face flashcard__face--front">
          <span className="difficulty-badge">{card.difficulty}</span>
          <p className="card-question">{card.question}</p>
          <ul className="card-options">
            {Object.entries(card.options).map(([letter, text]) => (
              <li key={letter} className="card-option">
                <span className="option-letter">{letter}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flashcard__face flashcard__face--back">
          <span className="difficulty-badge">{card.difficulty}</span>
          <p className="answer-label">Answer: {card.answer}</p>
          <p className="answer-text">{card.options[card.answer]}</p>
          <p className="explanation">{card.explanation}</p>
        </div>

      </div>
    </div>
  );
}

export default FlashCard;
