import React, { useCallback, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuC.css'
import Quantity from './Quantity.js'
import {Link, useNavigate} from "react-router-dom";
import UserService from '../Services/UserService';


function MenuC(props) {
  const [Menu, setMenu] = useState([]);
  const loggedId = localStorage.getItem('LoggedId');
  const [item,setItem] = useState(false);

  const navigate = useNavigate();

  const addCartHandler = useCallback(
    (index) => {
      if (loggedId){

        UserService.find_user(loggedId)
        .then((res)=>{
        if(res.data[0]._id !==''){
            if (!Menu.find(({_id}) => _id === index._id)) {

              setMenu((data) => [
                ...data , index
              ])
              setItem(true)
            }
            else{
              alert("Already Added")
            }
       }
          
      })
    }
    else{
      if (window.confirm(`Not Logged In, Please login first before adding items to Cart!! 
                          Press OK to Login`))
      {
      window.open('/login', '_self');
      };

    }
      console.log(Menu)
    
    },[Menu]
  )
 function final_func(event){
  
   console.log(Menu);
   const ID = localStorage.getItem('LoggedId')
  UserService.add_product2(Menu,ID)
  .then((response)=>{
      if(response.data!==''){
        if(Menu[0]!==undefined){
          navigate('/cart')
        }

      }
    }).catch((err)=>{
      console.log(err)
    });



 }
  
  return (
    <div>
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
                {/* <Quantity/> */}
                </div>
                <Link to='' className='addbtn btn btn-danger' onClick={()=> {addCartHandler(user)}}>Add to Cart</Link>
              </div>
        


            </div>

      </div>
))
}


</div>
{item ? 
<button to=''className='proceed-button btn btn-success' onClick = {final_func}>Proceed to Cart</button>
:''}

</div>

  </div>
    )
}

export default MenuC