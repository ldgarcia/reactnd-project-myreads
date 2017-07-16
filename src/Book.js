import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  state = {
    book: null
  }

  componentDidMount() {
    BooksAPI.get(this.props.id).then((book) => {
      this.setState({ book: book })
    })
  }

  handleBookMove = (event) => {
    const { book } = this.state
    const { onMoveBook } = this.props
    const shelf = event.target.value
    onMoveBook(book, shelf)
  }

  render() {
    const { book } = this.state
    if (!book) {
      return null
    }
    const { title, authors, imageLinks, shelf } = book
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.handleBookMove} defaultValue={shelf}>
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
