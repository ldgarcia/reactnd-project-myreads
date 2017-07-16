import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {
  static propTypes = {
    onMoveBook: PropTypes.func.isRequired
  }

  state = {
    query: '',
    books: []
  }

  handleQueryChange = (event) => {
    const query = event.target.value
    if (query.length) {
      BooksAPI.search(query, 20)
      .then((books) => {
        this.setState({ books: books.map((book) => book.id)})
      })
      .catch((error) => {
        this.setState({ books: []})
        console.log(error)
      })
    }
    else {
      this.setState({ books: []})
    }
  }

  render() {
    const { onMoveBook } = this.props
    const { books } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onKeyUp={this.handleQueryChange} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((bookId) => (
              <li key={ bookId }>
                <Book
                  id={ bookId }
                  onMoveBook={onMoveBook}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
