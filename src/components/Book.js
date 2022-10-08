import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="Lesson-Panel">
      <div>
      <span>Action</span>
      <span>Current Chapter</span>
      </div>
      <h5>{title}</h5>
      <p>{author}</p>
      <button
        type="button"
        id={id}
        onClick={(e) => {
          dispatch(deleteBook(e.target.id));
        }}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
