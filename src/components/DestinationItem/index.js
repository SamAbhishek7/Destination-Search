// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <div className="item">
      <img src={imgUrl} className="image" key={imgUrl} />
      <p className="description">{name}</p>
    </div>
  )
}
export default DestinationItem
