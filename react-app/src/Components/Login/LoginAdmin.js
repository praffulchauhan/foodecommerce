import React from "react";
import { Link } from "react-router-dom";
import "./LoginAdmin.css";

const LoginAdmin = () => {
  return (
    <div>
      <div className="mynav">
        <div className="logo">
          <Link to="/login/admin" className="navbar-brand">
            <img
              src="https://cdn3.vectorstock.com/i/thumb-large/10/77/food-fox-logo-vector-24171077.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </Link>
          <h2 className="logintext">Admin Login</h2>
          <Link to="/login">
            <button className="btn btn-primary user">User</button>
          </Link>
        </div>
      </div>
      <div className="login">
        <form>
          <h3>Admin Login</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
