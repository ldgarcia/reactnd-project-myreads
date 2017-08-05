import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    authors: PropTypes.array,
    imageLinks: PropTypes.object,
    shelf: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  handleShelfChange = (event) => {
    const { id, shelf, onShelfChange } = this.props
    const newShelf = event.target.value
    onShelfChange({ id: id }, shelf, newShelf)
  }

  render() {
    const { title, authors, imageLinks, shelf } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.handleShelfChange} defaultValue={shelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ title }</div>
        <div className="book-authors">
          {/* Some books have no authors (i.e. Serious Cycling 2nd Edition) */}
          { authors ? authors.join(' | ') : '' }
        </div>
      </div>
    )
  }
}

export default Book
