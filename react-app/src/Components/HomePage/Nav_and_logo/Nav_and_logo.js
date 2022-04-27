import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav_and_logo.css'
function Nav_and_logo() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <div className='margin'> <img src="https://cdn3.vectorstock.com/i/thumb-large/10/77/food-fox-logo-vector-24171077.jpg" width="70px"/></div>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="margin collapse navbar-collapse"  id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cart</a>
        </li>
        <div>
        <li className=" margin2 nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
 </div>
 <div>
        <li className="nav-item">
          <a className="nav-link" href="#">Sign Up</a>
        </li>
 </div>

      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav_and_logo