/* eslint-disable */
import React, { useState } from 'react';
import AddBookForm from './AddBookForm';
import Book from './Book';

const Books = () => {
  const [newBook, setNewBook] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [books, setAddedBooks] = useState([
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
  const deleteItem = (id) => {
    const newArray = books.filter((book) => book.id !== id);
    setAddedBooks(newArray);
  }

  return (
    <div>
      {books.map((book) => (
        <Book key = {book.id} id={ book.id } title = {book.title} author = {book.author} deleteItem = {deleteItem}/>
      ))}
       <AddBookForm newBook = { newBook } setNewBook = { setNewBook } newAuthor = { newAuthor } setNewAuthor = { setNewAuthor }  newBooks = { newBooks } />
    </div>
  )
}

export default Books