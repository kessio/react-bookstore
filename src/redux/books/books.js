const ADD_BOOK = 'REACT-BOOKSTORE/src/redux/books/ADD_BOOK';
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
