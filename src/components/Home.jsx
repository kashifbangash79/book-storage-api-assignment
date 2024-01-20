import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");

  const onLoginClick = () => {
    // Check if the token exists
    if (storedToken) {
      // You can use the token for further operations, such as including it in headers for API requests
      console.log("Token from localStorage:", storedToken);
      navigate("/search");
    } else {
      console.log("Token not found in localStorage");
      navigate("/login");
    }
  };

  const onSignupClick = () => {
    navigate("/signup");
  };

  const onLogoutClick = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    console.log("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="container-fluid vh-100 ">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            My Bookstore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-outline-light me-2"
                  onClick={onLoginClick}
                >
                  Explore Now
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={onSignupClick}
                >
                  Sign Up for Free
                </button>
              </li>
              {storedToken ? (
                <>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-outline-danger ms-2"
                      onClick={onLogoutClick}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-outline-danger ms-2"
                      onClick={onLoginClick}
                    >
                      Login
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="col-lg-6 offset-lg text-center">
          <h1 className="display-4 fw-bold text-white mb-4">
            Welcome to My Bookstore
          </h1>
          <p className="lead text-white">
            Immerse yourself in a universe of captivating stories, thrilling
            adventures, and profound knowledge. At My Bookstore, every book is a
            journey waiting to be explored...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
