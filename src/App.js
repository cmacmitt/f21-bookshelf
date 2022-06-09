import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getBooks } from "./services/booksAPI";
import "./App.css";
import BookShelfPage from "./Pages/BookShelf";
import SearchPage from "./Pages/Search";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((books) => setBooks(books));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookShelfPage books={books} />} />
        <Route
          path="/search"
          element={<SearchPage children={<BookList books={books} />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
