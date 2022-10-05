import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookActionReducer from './books/books';
import categoryActionReducer from './categories/categories';

const reducers = combineReducers({
  book: bookActionReducer,
  status: categoryActionReducer,
});

const store = configureStore({ reducer: reducers });

export default store;
