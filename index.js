const express = require("express");
const app = express();
app.set("view engine", "ejs");
require("dotenv").config();

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

app.post('/api/users', function(req, res) {
     const name = req.body.name
     res.status(201).json({ message: 'User created successfully' });

});

app.put('/api/users/:id', function(req, res)  {

     res.status(200).json({ message: 'User updated successfully' });
     res.end();
});

app.delete('/api/users/:id', function(req, res) {
     res.status(200).json({ message: 'User deleted successfully' });
     res.end();
});


app.get("/api/products", (req, res) => {
    const products = [
        { id: 1, name: "Product 1", price: 10.99 },
        { id: 2, name: "Product 2", price: 15.99 },
        { id: 3, name: "Product 3", price: 20.99 }
    ];
    res.json(products);
});

app.listen(process.env.PORT, function() {
console.log(`Server Started Running PORT on ${process.env.PORT}!`)
})