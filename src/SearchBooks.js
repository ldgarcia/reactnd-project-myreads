import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {
  static propTypes = {
    shelvedBooks: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  state = {
    query: '',
    books: []
  }

  onQueryChange = (event) => {
    const query = event.target.value
    this.setState({ query })
    BooksAPI.search(query, 20)
    .then((books) => {
      this.setState({ books })
    })
    .catch((error) => {
      this.setState({ books: [] })
    })
  }

  getShelf = (book) => {
    const { shelvedBooks } = this.props
    let shelvedBook = shelvedBooks.find((shelvedBook) => shelvedBook.id === book.id)
    return shelvedBook ? shelvedBook.shelf : 'none'
  }

  render() {
    const { onShelfChange } = this.props
    const { books, query } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={ query }
              onChange={ this.onQueryChange } />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={ book.id }>
                <Book
                  id={ book.id }
                  title={ book.title }
                  authors={ book.authors }
                  imageLinks={ book.imageLinks }
                  shelf={ this.getShelf(book) }
                  onShelfChange={ onShelfChange }
                />
              </li>))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
