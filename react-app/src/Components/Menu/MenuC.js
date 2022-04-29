import React, { useCallback, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuC.css'
import Quantity from './Quantity.js'
import {Link} from "react-router-dom";
import UserService from '../Services/UserService';



function MenuC(props) {
  const [Menu, setMenu] = useState([]);
  const loggedIn = localStorage.getItem('LoggedIn');

  const addCartHandler = useCallback(
    (index) => {

      
      console.log(Menu)
      // if(loggedIn){

      // }
      if (!Menu.find(({id}) => id === index._id)) {
      
        setMenu((data) => [
          ...data , index
        ])
  
      }
      else{
        alert("Already Added")
      }
    },[Menu]
  )
 function final_func(event){
  
 UserService.add_product2(Menu).then((response)=>{
console.log(Menu);
  }).catch((err)=>{
    console.log(err)
  });



 }
  
  return (
    <div className='container-fluid'>
      <div className="row">
        {
          props.data.map( (user,index) => (

          <div className='col-md-4 menus' key={user._id}>
            <div className="card menu-body " >
              <img src={user.image} className="card-img-top" alt="menu"/>
              <div className="card-body" >
                <h5 className="card-title" >{user.name}</h5>
                <p className="card-text">{user.description}</p>
                <div className='dll'>
                <p style={{fontSize:20}}><b>Rs {user.price}</b></p>
                <Quantity/>
                </div>
                <Link to='' className='btn btn-danger' onClick={()=> {addCartHandler(user)}}>Add to Cart</Link>
              </div>
        


            </div>

      </div>
))
}


</div>

<Link to=''className='proceed-button btn btn-success' onClick = {final_func}>Proceed to Cart</Link>

</div>

    )
}

export default MenuC