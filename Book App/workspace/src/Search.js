import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'

class Search extends Component {

  state = {
    query: '',
    searchResult: {}
  }

  updateQuery = (query) => {
    const { books } = this.props
    this.setState({query: query})
    if (query !== '') {
      BooksAPI.search(query).then((searchResult) => {

        if (!searchResult || searchResult.error) {
          this.setState({searchResults: {}});
          return;
        }
        searchResult = searchResult.map((book) => {
          const bookOnShelf = books.find(b => b.id === book.id);
          book.shelf = bookOnShelf
            ? bookOnShelf.shelf
          : "none";
          return book;
        });
        
        this.setState({ searchResult })
      }) 
    }else {
    	this.setState({
        	searchResult: {}
        })
    }
  }

  clearQuery = () => {
    this.setState({query: ''})
  }
  
  render() {
    const { query } = this.state
	let searchResult = this.state.searchResult


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"             
      			value={query}
            	onChange={(event) => this.updateQuery(event.target.value)}/>

          </div>
        </div>
		
        <div className="search-books-results">
          <ol className="books-grid">
			{(searchResult.length > 0 && searchResult !==undefined) && 
             	searchResult.map(book => (

              <li key={book.id} >
                <div className="book">
                  <div className="book-top">
                    <div 
                      className="book-cover"
                      style={{
                        backgroundImage: 'url('+ (book.imageLinks === undefined ? 'http://via.placeholder.com/128x193?text=No%20Cover' : book.imageLinks.thumbnail)+')'
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        name="shelf"
                        onChange={e => this.props.moveToNewShelf(e, book)}
                        value={book.shelf}
                      >
                        <option value="none" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">
                          Want to Read
                        </option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">
                    {book.title}
                  </div>
                  <div className="book-authors">
                    {book.authors
                      ? book.authors.join(", ")
                      : ""}
                  </div>
                </div>
              </li>				
             ))}

			</ol>
        </div>
      </div>
    )
  }
}

export default Search

