import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'
import MenuC from "./MenuC";
import { useState } from "react";
import {Link} from "react-router-dom";
import UserService from "../Services/UserService";
import NavLogo from "../HomePage/NavLogo/NavLogo";

const Menu = () => {

var [datax,setDatax] = useState([]);
const [loading, setLoading] = useState(true);
var [resp,setResp] = useState([]);
var [full_menu,setFullmenu] = useState([]);
var response2 = [];
var pizza = [];
useEffect(() => {
  const fetchData = async () =>{
    setLoading(true);
    try {
      const {data: response} = await UserService.get_product();
      console.log(response)
      setDatax(response);
      setResp(response);
    } catch (error) {
      console.error(error.message);
    }
 
    setLoading(false);
  }

  fetchData();
}, []);


function filt_p(){
  pizza = resp.filter(function (e) {
    return e.category == "Pizza";
  });

  setDatax(pizza)
}



var burger=[];
function filt_b(){
  burger = resp.filter(function (e) {
    return e.category == "Burger";
  });

  setDatax(burger)
}
var indian=[];
function filt_i(){
  indian = resp.filter(function (e) {
    return e.category == "Indian";
  });

  setDatax(indian)
}
var chinese=[];
function filt_c(){
  chinese = resp.filter(function (e) {
    return e.category == "Chinese";
  });

  setDatax(chinese)
}


var mexican=[];
function filt_m(){
  mexican = resp.filter(function (e) {
    return e.category == "Mexican";
  });

  setDatax(mexican)
}

var best_cuisine = [];
function filt_best(){
  best_cuisine = resp.filter(function (e) {
    return e.category == "POPULAR_CUISINES";
  });

  setDatax(best_cuisine)
}

var best_sellers = [];
function filt_bests(){
  best_sellers = resp.filter(function (e) {
    return e.category == "BEST_SELLERS";
  });

  setDatax(best_sellers)
}

function final_func(x){

console.log(x)

}



  return(
    <div>
      <NavLogo/>
    <div className="divyansh">
      <nav className="top_space options navbar navbar-expand navbar-light bg-warning">
        <div className="container-fluid">
      
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="left_space">
              <li className="nav-item">
   <Link className="nav-link" aria-current="page" onClick={filt_p}  to='' >Pizzas</Link>
              </li>
              </div>
            <div  className="left_space"> 
              <li className="nav-item">
                <Link className="nav-link" to=''  onClick={filt_b}>Burgers</Link>
                </li>
              </div>
              <div  className="left_space">
                <li className="nav-item"> 
                <Link className="nav-link" to=''  onClick={filt_i} >Indian</Link>
                </li>
              </div>
              <div  className="left_space">
                <li className="nav-item"> 
                <Link className="nav-link" to=''  onClick={filt_c}>Chinese</Link>
                </li>
              </div>
              <div  className="left_space">
                <li className="nav-item"> 
                <Link className="nav-link" to=''  onClick={filt_m}>Mexican</Link>
              </li>
              </div>
              <div  className="left_space">
                <li className="nav-item"> 
                <Link className="nav-link" to=''  onClick={filt_best}>Popular Cuisines</Link>
              </li>
              </div>
              <div  className="left_space">
                <li className="nav-item"> 
                <Link className="nav-link" to=''  onClick={filt_bests}>Best Sellers</Link>
              </li>
              </div>
          
            </ul>
          
          </div>
        </div>
      </nav>


      <MenuC data={datax} fun = {final_func} />

    


  </div>
  </div>

)
};

export default Menu;
