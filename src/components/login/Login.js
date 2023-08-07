import React, { useState } from 'react';
import './Login.css'; // Create a CSS file named Login.css and link it here
import Navbar from '../navbar/Navbar';
const Login = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  const toggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <header className="registration-header">
      <main>
        <section className={`user-container ${isLoginFormVisible ? 'login-section--display' : ''}`}>
          <div className="registration">
            <div className="grid-two--column">
              <div className="form-text">
                {isLoginFormVisible ? (
                  <>
                    <h2>Welcome Back</h2>
                    <p>To Connect With Us Please Login With Personal Account</p>
                    <button className="login-btn" onClick={toggleForm}>
                      Login Here
                    </button>
                  </>
                ) : (
                  <>
                    <h2>Hello, Friend</h2>
                    <p>Enter Your Personal Detail And Start Journey With Us</p>
                    <button className="registration-btn" onClick={toggleForm}>
                      Register Here
                    </button>
                  </>
                )}
              </div>
              <div className="registration-form">
                <h2>{isLoginFormVisible ? 'sign in Account' : 'Create Account'}</h2>
                <div className="social-account">
                  <a href="">
                    <i className="fa-brands fa-discord"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
                <p>or Use Your {isLoginFormVisible ? 'Account' : 'Email'} For {isLoginFormVisible ? 'Login' : 'Registration'}</p>
                <form action="">
                  <div className="input-field">
                    <label htmlFor="username">
                      <input type="text" name="" id="username" placeholder="Name" />
                    </label>
                  </div>
                  <div className="input-field">
                    <label htmlFor="Email">
                      <input type="email" name="" id="Email" placeholder="Email" />
                    </label>
                  </div>
                  <div className="input-field">
                    <label htmlFor="Password">
                      <input type="password" name="" id="Password" placeholder="Password" />
                    </label>
                  </div>
                  <div className="input-field">
                    <input type="submit" name="" id="submit" value={isLoginFormVisible ? 'Login' : 'Register'} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </header>
  );
};

export default Login;
