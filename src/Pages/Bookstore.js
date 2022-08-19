import React from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/Booklist';

function Books() {
  return (
    <div className="app-container">
      <BookList />
      <BookForm />
    </div>
  );
}

export default Books;
