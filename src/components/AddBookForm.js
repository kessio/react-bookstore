import React from 'react';

function AddBookForm() {
  return (
    <div>
      Add Book
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
      </form>
    </div>
  );
}

export default AddBookForm;
