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
    async create(req,res){
        try{
            const data =(({name,email,password}) => ({name,email,password}))(req.body);
            User.insertMany([data]);
            res.status(200).json({message:"User created succsesfully"})
        }
        catch(e)
        {
            res.status(404).json({message:`An error occured ${e}`})
        }
        
    }
    async update(req,res){
        try
        {
        const id = req.params.id;
        const data =(({name,email,password}) => ({name,email,password}))(req.body);
        User.updateMany([data]);
        const user = await User.findByIdAndUpdate(id);
        res.status(200).json({message:"Found Record", data: user})
        }
        catch(e){
            res.status(404).json({message:e})
        }
        
    }
    async delete(req,res){
        try
        {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        res.status(200).json({message:"User Deleted Sucessfully"})
        }
        catch(e){
            res.status(404).json({message:e})
        }
        
    }
    async detail(req,res){
        try
        {
        const id = req.params.id;
        const user = await User.findById(id);
        res.status(200).json({message:"Found Record", data: user})
        }
        catch(e){
            res.status(404).json({message:e})
        }
    }
}

module.exports = new userService;