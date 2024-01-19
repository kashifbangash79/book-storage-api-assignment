import React, { useState } from 'react';
import api from '../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      const response = await api.post('/user/add', formData);
      console.log('Registration successful:', response.data);

      if(response.data.success){
        // Redirect to another page upon successful login
     navigate('/login');
     }
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black mt-4 mb-5" style={{ borderRadius: '25px', backgroundColor: 'rgba(255,255,255,0.3)' }}>
              <div className="card-body p-md-0">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center text-white h1 fw-bold mb-4 mx-1 mx-md-4 mt-5">Sign up</p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            style={{ borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.3)' }}
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="name">Your Name</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            style={{ borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.3)' }}
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="email">Your Email</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            style={{ borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.3)' }}
                            value={formData.password}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="password">Password</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="confirmPassword"
                            className="form-control"
                            style={{ borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.5)' }}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="confirmPassword">Repeat your password</label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-4">
                        <input
                          className="form-check-input me-2 "
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                          style={{ borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.5)' }}
                        />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg" onClick={handleRegister}>
                          Register
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

export default Register;
