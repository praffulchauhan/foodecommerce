import React from "react";
import "./OrderPlaced.css";
import {useNavigate} from 'react-router-dom'
const OrderPlaced = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("LoggedName")
    setTimeout(()=>{navigate("/")},3000);
return (
    
<div className="orderplace">
    <div>
    <img className = "orderplacelogo" src="https://miro.medium.com/max/800/1*ioO6gP78rLZ1Uk-T5v8Zgg.gif" alt="image name"></img>
    <div class="orderplacemessage"><h3>Hi {name}..!</h3></div>
    <div class="orderplacemessage"><h3>Your Order is successfully placed</h3></div>
    <div class="orderplacemessage"><h3>Thankyou!...for ordering from us</h3></div>
    </div>
</div>
);
}

export default OrderPlaced;