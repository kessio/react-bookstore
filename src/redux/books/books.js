import { createSlice } from '@reduxjs/toolkit';

const books = [{
  id: 1,
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
},
{
  id: 2,
  title: 'Animal Farm',
  author: 'George Orwell',
},
{
  id: 3,
  title: 'Jane Eyre',
  author: 'Charlotte Brontë',
}];

export const booksSlice = createSlice({
  name: 'books',
  initialState: { value: books },
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },
    deleteBook: (state, action) => { // eslint-disable-next-line
      state.value = state.value.filter((book) => book.id !== action.payload.id);  
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
