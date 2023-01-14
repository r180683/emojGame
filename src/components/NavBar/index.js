// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <nav className="nav-container">
      <div className="nav-logo-container">
        <img
          className="nav-logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="nav-logo-name">Emoji Game</h1>
      </div>
      <div className="nav-score-container">
        <p className="nav-score">Score: {score}</p>
        <p className="nav-score">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
