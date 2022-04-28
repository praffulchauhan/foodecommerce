const mongoose = require("mongoose");
const {Schema} = mongoose;


const cart = new Schema({
    name: String,
    price: Number,
    quantity:Number,
    description: String,
    image:String ,
    isDel: {
        type: Boolean,
        default: false
    },
    catagory:String
    
});


module.exports = cart;