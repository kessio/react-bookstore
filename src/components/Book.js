/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Book = ({ title, author }) => (
  <div>
    <h5>{title}</h5>
    <p>{author}</p>
    <Button />

  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
