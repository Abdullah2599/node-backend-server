const Product = require('../models/Product')


class productService{
    async list(req,res){
    try{
      const products = await Product.find({});
       res.status(200).json({message: 'Record Found',data: products})
    }
    catch(err){
        res.status(400).json({message:err})
    }
    }
}

module.exports = new productService;