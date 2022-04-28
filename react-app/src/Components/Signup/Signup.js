import React from "react";

import "./Signup.css"
import axios from "axios"
import { Link } from "react-router-dom";


const Signup = () => {
  let firstname = ""
  let lastname=""
  let email=""
  let password=""
  const firstnameHandler = (event) => {
    firstname = event.target.value
  }
  const lastnameHandler = (event) => {
    lastname = event.target.value
  }
  const emailHandler = (event) => {
    email = event.target.value
  }
  const passwordHandler = (event) => {
    password = event.target.value
  }
  const headers = {
    "Content-Type": 'application/json'
  }
  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/user/signup', {
      "firstname": firstname,
      "lastname": lastname,
      "email":email,
      "password":password,
    },headers)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
    <div className="App">
      
      <div className="signup">
        <form onClick={submitHandler} method="POST">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={firstnameHandler}
            />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" onChange={lastnameHandler}/>
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={emailHandler}
            />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={passwordHandler}
            />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">Log in?</Link>
        </p>
      </form>
      </div>
      </div>
    </div>
    );
};

export default Signup;
