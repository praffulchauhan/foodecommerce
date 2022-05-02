import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavLogo.css";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";

function NavLogo() {
  function logout() {
    localStorage.clear();
    window.location.href = "/login";
  }
  const name = localStorage.getItem("LoggedName");

  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://cdn3.vectorstock.com/i/thumb-large/10/77/food-fox-logo-vector-24171077.jpg"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/menu'>Menu</Link>
        </li>
        {name!==null?
        <li class="nav-item">
          <Link class="nav-link" to='/cart'>Cart</Link>
        </li>:""}
      </ul>
    </div>
    <div class="d-flex align-items-center">
      {name!==null?
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {name}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link class="dropdown-item" to='/login'>Log out</Link>
  </div>
  <img src="data:image/png;base64,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"/>
</div>:<div><button class="btn btn-secondary m-1" type="button" aria-haspopup="true" aria-expanded="false">
    <Link className="nav-link active" style={{ color: "white"}} to='/login'>Login</Link>
  </button>
  <button class="btn btn-secondary m-1" type="button"  aria-haspopup="true" aria-expanded="false">
    <Link className="nav-link active" style={{ color: "white"}} to='/signup'>Sign up</Link>
  </button></div>}
      
    </div>
  </div>
</nav>
  );
}

export default NavLogo;

