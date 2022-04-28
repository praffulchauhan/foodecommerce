import React from "react";
import "./Cart.css"
import { useState,useEffect } from "react";
import NavLogo from "../HomePage/NavLogo/NavLogo";
import UserService from "../Services/UserService";

const Cart = () => {
  
  const [loading, setLoading] = useState(true);
  const [cartItems,setCartItems] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await UserService.get_product();
        setCartItems(response);
      } catch (error) {
        console.error(error.message);
      }
   
      setLoading(false);
    }
  
    fetchData();
  }, []);

   const handleCartClearButton = () => {

     setCartItems([])
   }
    const handleAddProduct = (product) => {
        const ProductExist = cartItems.find((item)=>item.id===product.id)
        if(ProductExist){
          setCartItems(cartItems.map((item)=>item.id === product.id?
          {...ProductExist,quantity:ProductExist.quantity+1}:item))
        }
        else{
          setCartItems([...cartItems,{...product,quantity:1}])
        }
      }
      const handleRemoveProduct = (product) => {
        const ProductExist = cartItems.find((item)=>item.id===product.id)
        console.log(ProductExist)
        if(ProductExist.quantity===1){
          setCartItems(cartItems.filter((item)=>item.id!==product.id))
        }
        else{
          setCartItems(cartItems.map((item)=>item.id===product.id?{...ProductExist,quantity:ProductExist.quantity-1}:item))
        }
      }
  const totalprice = cartItems.reduce((price,item)=>price+item.quantity*item.price,0)
  return (  
    <div>
      <NavLogo/>
   <div className="cart-items">
     <h3 className="cart-items-header">cart Items</h3>
     <div className="cart-items-clear">
       {cartItems.length>0 && (
         <button className="clear-cart-button" onClick={handleCartClearButton}>Clear Cart</button>
         )}
     </div>
       {cartItems.length===0 &&(<div className="cart-items-empty">No item Added</div>)}
       <div>
         {cartItems.map((item)=>(
           <div key={item.id} className="cart-items-list">
           <img  className="cart-items-image" src={item.image} alt={item.name}></img> 
           <div className="cart-items-name">{item.name}</div>
           <div className="cart-items-function">
             <button className="cart-items-add" onClick={()=>handleAddProduct(item)}>+</button>
             <button className="cart-items-remove" onClick={()=>handleRemoveProduct(item)}>-</button>
           </div>
           <div className="cart-items-price">
               {item.quantity}*${item.price}
             </div>
           </div>
         ))}

       </div>
       <div className="cart-items-total-price-name">
         Total Price
         <div className="cart-items-total-price"> ${totalprice}</div>
       </div> 
       <div className="cart-items-buyButton">
         {cartItems.length>0 && (<a href="#" className="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Buy Now</a>
       )}
       </div>
   </div>
    </div>
  )
};

export default Cart;
