const userServices = require("../services/userServices");


class userController{
 list(req,res){
        userServices.list(req,res);
    }
    create(req,res){
        userServices.create(req,res);
      
    }
    update(req,res){
      userServices.update(req,res);
     
    }
    delete(req,res) {
       userServices.delete(req,res);
    }
    findById(req,res){
        userServices.detail(req,res);  
    }

}

module.exports =new  userController();