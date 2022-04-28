import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'
import MenuC from "./MenuC";
import { useState } from "react";
import {Link} from "react-router-dom";
import UserService from "../Services/UserService";

const Menu = () => {

var [datax,setDatax] = useState([]);
const [loading, setLoading] = useState(true);

var [full_menu,setFullmenu] = useState([]);
var response=[];

useEffect(() => {
  const fetchData = async () =>{
    setLoading(true);
    try {
      const {data: response} = await UserService.get_product();
      setDatax(response);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  }

  fetchData();
}, []);


console.log(datax);

let pizza = [];
const burger=[];
const indian=[];
const chinese=[];
const mexican=[];
  return(
    <div className="divyansh">
      <nav className="top_space options navbar navbar-expand navbar-light bg-warning">
        <div className="container-fluid">
      
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="left_space">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" onClick={()=>setDatax()}  to='' >Pizzas</Link>
              </li>
              </div>
            <div  className="left_space"> 
              <li className="nav-item">
                <Link className="nav-link" to=''  onClick={()=>setDatax()}>Burgers</Link>
                </li>
              </div>
              <div  className="left_space">
                <li className="nav-item"> 
                <Link className="nav-link" to=''  onClick={()=>setDatax(indian)} >Indian</Link>
                </li>
              </div>
              <div  className="left_space">
                <li className="nav-item"> 
                <Link className="nav-link" to=''  onClick={()=>setDatax(chinese)}>Chinese</Link>
                </li>
              </div>
              <div  className="left_space">
                <li className="nav-item"> 
                <Link className="nav-link" to=''  onClick={()=>setDatax(mexican)}>Mexican</Link>
              </li>
              </div>
          
            </ul>
          
          </div>
        </div>
      </nav>


      <MenuC data={datax}/>

      <Link to='' className='proceed-button btn btn-success'>Proceed to Cart</Link>


  </div>

)
};

export default Menu;
