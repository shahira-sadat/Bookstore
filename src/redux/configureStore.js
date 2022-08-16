import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import Categories from './categories/categories';
import books from './List_books';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: Categories,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: books,
});

export default store;
