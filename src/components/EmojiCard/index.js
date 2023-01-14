// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const clickEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li onClick={clickEmoji}>
      <button className="emoji-card-btn emoji-container" type="button">
        <img className="emoji-image" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
