import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage/Home';
import Admin from './Components/Admin/Admin';
import AddProduct from './Components/Admin/AddProduct';
import ListProduct from './Components/Admin/ListProduct';
import Signup from './Components/Signup/Signup';
function App() {
  return (
    <div >
      <Signup/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin/add' element={<AddProduct/>}/>
        <Route path='/admin/list' element={<ListProduct/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
