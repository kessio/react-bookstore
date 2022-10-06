import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookActionReducer from './books/books';
import categoryActionReducer from './categories/categories';

const allReducers = combineReducers({
  book: bookActionReducer,
  status: categoryActionReducer,
});

const store = configureStore({
  reducer: allReducers
  + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
});

export default store;
