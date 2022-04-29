const express = require("express")
const router = express.Router();
const UserService = require("../UserServices/loginService")
const bodyParser=require("body-parser");
var jsonParser = bodyParser.json()


const auth = require("./auth")
router.get("/",async (req,res)=>{
    const userService = new UserService();
    const result = await userService.getUser();
    res.send(result);
})

router.get("/:id",async (req,res)=>{
    const userService = new UserService();
    const result = await userService.findUser(req.params.id);
    res.send(result);
})

router.post("/signup",jsonParser,async (req,res)=>{
    const userService =  new UserService();
    console.log(req.body)
    const result = await userService.setUser(req.body)
    res.send("User Created")
})

router.post("/login",jsonParser,async (req,res)=>{
    const userService = new UserService();
    const result = await userService.loginUser(req.body.email,req.body.password);
    if(result===false){
        res.send(false)
    }
    else{
    res.send(result);
    } 
})

router.delete(":/id",async (req,res)=>{
    const userService = new UserService();
    const result = await userService.removeUser(req.params.id)
    res.send(result)
})

module.exports = router;