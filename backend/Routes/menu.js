const express = require("express");
const router = express.Router();
const Userservice = require("../Userservice/Userservice");
const Food = require('../Models/food')
const bodyParser=require("body-parser");
var jsonParser = bodyParser.json()

router.get('/', async (req, res) => {
    const data = new Userservice();
 const result = await data.to_fetch();
  res.send(result);
  })

  router.post('/',jsonParser, async (req, res) => {

    const users = new Food({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        image: req.body.image,
        catagory: req.body.catagory
      })


      const users2 = {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        image: req.body.image,
        catagory: req.body.catagory
      }
  
    const insert_x = new Userservice();
    const result = await insert_x.to_insert(users,users2)
    res.send(result);
   
 
  })


  router.post('/:id', jsonParser, async (req, res) => {
    
const data = new Userservice();

const result = await data.removeUser(req.params.id);

res.send(result);


  })

  router.post('/update/:id', jsonParser, async (req, res) => {
    
    const data = new Userservice();
    
    const result = await data.updateUser(req.params.id,req.body);
    
    res.send(result);
    
    
      })



module.exports = router;