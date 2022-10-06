/* eslint-disable */
import React from 'react';
import AddBookForm from './AddBookForm';
import Book from './Book';
import { useSelector } from 'react-redux';

const Books = () => {
  const books = useSelector((state) => state.books.value);
  return (
    <div>
      {books.map((book) => (
        <Book key = {book.id} title = {book.title} author = {book.author} />
      ))}
       <AddBookForm />
    </div>
  )
}

export default Books