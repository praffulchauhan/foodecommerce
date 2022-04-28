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

    const users = new Cart({
        userId:req.body.userId,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        image: req.body.image,
        catagory: req.body.catagory
      })


      const users2 = {
        userId:req.body.userId,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        image: req.body.image,
        catagory: req.body.catagory
      }
  
    const insert_x = new UserserviceCart();
    const result = await insert_x.to_insert(users,users2)
    res.send(result);
   
 
  })


 



module.exports = router;