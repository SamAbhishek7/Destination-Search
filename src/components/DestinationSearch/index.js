// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchlist = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="searchele">
          <input
            type="search"
            placeholder="Search"
            onChange={this.changeSearchInput}
            value={searchInput}
            className="search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-img"
          />
        </div>
        <div className="list-container">
          {searchlist.map(each => (
            <DestinationItem destinationDetails={each} key={each.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default DestinationSearch
