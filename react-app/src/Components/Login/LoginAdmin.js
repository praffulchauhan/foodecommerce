import React,{useState} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./LoginAdmin.css";
import UserService from "../Services/UserService"
const LoginAdmin = () => {
const navigate = useNavigate();
var email = "";
var password = "";
const [formErros,setFormErrors] = useState(false)
function submitHandler(event){
event.preventDefault();

UserService.login_user({
"email":email,
"password":password
}).then((response)=>{
  if(response.data.isAdmin){
    setFormErrors(false)
    navigate('/admin/add');
  }else  {setFormErrors(true)}

}).catch((err)=>{console.log(err)});

}

function emailHandler(event){
  
  email = event.target.value;
  
  
  }

  function passwordHandler(event){
    

    password = event.target.value;
    
    
    }

    const setFormErrorButtonInvisible = () => {
      setFormErrors(false)
    }

   


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
          <h2 className="logintext">Login Admin</h2>
          <Link to="/login">
            <button className="btn btn-primary user">User</button>
          </Link>
        </div>
      </div>
      <div className="login">
        <form onSubmit={submitHandler}>
          <h3>Login Admin</h3>
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
              Login
            </button>
          </div>
        </form>
        {formErros && <button type="button" onClick={setFormErrorButtonInvisible} class="btn btn-danger invalid">Invalid Credentials</button>}
      </div>
    </div>
  );
};

export default LoginAdmin;
