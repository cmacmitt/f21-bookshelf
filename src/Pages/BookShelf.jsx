import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";
import BookList from "../components/BookList";

const BookShelfPage = ({ books }) => {
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
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookShelfPage;
