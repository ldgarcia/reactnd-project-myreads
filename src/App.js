import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    shelvedBooks: [],
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        shelvedBooks: books
      })
    })
  }

  changeShelf = (book, oldShelf, newShelf) => {
    /* We first update the book's shelf */
    BooksAPI.update(book, newShelf).then((response) => {
      /* Reload the book's data */
      BooksAPI.get(book.id).then((book) => {
        const { shelvedBooks } = this.state
        const excludeBook = (b) => b.id !== book.id
        /* We need to add a new book to a shelf */
        if (oldShelf === 'none') {
          this.setState({ shelvedBooks: shelvedBooks.concat([ book ])})
        }
        /* We need to remove a book from a shelf */
        else if (newShelf === 'none') {
          this.setState({ shelvedBooks: shelvedBooks.filter(excludeBook)})
        }
        /* We need to move a book between shelves */
        else {
          this.setState({ shelvedBooks: shelvedBooks.filter(excludeBook).concat([ book ])})
        }
      })
    })
  }

  render() {
    const { shelvedBooks } = this.state

    return (
      <BrowserRouter>
        <div className="app">
          <Route path='/' exact render={() => (
            <ListBooks
              shelvedBooks={ shelvedBooks }
              onShelfChange={this.changeShelf}
            />
          )} />
          <Route path='/search' exact render={() => (
            <SearchBooks
              shelvedBooks={ shelvedBooks }
              onShelfChange={this.changeShelf}
            />
          )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
