const express = require("express");
const router = express.Router();
const UserserviceCart = require("../Userservice/UserserviceCart");
const Cart = require('../Models/cart')
const bodyParser=require("body-parser");
var jsonParser = bodyParser.json()

router.get('/:userId',jsonParser, async (req, res) => {
    const data = new UserserviceCart();
    console.log(req.params.userId);
 const result = await data.to_fetch(req.params.userId);
  res.send(result);
  })

router.post('/:userId',jsonParser,async (req,res)=>{

    const data=Cart.find({ userId:req.params.userId }).remove().exec();
res.send("User Deleted!");

})

  
  router.post('/',jsonParser, async (req, res) => {

var bodi = req.body;
var result_real = [];

for(let i=0;i<bodi.length;i++){
  const users = new Cart({
    userId:bodi[i].userId,
    name: bodi[i].name,
    price: bodi[i].price,
    quantity: bodi[i].quantity,
    description: bodi[i].description,
    image: bodi[i].image,
    catagory: bodi[i].catagory
  })


  const users2 = {    
    userId:bodi[i].userId,
    name: bodi[i].name,
    price: bodi[i].price,
    quantity: bodi[i].quantity,
    description: bodi[i].description,
    image: bodi[i].image,
    catagory: bodi[i].catagory
  }

const insert_x = new UserserviceCart();
const result = await insert_x.to_insert(users,users2)
result_real.push(result);

}


    res.send(result_real);
   
 
  })


 



module.exports = router;