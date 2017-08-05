import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

class ListBooks extends React.Component {
  static propTypes = {
    shelvedBooks: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render() {
    const { shelvedBooks, onShelfChange } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            name="Currently Reading"
            books={ shelvedBooks.filter((book) => book.shelf === 'currentlyReading') }
            onShelfChange={ onShelfChange } />
          <Shelf
            name="Want to Read"
            books={ shelvedBooks.filter((book) => book.shelf === 'wantToRead') }
            onShelfChange={ onShelfChange } />
          <Shelf
            name="Read"
            books={ shelvedBooks.filter((book) => book.shelf === 'read') }
            onShelfChange={ onShelfChange } />
        </div>
        <div className="open-search">
          <Link to='/search'>
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
