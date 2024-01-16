import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onLoginClick = () => {
    // Handle login click
  };

  const onSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="col-lg-6 offset-lg text-center">
        <h1 className="display-4 fw-bold text-light mb-4">
          Welcome to My Bookstore
        </h1>
        <p className="lead text-light">
          Immerse yourself in a universe of captivating stories, thrilling
          adventures, and profound knowledge. At My Bookstore, every book is a
          journey waiting to be explored.
        </p>
        <div>
          <button
            type="button"
            className="btn btn-primary me-2"
            onClick={onLoginClick}
          >
            Explore Now
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onSignupClick}
          >
            Sign Up for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
