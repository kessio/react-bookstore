/* eslint-disable */
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { books } from './booksData';
import axios from './axios';

// apiid = QE7cLHhy2wV1igTE5bSE
const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QE7cLHhy2wV1igTE5bSE/books';

export const removeBook = createAsyncThunk(
  'book/removeBook',
  async (bookId) => {
    try {
      const revBook = await axios.delete(`${api}/${bookId}`);
      return revBook.data;
    } catch (error) {
      return error?.response;
    }
  },
);

export const fetchBooks = createAsyncThunk(
  'book/fetchBooks',
  async () => (await axios.get(api)).data,
);

export const postBook = createAsyncThunk(
  'book/postBook',
  async (book) => (
    await axios.post(api, {
      item_id:  Math.floor(Math.random() * 1000),
      title: book.title,
      author: book.author,
      category: book.category,
    })
  ).data,
);

const booksSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      const books = Object.keys(action.payload).map((item) => ({
        item_id: item,
        ...action.payload[item][0],
      }));
      return books;
    },
    [fetchBooks.rejected]: (state, action) => action.error.message,
    [postBook.fulfilled]: (state, action) => [...state, action.payload],
    [postBook.rejected]: (state, action) => action.error.message,
    /* eslint-disable */
    [removeBook.fulfilled]: (state, action) =>
      state.filter((item) => item.item_id !== action.meta.arg),
    [removeBook.rejected]: (state, action) => action.error.message,
  },
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
