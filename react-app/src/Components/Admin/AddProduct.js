import Admin from "./Admin";
import "./AddProduct.css";
import UserService from "../Services/UserService";
import { useState } from "react";

const AddProduct = () => {
    const [item,setItem] = useState(false);
    const [msg,setMsg] = useState('');

    var pname = ''
    var pprice = 0
    var pdesc = ''
    var pimg = ''
    var pcat = ''

    function nameHandler(event){
        pname = event.target.value
    }
    function priceHandler(event){
        pprice = event.target.value
    }
    function descHandler(event){
        pdesc = event.target.value
    }
    function imageHandler(event){
        pimg = event.target.value
    }
    function categoryHandler(event){
        pcat = event.target.value
    }
    
    function submitHandler(event){
        event.preventDefault();
        UserService.add_product(
            {
                "name":pname,
                "price":pprice,
                "description":pdesc,
                "image":pimg,
                "category":pcat
            }
        )
        .then((res)=>{
            if(res.data.message!=='User already exists'){
                console.log(res.data)
                setMsg('Product Added!!')
                setItem(true)
                console.log(msg)
            }
            else if(res.data.message==='User already exists'){
                setMsg('Product Already Exists!!')
                setItem(true)
            }
            else{
                setItem(false)
            }
        })
    }

    return(
        <div>
            <Admin />
            {(item)? 
            
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>{msg}</strong> 
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            :""}
            <form className="container" onSubmit={submitHandler}>
                <div className="add">
                <div className="form-group">
                    <label htmlFor="pname">Product Name</label>
                    <input type="text" className="form-control" id="pname" placeholder="Enter Name of the Product" name="ds" onChange={nameHandler} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="pprice">Price</label>
                    <input type="number" className="form-control" id="pprice" placeholder="Enter Price of the Product" onChange={priceHandler} required />
                </div>
                <div className="form-group">
                <label htmlFor="pdesc">Description</label>
                <textarea className="form-control" id="pdesc" rows="3" placeholder="Brief of Product" onChange={descHandler} required ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="pimg">Image</label>
                    <input type="text" className="form-control" id="pimg" placeholder="Enter URL of Image" onChange={imageHandler} required />
                </div>
                <div className="form-group">
                    <label htmlFor="categ">Category</label>
                    <input type="text" className="form-control" id="categ" placeholder="Enter the Category" onChange={categoryHandler} required />
                </div>

                <button type="submit" className="addpro btn btn-danger mb-2" >Add product</button>
            </div>
            </form>
  </div>
  );
};

export default AddProduct;
