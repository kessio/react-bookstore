import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function AddBookForm({
  title, setTitle, author, setAuthor,
}) {
  const dispatch = useDispatch();

  return (
    <div>
      Add Book
      <form>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            dispatch(
              addBook({
                id: Math.floor(Math.random() * 1000),
                title,
                author,
              }),
            );
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

AddBookForm.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  setAuthor: PropTypes.func.isRequired,
};

export default AddBookForm;
