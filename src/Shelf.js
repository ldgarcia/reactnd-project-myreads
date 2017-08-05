import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render() {
    const { name, books, onShelfChange } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ name }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books.map((book) => (
              <li key={ book.id }>
                <Book
                  id={ book.id }
                  title={ book.title }
                  authors={ book.authors }
                  imageLinks={ book.imageLinks }
                  shelf={ book.shelf }
                  onShelfChange={ onShelfChange }
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
