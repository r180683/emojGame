// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, restartGame} = props
  const resultImageUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const resultText = score === 12 ? 'Won' : 'Lose'
  const resultScoreText =
    score === 12 ? (
      <p className="result-score-text">Best Score</p>
    ) : (
      <p className="result-score-text">Score</p>
    )

  const playAgainBtn = () => {
    restartGame()
  }

  return (
    <div className="win-lose-container">
      <div className="result-text-container">
        <h1 className="won-lose-text">You {resultText}</h1>
        {resultScoreText}
        <p className="score-points ">{score}/12</p>
        <button onClick={playAgainBtn} type="button" className="play-again-btn">
          Play Again
        </button>
      </div>
      <img className="result-image" alt="win or lose" src={resultImageUrl} />
    </div>
  )
}

export default WinOrLoseCard
