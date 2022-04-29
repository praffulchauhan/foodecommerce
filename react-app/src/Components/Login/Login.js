import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios"

const Login = () => {
  const [formErros,setFormErrors] = useState(false)
  const headers = {
    "Content-Type": 'application/json'
  }
  let email=""
  const emailChangeHandler = (event) => {
    email = event.target.value;
  };
  let password = ""
  const passwordChangeHandler = (e) => {
    password = e.target.value;
  };
  const loginHandler = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/user/login', {
      "email":email,
      "password":password
    },headers)
    .then(function (response) {
      if(response.data===false){
      setFormErrors(true)}
      else{
        setFormErrors(false)
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  const setFormErrorButtonInvisible = () => {
    setFormErrors(false)
  }

  return (
    <div>
      <div className="mynav">
        <div className="logo">
          <Link to="/" className="navbar-brand">
            <img
              src="https://cdn3.vectorstock.com/i/thumb-large/10/77/food-fox-logo-vector-24171077.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </Link>
          <h1 className="logintext">Login</h1>
          <Link to="/admin/add">
            <button className="btn btn-primary admin">Admin</button>
          </Link>
        </div>
      </div>
      <div className="login">
        <form onSubmit={loginHandler}>
          <Link to="/"><h3>Login</h3></Link>
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
            Not registered <a href="/signup">Sign Up?</a>
          </p>
        </form>
        {formErros && <button type="button" onClick={setFormErrorButtonInvisible} class="btn btn-danger">Invalid Credentials</button>}
      </div>
    </div>
  );
};

export default Login;
