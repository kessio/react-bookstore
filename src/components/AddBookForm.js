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
      <div className="form-line" />
      <div className="addbook-form">
        <div className="form-title">ADD NEW BOOK</div>
        <form className="form">
          <input
            type="text"
            className="formfield"
            placeholder="Book Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="formfield"
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <select
            required
            id="categoryList"
            className="formfield"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Select Category</option>
            <option>Action</option>
            <option>Science Fiction</option>
            <option>Economy</option>
          </select>
          <button
            type="button"
            className="submitbook"
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
            Add Book
          </button>
        </form>
      </div>
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
