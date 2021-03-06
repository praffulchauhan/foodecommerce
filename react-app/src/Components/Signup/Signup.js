import React from "react";

import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../Services/UserService";

const Signup = () => {
  let firstname = "";
  let lastname = "";
  let email = "";
  let password = "";

  const navigate = useNavigate();

  const firstnameHandler = (event) => {
    firstname = event.target.value;
  };
  const lastnameHandler = (event) => {
    lastname = event.target.value;
  };
  const emailHandler = (event) => {
    email = event.target.value;
  };
  const passwordHandler = (event) => {
    password = event.target.value;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    UserService.signup_user({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    })
      .then(function (response) {
        console.log(response);
        localStorage.setItem("LoggedId", response.data._id);
        localStorage.setItem("LoggedName", response.data.firstname);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="my">
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
          <h3 className="logintext">Signup User</h3>
          <Link to="/admin">
            <button className="btn btn-primary admin">Admin</button>
          </Link>
        </div>
      </div>
      <div className="App">
        <div className="signup">
          <form onSubmit={submitHandler} method="POST">
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
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={lastnameHandler}
              />
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
