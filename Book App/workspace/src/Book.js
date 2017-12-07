import React, { Component } from "react";

class Book extends Component {
  render() {
    //props here
    const { statusOfBooks } = this.props;
    
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {statusOfBooks.length > 0 &&
            statusOfBooks.map(statusOfBook => (
              <li key={statusOfBook.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        backgroundImage: 'url('+statusOfBook.imageLinks.thumbnail+')'
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        name="shelf"
                        onChange={e => this.props.moveToNewShelf(e, statusOfBook)}
                        value={statusOfBook.shelf}
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
                    {statusOfBook.title}
                  </div>
                  <div className="book-authors">
                    {statusOfBook.authors
                      ? statusOfBook.authors.join(", ")
                      : ""}
                  </div>
                </div>
              </li>
            ))}
        </ol>
      </div>
    );
  }
}

export default Book;