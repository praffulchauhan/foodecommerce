import React from "react";
import "./Signup.css"
import axios from "axios"

const Signup = () => {
  let name = ""
  const nameHandler = (event) => {
    name = event.target.value
  }
  const headers = {
    "Content-Type": 'application/json'
  }
  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/user/signup', {
      "firstname": 'FRiD',
      "lastname": 'Flintstone',
      "email":"fi@gmail.com",
      "password":"123",
    },headers)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  return (
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
            onChange={nameHandler}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
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
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
      </div>
      </div>
    );
};

export default Signup;
