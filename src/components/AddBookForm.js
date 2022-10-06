import React from 'react';
import PropTypes from 'prop-types';

function AddBookForm({
  newBook, setNewBook, newBooks, newAuthor, setNewAuthor,
}) {
  const onSubmit = (e) => {
    e.preventDefault();
    newBooks();
  };

  return (
    <div>
      Add Book
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

AddBookForm.propTypes = {
  newBook: PropTypes.string.isRequired,
  setNewBook: PropTypes.func.isRequired,
  newBooks: PropTypes.func.isRequired,
  newAuthor: PropTypes.string.isRequired,
  setNewAuthor: PropTypes.func.isRequired,
};

export default AddBookForm;
