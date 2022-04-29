const mongoose = require("mongoose");
const {Schema} = mongoose;


const cartSchema = new Schema({
    userId:String,
    name: String,
    price: Number,
    quantity:Number,
    description: String,
    image:String ,
    isDel: {
        type: Boolean,
        default: false
    },
    category:String
    
});

module.exports = mongoose.model('Cart', cartSchema)