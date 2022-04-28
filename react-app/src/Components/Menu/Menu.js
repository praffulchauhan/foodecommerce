import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'
import MenuC from "./MenuC";
import { useState } from "react";
import {Link} from "react-router-dom";
import UserService from "../Services/UserService";

const Menu = () => {

  const indian={};
  const chinese={};
  const mexican = {}


  var [datax,setDatax] = useState([]);

  useEffect(() => {
  
    UserService.get_product()
    .then((res)=>{
      if (res.data !== ''){
        console.log(res.data)
        setDatax(res.data) 
      }
    })
    
  },[])

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

  </div>

)
};

export default Menu;
