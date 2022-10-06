/* eslint-disable */
import React, { useState } from 'react';
import AddBookForm from './AddBookForm';
import Book from './Book';
import { useSelector } from 'react-redux';

  const Books = () => {
  const books = useSelector((state) => state.books.value);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
 /* const [newBook, setNewBook] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const newBooks = () => {
    const bookItem = {
      id: Math.floor(Math.random() * 1000),
      title: newBook,
      author: newAuthor,
    };

    if (!newBook || !newAuthor) {
      alert('Book or Author can not be blank!');
      return;
    } 
      setAddedBooks((oldBooks) => [...oldBooks, bookItem]);
      setNewBook("");
    
  };
  */

  return (
    <div>
      {books.map((book) => (
        <Book key = {book.id} id={ book.id } title = {book.title} author = {book.author} />
      ))}
         <AddBookForm title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} />
    </div>
  )
}

export default Books