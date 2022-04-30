import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="myadmin">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img
            src="https://cdn3.vectorstock.com/i/thumb-large/10/77/food-fox-logo-vector-24171077.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          <span className="logo">Admin dashboard</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse navProfile"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/admin/add" className="nav-link">
                Add Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/list" className="nav-link">
                List Product
              </Link>
            </li>
            <li className="nav-item marginx">
              <Link to="/" className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Admin;
