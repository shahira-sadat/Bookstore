import React from 'react';
import BooksList from './BooksList';
import AddBook from './AddBook';

const books = [
  {
    id: 1,
    category: 'Romance',
    name: 'Purple Love',
    author: 'Suzane Collins',
  },
  {
    id: 2,
    category: 'Science Fiction',
    name: 'Shelock Holmes',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    category: 'Drama',
    name: 'Ava',
    author: 'Suzzane Collins',
  },
];

function BooksContainer() {
  return (
    <div className="container">
      <BooksList books={books} />
      <AddBook />
    </div>
  );
}

export default BooksContainer;
