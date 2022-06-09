import Book from "./Book";

const BookList = ({ books }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </ol>
  );
};

export default BookList;