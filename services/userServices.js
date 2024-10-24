const User = require('../models/User')


class userService{
    async list(req,res){
    try{
      const user = await User.find({});
       res.status(200).json({message: 'Record Found',data: user})
    }
    catch(err){
        res.status(400).json({message:err})
    }
    }
    async create(){
        
    }
    async update(){
        
    }
    async delete(){
        
    }
    async detail(){
        
    }
}

module.exports = new userService;