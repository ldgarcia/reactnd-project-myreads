import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {

  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading').map((book) => book.id)
      const wantToRead = books.filter((book) => book.shelf === 'wantToRead').map((book) => book.id)
      const read = books.filter((book) => book.shelf === 'read').map((book) => book.id)
      this.setState({
        currentlyReading: currentlyReading,
        wantToRead: wantToRead,
        read: read
      })
    })
  }

  moveBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then((response) => {
      this.setState(response)
    })
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state

    return (
      <BrowserRouter>
        <div className="app">
          <Route path='/' exact component={() => (
            <ListBooks
              currentlyReading={currentlyReading}
              wantToRead={wantToRead}
              read={read}
              onMoveBook={this.moveBook}
            />
          )} />
          <Route path='/search' exact component={() => (
            <SearchBooks
              onMoveBook={this.moveBook}
            />
          )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
