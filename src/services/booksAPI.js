export const getBooks = async () => {
  const response = await fetch("http://localhost:3010/books");
  const data = await response.json();
  return data;
};
