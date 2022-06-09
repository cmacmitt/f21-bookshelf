import Book from "./Book";

const BookList = ({ books, updateBook }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <Book key={book.id} book={book} updateBook={updateBook} />
      ))}
    </ol>
  );
};

export default BookList;
