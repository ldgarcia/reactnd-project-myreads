import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

class ListBooks extends React.Component {
  static propTypes = {
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  render() {
    const { currentlyReading, wantToRead, read, onMoveBook } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            name="Currently Reading"
            books={ currentlyReading }
            onMoveBook={ onMoveBook } />
          <Shelf
            name="Want to Read"
            books={ wantToRead }
            onMoveBook={ onMoveBook } />
          <Shelf
            name="Read"
            books={ read }
            onMoveBook={ onMoveBook } />
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
