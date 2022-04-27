import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <form>
        <h3>Login</h3>
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
        <p className="forgot-password text-right">
          Not registered <a href="/sign-in">Sign Up?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
