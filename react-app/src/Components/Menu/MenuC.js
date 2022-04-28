import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuC.css'
import Quantity from './Quantity.js'
import {Link} from "react-router-dom";;

function MenuC(props) {
  return (
    <div className='container-fluid'>
      <div className="row">
        {
          props.data.map( (user,index) => (

          <div className='col-md-4 menus'>
            <div className="card menu-body " >
              <img src={user.image} className="card-img-top" alt="menu"/>
              <div className="card-body" key={index}>
                <h5 className="card-title" >{user.name}</h5>
                <p className="card-text">{user.description}</p>
                <div className='dll'>
                <p style={{fontSize:20}}><b>Rs {user.price}</b></p>
                <Quantity/>
                </div>
                <Link to="" className="button cart btn btn-danger">ADD TO CART</Link>
              </div>
        


            </div>

      </div>
))
}


</div>
</div>

    )
}

export default MenuC