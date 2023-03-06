// Write your code here
import './index.css'

const CardList = props => {
  const {cards} = props
  const {title, description, imgUrl, className} = cards
  return (
    <li className={`${className} container-edit`}>
      <h1 className="cont-head">{title}</h1>
      <p className="cont-para">{description}</p>
      <div className="img-div">
        <img src={imgUrl} alt={title} className="img-edit" />
      </div>
    </li>
  )
}
export default CardList
