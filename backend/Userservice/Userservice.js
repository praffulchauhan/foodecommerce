var Food = require('../Models/food.js');

class food{

async to_fetch(){
  try {
    const menu_data = await Food.find({isDel: false})
    return (menu_data)
  } catch (err) {
    return json({ message: err.message })
  }
}

async to_insert(users,users2){

    try {
        const name2 = await Food.findOne({name : users2.name});

        
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
      userId:users.id,
      name:users.name
        ,description:users.description
        ,image:users.image
        ,price:users.price,
        category:users.category 
    }})

}

async getOneUser(_id){
  return await Food.findOne({"_id":_id})
}

}

module.exports = food;
