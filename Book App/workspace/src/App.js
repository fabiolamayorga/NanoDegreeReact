import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import Search from './Search'

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }
	
  moveToNewShelf = (e, book) =>{
    var newShelf = e.target.value;
    book.shelf = newShelf;
    this.setState(state => ({
      books: state
        .books
        .filter(b => b.id !== book.id)
        .concat([book])
    }))
    BooksAPI.update(book, newShelf)

  }

  componentDidMount() {
  	BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks 
            books={this.state.books} 
            moveToNewShelf={this.moveToNewShelf}
            />
        )}/>
        <Route path='/search' render={({ history }) => (
          <Search
            onSearch={(book) => {
              this.searchBook(book)
              history.push('/')
            }}
            books={this.state.books} 
			moveToNewShelf={this.moveToNewShelf}

          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
