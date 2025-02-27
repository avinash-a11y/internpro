import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={"/"}>
            <a className="navbar-brand" href="#">
              InternProject
            </a>
          </Link>
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
            <ul className="navbar-nav ms-md-auto gap-2">
              <li className="nav-item rounded">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="bi bi-house-fill me-2"></i>Home
                </a>
              </li>
              <li className="nav-item rounded">
                <a className="nav-link" href="#">
                  <i className="bi bi-people-fill me-2"></i>About
                </a>
              </li>
              <li className="nav-item rounded">
                <a className="nav-link" href="#">
                  <i className="bi bi-telephone-fill me-2"></i>Contact
                </a>
              </li>
              <li className="nav-item dropdown rounded">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill me-2"></i>Profile
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <h2>Main Content</h2>
      </div>
      <div className="bg-dark text-white">
        <p className="text-center p-4 m-0">Created by Avinash</p>
      </div>
    </div>
  );
};

export default navbar;
