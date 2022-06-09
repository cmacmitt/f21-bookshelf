import { useState, useEffect } from "react";
import BookList from "../components/BookList";
import { Link } from "react-router-dom";
import { searchBooks } from "../services/booksAPI";
import { updateBook } from "../services/booksAPI";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    searchBooks(query).then((books) => setBooks(books));
  }, [query]);

  const updateBookHandler = (id, shelf) => {
    updateBook(id, shelf)
      .then(() => searchBooks(query))
      .then((books) => setBooks(books));
  };

  return (
    <>
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <div className="results-quantity">
              Your search returned {books.length} result
              {books.length === 1 ? "" : "s"}.
            </div>
            <BookList books={books} updateBook={updateBookHandler} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
