const userServices = require("../services/userServices");


class userController{
 list(req,res){
        userServices.list(req,res);
    }
    create(req,res){
        userServices.create(req,res);
      
    }
    update(req,res){
       res.json({message: 'Update a user'});
     
    }
    delete(req,res) {
        res.json({message: 'Delete a user'});
    }
    findById(req,res){
        userServices.detail(req,res);  
    }

}

module.exports =new  userController();