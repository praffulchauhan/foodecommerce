import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../Services/UserService";
import Admin from "./Admin";

const EditProduct = () =>{

    const [name,setName] = useState();
    const [price,setPrice] = useState();
    const [desc,setDesc] = useState();
    const [image,setImage] = useState();
    const [category,setCategory] = useState();

    const [item,setItem] = useState(false);
    const [msg,setMsg] = useState('');


    var { id } = useParams();
    
    useEffect(() => {
        var newId = Object.values({id})[0]
        UserService.find_product(newId)
        .then((res)=>{
          if (res.data !== ''){
            console.log(res.data)
            setName(res.data.name)
            setPrice(res.data.price)
            setDesc(res.data.description)
            setImage(res.data.image)
            setCategory(res.data.category)
          }
        })

    },[])

    var pname = ''
    var pprice = 0
    var pdesc = ''
    var pimg = ''
    var pcat = ''

    function nameHandler(event){
        pname = event.target.value

        setName(pname)
    }
    function priceHandler(event){
        pprice = event.target.value
        setPrice(pprice)
    }
    function descHandler(event){
        pdesc = event.target.value
        setDesc(pdesc)
    }
    function imageHandler(event){
        pimg = event.target.value
        setImage(pimg)
    }
    function categoryHandler(event){
        pcat = event.target.value
        setCategory(pcat)
    }
    
    function submitHandler(event){
        event.preventDefault();
        UserService.edit_product((Object.values({id})[0]),
            {
                "name":name,
                "price":price,
                "description":desc,
                "image":image,
                "category":category
            }
        )
         .then((res)=>{
            if(res.data!==''){
                console.log(res.data)
                setMsg('Product Edited!!')
                setItem(true)
                console.log(msg)
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
            
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>{msg}</strong> 
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            :""}
        <form className="container" onSubmit={submitHandler}>
            <div className="add">
            <div className="form-group">
                <label htmlFor="pname">Product Name</label>
                <input type="text" className="form-control" id="pname" placeholder="Enter Name of the Product" name="ds"  value={name ?? ''} onChange={nameHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="pprice">Price</label>
                <input type="number" className="form-control" id="pprice" placeholder="Enter Price of the Product" value={price ?? ""}  onChange={priceHandler}  />
            </div>
            <div className="form-group">
            <label htmlFor="pdesc">Description</label>
            <textarea className="form-control" id="pdesc" rows="3" placeholder="Brief of Product" onChange={descHandler}  value={desc ?? ""}  ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="pimg">Image</label>
                <input type="text" className="form-control" id="pimg" placeholder="Enter URL of Image" onChange={imageHandler} value={image ?? ""} />
            </div>
            <div className="form-group">
                <label htmlFor="categ">Category</label>
                <input type="text" className="form-control" id="categ" placeholder="Enter the Category" onChange={categoryHandler} value={category ?? ""}    />
            </div>

            <button type="submit" className="addpro btn btn-danger mb-2" >Edit product</button>
        </div>
        </form>
</div>
    );
}

export default EditProduct;