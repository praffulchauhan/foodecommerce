import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/HomePage/Home";
import Admin from "./Components/Admin/Admin";
import AddProduct from "./Components/Admin/AddProduct";
import ListProduct from "./Components/Admin/ListProduct";
import Signup from "./Components/Signup/Signup";
import LoginAdmin from "./Components/Login/LoginAdmin";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menu" element={<Menu />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route path="/admin/add" element={<AddProduct />} />
        <Route path="/admin/list" element={<ListProduct />} />
      </Routes>
    </div>
  );
}

export default App;
