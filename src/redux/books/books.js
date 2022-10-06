import { createSlice } from "@reduxjs/toolkit";
import books from './booksData';

export const booksSlice = createSlice ({
  name: "books",
  initialState: {value: books},
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.value = state.value.filter(book => book.id !== action.payload.id)
    }
  }
})

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;




/*const ADD_BOOK = 'REACT-BOOKSTORE/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'REACT-BOOKSTORE/src/redux/books/REMOVE_BOOK';

const addBookAction = (book) => ({
  type: ADD_BOOK,
  book,
});

const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookActionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      // Adding a book
      return state.push(action.book);
    case REMOVE_BOOK:
      // Remove
      return [state.filter((book) => book !== action.id)];
    default:
      return state;
  }
};

export default { bookActionReducer, addBookAction, removeBookAction };
*/