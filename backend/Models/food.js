const mongoose = require("mongoose");
const {Schema} = mongoose;


const foodSchema = new Schema({
    name: String,
    price: Number,
    quantity:{
        type: Number,
        default:1
    },
    description: String,
    image:String ,
    isDel: {
        type: Boolean,
        default: false
    },
    category:String
    
});

module.exports = mongoose.model('Food', foodSchema)
