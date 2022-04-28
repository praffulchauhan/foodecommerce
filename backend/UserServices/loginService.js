const { redirect } = require("express/lib/response");
const mongoose =  require("mongoose")
const UserSchema = require("../Models/User");
const User = mongoose.model("User",UserSchema);
const {obj} = require("../Models/User")

class UserService{
    async setUser(user){
        if(user["_id"]!==undefined){
            return await User.updateOne({"_id":user["_id"]},{$set:user})
        }
        else{
        const userObj = new User(user);
        userObj.setPassword(user.password);
        const result = await userObj.save();
        result["salt"]="";
        result["hash"]="";
        return result;
        }
    }
    async getUser(){
        return await User.find({isDel:false}).select(["-salt","-hash"])
    }

    async removeUser(_id){
        return await User.updateOne({"_id":_id},{$set:{isDel:true}});
    }

    async loginUser(email,password){
        const result = await User.find({"email":email});
        if(result){
            if(result.length>0)
            {
                const user = result[0];
                if(user.password===password){
                    user["hash"]="";
                    user["salt"]="";

                    const objUser = user.toObject();
                    objUser.token = user.generateToken();
                    return objUser;
            }
            else{
                return {"Email":"","password":"Password not matched"};
            }
        }

    }
    else{
        return {"Email":"Email-not Found","password":""}

    }
}
}

module.exports = UserService;