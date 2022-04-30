const express = require("express");
const router = express.Router();
const UserserviceCart = require("../Userservice/UserserviceCart");
const Cart = require('../Models/cart')
const bodyParser=require("body-parser");
const auth = require("./auth");
var jsonParser = bodyParser.json()


router.get('/:userId',jsonParser, async (req, res) => {

    const data = new UserserviceCart();
 const result = await data.to_fetch(req.params.userId);
  res.send(result);
  })


  
router.post('/:userId',jsonParser,async (req,res)=>{

    const data=Cart.find({ userId:req.params.userId }).remove().exec();
    res.send("User Deleted!");

})

router.get('/delete/:userId',jsonParser, async (req, res) => {

  const data = new UserserviceCart();
  const result = Cart.find({ userId:req.params.userId }).remove().exec()
  res.send(result);
})

router.get('/deleteOne/:proId',jsonParser, async (req, res) => {

  const data = new UserserviceCart();
  const result = Cart.find({ "_id":req.params.proId }).remove().exec()
  res.send(result);
})


  
  router.post('/add/:id',jsonParser, async (req, res) => {

var bodi = req.body;
var id = req.params.id;
var result_real = [];

for(let i=0;i<bodi.length;i++){
  const users = new Cart({
    userId:id,
    name: bodi[i].name,
    price: bodi[i].price,
    quantity: bodi[i].quantity,
    description: bodi[i].description,
    image: bodi[i].image,
    category: bodi[i].category
  })


  const users2 = {    
    userId:id,
    name: bodi[i].name,
    price: bodi[i].price,
    quantity: bodi[i].quantity,
    description: bodi[i].description,
    image: bodi[i].image,
    category: bodi[i].category
  }



const insert_x = new UserserviceCart();
const result = await insert_x.to_insert(users,users2)
result_real.push(result);

}


    res.send(result_real);
   
 
  })


 



module.exports = router;