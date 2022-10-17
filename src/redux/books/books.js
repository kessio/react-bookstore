import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QE7cLHhy2wV1igTE5bSE/books';

const initialState = [];

export const fetchBooks = createAsyncThunk(
  'book/fetchBooks',
  async () => (await axios.get(api)).data,
);

export const postBook = createAsyncThunk(
  'book/postBook',
  async (book) => (
    await axios.post(api, {
      item_id: Math.floor(Math.random() * 1000),
      title: book.title,
      author: book.author,
      category: book.category,
    })
  ).data,
);

export const deleteBook = createAsyncThunk(
  'book/deleteBook',
  async (bookId) => {
    try {
      const revBook = await axios.delete(`${api}/${bookId}`);
      return revBook.data;
    } catch (error) {
      return error?.response;
    }
  },
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
    [deleteBook.fulfilled]: (state, action) =>
      state.filter((item) => item.item_id !== action.meta.arg),
    [deleteBook.rejected]: (state, action) => action.error.message,
  },
});

export default booksSlice.reducer;
