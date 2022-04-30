import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./Login.css";
import UserService from "../Services/UserService";


const Login = () => {
  const navigate = useNavigate()
  const [formErros,setFormErrors] = useState(false)
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
    UserService.login_user({
      "email":email,
      "password":password
    })
    .then(function (response) {
      if(response.data===false){
      setFormErrors(true)}
      else{
        setFormErrors(false)
        localStorage.setItem('LoggedId',response.data._id)
        localStorage.setItem('LoggedName',response.data.firstname)
        navigate('/')
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
          <h2 className="logintext">Login User</h2>
          <Link to="/admin">

            <button className="btn btn-primary admin">Admin</button>
          </Link>
        </div>
      </div>
      <div className="login">
        <form onSubmit={loginHandler}>
          <h3>Login User</h3>
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
