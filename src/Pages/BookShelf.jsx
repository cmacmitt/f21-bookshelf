import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";
import BookList from "../components/BookList";
import { getBooks, updateBook } from "../services/booksAPI";

const BookShelfPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((books) => setBooks(books));
  }, []);

  const filterBooks = (shelf) => {
    return books.filter((book) => book.shelf === shelf);
  };

  const updateBookHandler = (id, shelf) => {
    updateBook(id, shelf)
      .then(() => getBooks())
      .then((books) => setBooks(books));
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
                <BookList
                  books={filterBooks("currentlyReading")}
                  updateBook={updateBookHandler}
                />
              </BookShelf>
              <BookShelf name={"Want to Read"}>
                <BookList
                  books={filterBooks("wantToRead")}
                  updateBook={updateBookHandler}
                />
              </BookShelf>
              <BookShelf name={"Read"}>
                <BookList
                  books={filterBooks("read")}
                  updateBook={updateBookHandler}
                />
              </BookShelf>
              <BookShelf name={"My Library"}>
                <BookList
                  books={filterBooks("none")}
                  updateBook={updateBookHandler}
                />
              </BookShelf>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookShelfPage;
