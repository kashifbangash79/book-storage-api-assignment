// components/Auth/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import api from "../../services/api";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await api.post("/user/login", formData);
      console.log("Registration successful:", response.data);

      const token = response.data.token;
      // Set the token into localStorage
      localStorage.setItem("token", token);

      if (response.data.success) {
        // Redirect to another page upon successful login
        navigate("/search");
      }
    } catch (error) {
      console.error("Registration failed:", error.response.data.message);
    }
  };

  return (
    <section>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div
              className="card text-black mt-5"
              style={{
                borderRadius: "15px",
                backgroundColor: "rgba(255,255,255,0.5)",
              }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login!
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            style={{
                              borderRadius: "15px",
                              backgroundColor: "rgba(255,255,255,0.5)",
                            }}
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="email">
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            style={{
                              borderRadius: "15px",
                              backgroundColor: "rgba(255,255,255,0.5)",
                            }}
                            value={formData.password}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <a href="#!">Forgot password?</a>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={handleLogin}
                        >
                          Login!
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
