import { useEffect, useState } from "react";
import UserService from "../Services/UserService";
import Admin from "./Admin";
import "./ListProduct.css";
import {Link} from "react-router-dom";

const ListProduct = () => {
    const [data,setData] = useState([]);
    const [item,setItem] = useState(false);

    function getProduct(){
        UserService.get_product()
        .then((res)=>{
          if (res.data !== ''){
            console.log(res.data)
            setData(res.data) 
          }
        })
    }
    useEffect(() => {
 
        getProduct();
        
      },[])
    
      function deleteHandler(id){
        //   event.prevenDefault()
          console.log(id)
          UserService.delete_product(id)
          .then((res)=>{
              if(res.data!==''){
                  console.log(res.data)
                  setItem(true)
              }
          })
          getProduct();
      }
  return (
    <div>
      <Admin />
      {(item)? 
            
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Product Deleted</strong> 
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            :""}
      <div className="container cont">
        <div className="row">
            {data.map((item)=>(
                <div className="product col-md-4" key={item._id}>

                    <div className="card">
                    <img
                        className="card-img-top"
                        src={item.image}
                        alt=""
                        />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.price}</p>
                            <p className="card-text">{item.description}</p>
                            <Link to={`/admin/edit/${item._id}`} className="btn btn-primary ml-3">Edit</Link>
                            <button onClick={()=>deleteHandler(item._id)} className="btn btn-primary ml-5">Delete</button>
                        </div>
                    </div>
                    </div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
