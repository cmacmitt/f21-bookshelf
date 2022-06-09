import BookList from "./BookList";

const BookShelf = ({ name, children }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">{children}</div>
    </div>
  );
};

export default BookShelf;
