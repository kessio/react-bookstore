import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';

function AddBookForm({
  title, setTitle, author, setAuthor, category, setCategory,
}) {
  const dispatch = useDispatch();

  return (
    <div>
      Add Book
      <form className="form">
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
        <select
          required
          id="categoryList"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Select Category</option>
          <option>Drama</option>
          <option>Classical</option>
          <option>Fiction</option>
        </select>
        <button
          type="button"
          onClick={() => {
            if (title && author && category) {
              dispatch(
                postBook({
                  id: Math.floor(Math.random() * 1000),
                  title,
                  author,
                  category,
                }),
              );
              document.querySelector('.form').reset();
            }
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
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default AddBookForm;
