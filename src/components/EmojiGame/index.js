/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, isGameEnd: false, emojiClickIdList: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  restartGame = () => {
    this.setState({score: 0, isGameEnd: false, emojiClickIdList: []})
  }

  onClickEmoji = id => {
    const {emojiClickIdList, score, topScore} = this.state
    const highScore = score + 1 > topScore ? score + 1 : topScore
    if (emojiClickIdList.includes(id)) {
      this.setState(prevState => ({
        isGameEnd: !prevState.isGameEnd,
      }))
    } else if (score + 1 === 12) {
      this.setState(prevState => ({
        emojiClickIdList: [...prevState.emojiClickIdList, id],
        topScore: highScore,
        score: prevState.score + 1,
        isGameEnd: true,
      }))
    } else {
      this.setState(prevState => ({
        emojiClickIdList: [...prevState.emojiClickIdList, id],
        score: prevState.score + 1,
        topScore: highScore,
      }))
      this.shuffledEmojisList()
    }
  }

  render() {
    const {score, topScore, isGameEnd} = this.state
    const {emojisList} = this.props
    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} />
        {isGameEnd ? (
          <div className="result-container">
            <WinOrLoseCard
              restartGame={this.restartGame}
              score={score}
              topScore={topScore}
            />
          </div>
        ) : (
          <ul className="game-container">
            {emojisList.map(each => (
              <EmojiCard
                onClickEmoji={this.onClickEmoji}
                key={each.id}
                emojiDetails={each}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
