// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import BookList from './components/Books/BookList';
import AddBook from './components/Books/AddBook';
import SearchBooks from './components/Books/SearchBooks';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
      <div className='app-container'>
        <Router>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/books" element={<BookList />} />
      <Route path="/add" element={<AddBook />} />
      <Route path="/search" element={<SearchBooks />} />
    </Routes>
  </Router>
      </div>
  
  );
};

export default App;
