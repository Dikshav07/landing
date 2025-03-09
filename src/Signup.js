import React from "react";
import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import "./styles.css";

function Signup() {
  return (
    <div className="login_page">
      <div className="form-container">
        <h2 className="title">Create Your Account</h2>
        <form className="form">
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-group">
            <label>Age</label>
            <input type="number" placeholder="Enter your age" />
          </div>
          <div className="input-group">
            <label>Monthly Income</label>
            <input type="number" placeholder="Enter your monthly income" />
          </div>
          <div className="input-group">
            <label>Monthly Expenses</label>
            <input type="number" placeholder="Enter your monthly expenses" />
          </div>
          <div className="input-group">
            <label>Current Credit Score</label>
            <input type="number" placeholder="Enter your credit score" />
          </div>
          <div className="input-group">
            <label>Credit Card Balance</label>
            <input type="number" placeholder="Enter your credit card balance" />
          </div>
          <div className="input-group">
            <label>Loan Balance</label>
            <input type="number" placeholder="Enter your loan balance" />
          </div>
          <button className="sign">Sign Up</button>
        </form>
        <div className="social-message">
          <span className="line"></span>
          <span className="message">Sign up with social accounts</span>
          <span className="line"></span>
        </div>
        <div className="social-icons">
          <button className="icon"><FaGoogle size={24} /></button>
          <button className="icon"><FaTwitter size={24} /></button>
          <button className="icon"><FaGithub size={24} /></button>
        </div>
        <div className="signup">
          Already have an account? <a href="#">Sign in</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
