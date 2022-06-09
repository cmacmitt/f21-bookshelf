import { useState, useEffect } from "react";
import { getBooks } from "./services/booksAPI";
import "./App.css";
import BookShelf from "./components/BookShelf";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((books) => setBooks(books));
  }, []);

  const filterBooks = (shelf) => {
    return books.filter((book) => book.shelf === shelf);
  };

  return (
    <>
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MITTReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf name={"Currently Reading"}>
                <BookList books={filterBooks("currentlyReading")} />
              </BookShelf>
              <BookShelf name={"Want to Read"}>
                <BookList books={filterBooks("wantToRead")} />
              </BookShelf>
              <BookShelf name={"Read"}>
                <BookList books={filterBooks("read")} />
              </BookShelf>
              <BookShelf name={"My Library"}>
                <BookList books={filterBooks("none")} />
              </BookShelf>
            </div>
          </div>
          <div className="open-search">
            <a href="search.html">Add a book</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
