import React from 'react';

function AddBookForm({ newBook, setNewBook, newBooks, newAuthor, setNewAuthor }) {

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(newBook);
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

export default AddBookForm;
