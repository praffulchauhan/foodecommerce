import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const emailChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const passwordChangeHandler = (e) => {
    console.log(e.target.value);
  };
  const loginHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="mynav">
        <div className="logo">
          <Link to="/login" className="navbar-brand">
            <img
              src="https://cdn3.vectorstock.com/i/thumb-large/10/77/food-fox-logo-vector-24171077.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </Link>
          <h1 className="logintext">Login</h1>
          <Link to="/login/admin">
            <button className="btn btn-primary admin">Admin</button>
          </Link>
        </div>
      </div>
      <div className="login">
        <form onSubmit={loginHandler}>
          <h3>Login</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={emailChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={passwordChangeHandler}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="forgot-password text-right">
            Not registered <a href="/sign-in">Sign Up?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
