const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
 // res.status(200).json({message: 'OK'});
});

app.get("/about", (req, res) => {
    res.status(200).json({message: 'About Page'});
});

app.get("/api/users", (req, res) => {
    const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Alice Johnson" }
    ];
    res.json(users);
});

app.get("/api/products", (req, res) => {
    const products = [
        { id: 1, name: "Product 1", price: 10.99 },
        { id: 2, name: "Product 2", price: 15.99 },
        { id: 3, name: "Product 3", price: 20.99 }
    ];
    res.json(products);
});

app.listen(8080, function() {
console.log("Server Started Running PORT on 8080")
})