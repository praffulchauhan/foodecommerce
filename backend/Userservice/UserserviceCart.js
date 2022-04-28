var Cart = require('../Models/cart.js');

class cart{

async to_fetch(userId2){
  try {
    const menu_data = await Cart.find({userId:userId2})
    console.log(menu_data);
    return (menu_data)
  } catch (err) {
    console.log(err);
    return json({ message: err.message })
  }
}

async to_insert(users,users2){

    try {
        const name2 = await Cart.findOne({name : users2.name});

        
        if(name2==null)
           {
            const data = await users.save()
            return (data)
           } 
           else{
            return ({message:'User already exists'});
           }
           
        } catch (err) {
            console.log({ message: err.message })  ;
        }

}



async removeUser(_id){
    return await Food.updateOne({"_id":_id}, {$set:{ isDel: true }})
}


async updateUser(_id,users){

    return await Food.updateOne({"_id":_id}, {$set:{ 
        name:users.name
        ,description:users.description
        ,image:users.image
        ,price:users.price,
        catagory:users.catagory 
    }})

}


}

module.exports = cart;
