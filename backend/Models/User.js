const mongoose = require("mongoose")
const {Schema} = mongoose;
const crypto = require("crypto");
const { stringify } = require("querystring");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
    firstname:{type:String,
        maxlength:32,
        required:true,
        trim:true},
    lastname:{type:String,
        maxlength:32,
        required:true,
        trim:true},
    email:{type:String,
        unique:true,
        required:true,
        trim:true},
        isAdmin:{
            type:String,
            default:false
        },
    password:String,
    isDel: {
        type:Boolean,
        default:false
    },
    salt:String,
    hash:String

})


UserSchema.methods.generateToken = function(){
    return jwt.sign({
        _id:this._id,
        fullname:this.firstname + " " + this.lastname,
        email: this.email
    },"ABCD")
}

UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes.toString("hex")
    this.hash = crypto.pbkdf2Sync(password,this.salt,1000,1000,"sha512").toString("hex");
}

UserSchema.methods.validatePassword = function(password){
    var newhash = crypto.pbkdf2Sync(password,this.salt,1000,1000,"sha512").toString("hex");
    return this.hash = newhash;
}

module.exports = UserSchema;