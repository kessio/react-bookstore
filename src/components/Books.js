/* eslint-disable */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddBookForm from './AddBookForm';
import Book from './Book';

  const Books = () => {
  const books = useSelector((state) => state.books.value);
  console.log(books);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div>
      {books.map((book) => (
        <Book key = {book.id} id={ book.id } title = {book.title} author = {book.author} />
      ))}
         <AddBookForm title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} category={category} setCategory={setCategory} />
    </div>
  )
}

export default Books