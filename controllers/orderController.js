const orderService = require("../services/orderService");


class orderController{
 list(req,res){
    orderServices.list(req,res);
    }
}

module.exports =new orderController();