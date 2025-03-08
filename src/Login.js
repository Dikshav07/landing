import React from "react";
import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import "./styles.css";

function Login() {
  return (
    <div className="login_page">
      <div className="form-container">
        <h2 className="title">Sign In</h2>
        <form className="form">
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>
          <button className="sign">Sign In</button>
        </form>
        <div className="social-message">
          <span className="line"></span>
          <span className="message">Login with social accounts</span>
          <span className="line"></span>
        </div>
        <div className="social-icons">
          <button className="icon"><FaGoogle size={24} /></button>
          <button className="icon"><FaTwitter size={24} /></button>
          <button className="icon"><FaGithub size={24} /></button>
        </div>
        <div className="signup">
          Don't have an account? <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
