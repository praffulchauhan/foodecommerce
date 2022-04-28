import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuC.css'
import Quantity from './Quantity.js'
function MenuC(props) {
  return (

<div className="row">
{
props.data.map( (user,index) => (

<div className='col-md-4 pqr'>
<div className="card lmn " >
  <img src={user.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{user.name}</h5>
    <p className="card-text">{user.description}</p>
    <div className='dll'>
<p style={{fontSize:20}}><b>Rs {user.price}</b></p>

    <a href="#" className="flm btn btn-danger">ADD TO CART</a>
    

    
</div>

  </div>
  <Quantity/>

</div>

</div>
))
}


</div>

    )
}

export default MenuC