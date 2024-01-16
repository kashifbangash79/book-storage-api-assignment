// components/Books/SearchBooks.js
import React, { useState } from 'react';
import api from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBooks = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await api.get(`/books/search/${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching books:', error.response.data.message);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Book Store</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <form className="form-inline my-2 my-lg-0">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control mr-sm-3"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder='Search for any book'
                      style={{ width: '300px' }} // Adjust the width as needed
                    />
                  </div>
                  <div className="col-auto">
                    <button
                      type="button"
                      className="btn btn-outline-secondary my-2 my-sm-0"
                      onClick={handleSearch}
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SearchBooks;
