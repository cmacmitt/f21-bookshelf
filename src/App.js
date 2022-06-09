import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BookShelfPage from "./Pages/BookShelf";
import SearchPage from "./Pages/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookShelfPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
