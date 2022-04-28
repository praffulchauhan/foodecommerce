const mongoose = require("mongoose");
const {Schema} = mongoose;


const foodSchema = new Schema({
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

module.exports = mongoose.model('Food', foodSchema)
