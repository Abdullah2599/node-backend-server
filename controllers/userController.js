const userServices = require("../services/userServices");


class userController{
 list(req,res){
        userServices.list(req,res);
    }
    create(req,res){
      
    }
    update(req,res){
       res.json({message: 'Update a user'});
     
    }
    delete(req,res) {
        res.json({message: 'Delete a user'});
    }
    findById(req,res){
        res.json({message: 'Find a user'});    
    }

}

module.exports =new  userController();