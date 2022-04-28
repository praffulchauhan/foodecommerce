import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'
import MenuC from "./MenuC";
import { useState } from "react";

const Menu = () => {

const pizza = [
  {
    name : "Peppy Paneer",
    description : "India loves it!",
    price : 250,
    image : "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-16x9/image.jpg"
  },
  {
    name : "Peppy Paneer",
    description : "India loves it!",
    price : 250,
    image : "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-16x9/image.jpg"
  },
  {
    name : "Peppy Paneer",
    description : "India loves it!",
    price : 250,
    image : "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-16x9/image.jpg"
  },
  {
    name : "Peppy Paneer",
    description : "India loves it!",
    price : 250,
    image : "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-16x9/image.jpg"
  }
]

const burger = [{
  name : "burger",
  description : "India loves it!",
  price : 250,
  image : "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-16x9/image.jpg"

}]

const indian={};
const chinese={};
const mexican = {}



var [datax,setDatax] = useState(pizza);



  return(
    <div className="divyansh">
<nav className="top_space nevbar navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
 
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <div className="left_space">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" onClick={()=>setDatax(pizza)}  href="#">Pizzas</a>
        </li>
        </div>
       <div  className="left_space"> <li className="nav-item">
        <a className="nav-link" href="#" onClick={()=>setDatax(burger)}>Burgers</a>
        </li></div>
        <div  className="left_space"><li className="nav-item"> 
          <a className="nav-link" href="#" onClick={()=>setDatax(indian)} >Indian</a>
        </li></div>
        <div  className="left_space"><li className="nav-item"> 
          <a className="nav-link" href="#" onClick={()=>setDatax(chinese)}>Chinese</a>
        </li></div>
        <div  className="left_space"><li className="nav-item"> 
          <a className="nav-link" href="#" onClick={()=>setDatax(mexican)}>Mexican</a>
        </li></div>
     
      </ul>
     
    </div>
  </div>
</nav>


<MenuC data={datax}/>



</div>





)
};

export default Menu;
