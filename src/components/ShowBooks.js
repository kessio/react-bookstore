import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import Books from './Books';

const ShowBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [books.length, dispatch]);

  return (
    <div className="displayContainer">
      {books.length > 0 ? (
        <Books books={books} />
      ) : (
        <h3 className="bookContainer">The store is empty</h3>
      )}
    </div>
  );
};

export default ShowBooks;
