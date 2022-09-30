/* eslint-disable */
import React, { useState } from 'react';
import Book from './Book';

const Books = () => {
  const [books, addBook] = useState([
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
    {
      id: 2,
      title: 'Animal Farm',
      author: 'George Orwell',
    },
    {
      id: 3,
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
    },
  ]);
  return (
    <div>
      {books.map((book) => (
        <Book key = {book.id} title = {book.title} author = {book.author} />
      ))}

    </div>
  )
}

export default Books