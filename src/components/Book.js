/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Book = ({ book }) => (
  <div>
    <h5>{book.title}</h5>
    <p>{book.author}</p>
    <Button />

  </div>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
