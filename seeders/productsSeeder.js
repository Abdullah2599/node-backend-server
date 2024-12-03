const dbconnect = require('../config/dbconnect');
const Product = require('../models/Product');
const { faker } = require("@faker-js/faker");

dbconnect();

async function generateProduct(num){
    try{
        const products = [];
        for(var i = 0;i < num; i++){
            const product ={
                name: faker.commerce.productName(),
                description: faker.commerce.price(),
                price: faker.commerce.price(),
                imageUrl: faker.image.urlPlaceholder(),
            }
            products.push(product)
        }
        await Product.insertMany(products);
        console.log("Products Seeder run successfully!");
    }
    catch(e){
        console.log(e);
    }
}

generateProduct(8)