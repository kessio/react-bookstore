/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types'
import AddBookForm from './AddBookForm';
import Book from './Book';

  const Books = ({ books }) => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div>
      {books.map((book) => (
        <Book key = {book.item_id} id={book.item_id} title = {book.title} author = {book.author} />
      ))}
         <AddBookForm title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} category={category} setCategory={setCategory} />
    </div>
  )
}

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
}
export default Books