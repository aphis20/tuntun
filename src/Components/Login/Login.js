import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Login = () => {
  // State variables for managing form data
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  // Hook for navigation
  const navigate = useNavigate();
  
  // Effect hook to check if user is already logged in
  useEffect(() => {
    if (sessionStorage.getItem('auth-token')) {
      navigate('/');
    }
  }, [navigate]); // Include navigate in the dependency array
  
  // Function to handle form submission and API call
  const login = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const json = await res.json();
    if (json.authtoken) {
      // Save authentication token and email in sessionStorage
      sessionStorage.setItem('auth-token', json.authtoken);
      sessionStorage.setItem('email', email);
      
      // Redirect to Home page
      navigate('/');
      window.location.reload();
    } else {
      // Display error messages
      if (json.errors) {
        for (const error of json.errors) {
          alert(error.msg);
        }
      } else {
        alert(json.error);
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="login-grid">
          <div className="login-text">
            <h2>Login</h2>
          </div>
          <div className="login-text">
            Are you a new member?{' '}
            <span>
              <Link to="/signup" style={{ color: '#2190FF' }}>
                {' '}
                Sign Up Here
              </Link>
            </span>
          </div>
          <br />
          <div className="login-form">
            <form onSubmit={login}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                {/* Email input field */}
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-describedby="helpId"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                {/* Password input field */}
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                />
              </div>
              <div className="btn-group">
                <button
                  type="submit"
                  className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
