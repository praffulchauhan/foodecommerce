import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import AddProduct from "./Components/Admin/AddProduct";
import ListProduct from "./Components/Admin/ListProduct";
import Signup from "./Components/Signup/Signup";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Cart/Cart";
import EditProduct from "./Components/Admin/EditProduct";
import Login from "./Components/Login/Login";
import LoginAdmin from "./Components/Login/LoginAdmin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<LoginAdmin/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/admin/add" element={<AddProduct />} />
        <Route path="/admin/list" element={<ListProduct />} />
        <Route path="/admin/edit/:id" element={<EditProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
