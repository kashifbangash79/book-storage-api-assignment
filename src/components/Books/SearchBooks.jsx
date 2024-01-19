import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


const SearchBooks = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
      const data = response.data.items || [];

      // Log the API response to the console
      console.log(data);

      // Extract relevant book information from the API response
      const formattedBooks = data.map(item => ({
        id: item.id,
        title: item.volumeInfo?.title || 'Title Not Available',
        author: item.volumeInfo?.authors?.join(', ') || 'Unknown Author',
        image: item.volumeInfo?.imageLinks?.thumbnail || null,
      }));
      console.log('Formatted Books:', formattedBooks);

      setSearchResults(formattedBooks);
    } catch (error) {
      console.error('Error searching books:', error.message);
    }
  };

  const handleLogout = () => {
    // Implement your logout logic here
     // Remove the token from localStorage
     localStorage.removeItem("token");
     console.log("Logged out successfully");
     navigate("/");
  };

  return (
    <div>
     <Navbar bg="light" expand="lg">
  <Navbar.Brand as={Link} to="/">
    <strong>Book Store</strong>
  </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"></Nav>

    <Form style={{ display: 'inline-flex' }}>
  <FormControl
    type="text"
    className="mr-sm-2 justify-content-between"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search for any book"
    style={{ width: '600px' }} // Set the width of the search bar
  />
  <Button className="ml-2" variant="outline-success" onClick={handleSearch}>
    <FontAwesomeIcon icon={faSearch} />
  </Button>
</Form>

    <Nav className="" style={{marginLeft:"400px"}}>
      <Button variant="outline-danger" onClick={handleLogout}>
        Logout <FontAwesomeIcon icon={faSignOutAlt} />
      </Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      {/* Display search results */}
      <div className="container mt-3" style={{ overflowY: 'auto' }}>
        <h3 className="mb-4">Search Results</h3>
        {searchResults.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {searchResults.map(book => (
              <div key={book.id} className="col mb-4">
                <div className="card h-100">
                  {book.image && (
                    <img
                      src={book.image}
                      className="card-img-top"
                      alt={book.title}
                      style={{ maxWidth: '100%', height: '250px' }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">Author: {book.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBooks;
