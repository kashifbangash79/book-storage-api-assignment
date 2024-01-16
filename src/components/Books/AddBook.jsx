// components/Books/AddBook.js
import React, { useState } from 'react';
import api from '../../services/api';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    // Add other book fields as needed
  });

  const handleAddBook = async () => {
    try {
      const response = await api.post('/books/add', formData);
      console.log('Book added successfully:', response.data);
    } catch (error) {
      console.error('Error adding book:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form>
        <label>
          Title:
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          />
        </label>
        <br />
        {/* Add other input fields for additional book information as needed */}
        <br />
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
