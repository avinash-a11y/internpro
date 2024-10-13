import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
const signUp = () => {
  return (
    <div>
      <div className="containers">
        <div className="cards">
          <div className="card_title">
            <h1>Create Account</h1>
            <span>
              Already have an account? <Link to="/login">Sign In</Link>
            </span>
          </div>
          <div className="form">
            <div>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="UserName"
              />
              <input type="email" name="email" placeholder="Email" id="email" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
              />
              <Link to={"/maincontent"}>
                <button>Sign Up</button>
              </Link>
            </div>
          </div>
          <div className="card_terms">
            <input type="checkbox" name="" id="terms" />{" "}
            <span>
              I have read and agree to the <a href="">Terms of Service</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signUp;
