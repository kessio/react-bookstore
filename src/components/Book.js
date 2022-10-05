/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  title, author, id, deleteItem,
}) => (
  <div>
    <h5>{title}</h5>
    <p>{author}</p>
    <button type="button" className="btn" onClick={() => deleteItem(id)}>Remove</button>
  </div>
);
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Book;
