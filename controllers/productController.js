const productServices = require("../services/productServices");


class productController{
 list(req,res){
    productServices.list(req,res);
    }
}

module.exports =new  productController();