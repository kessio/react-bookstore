import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookActionReducer from './books/books';
import categoryActionReducer from './categories/categories';

const allReducers = combineReducers({
  books: bookActionReducer,
  status: categoryActionReducer,
});

const store = configureStore({
  reducer: allReducers,
});

export default store;
