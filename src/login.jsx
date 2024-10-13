import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
const Login = () => {
  return (
    <div>
      <div className="containers">
        <div className="cards">
          <div className="card_title">
            <h1 className="h1-padd">Sign In</h1>
            <span>
              Dont have an account? <Link to="/">Sign up</Link>
            </span>
          </div>
          <div className="form">
            <div>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="UserName or email"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
              />
              <Link to={"/maincontent"}>
                <button>Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
