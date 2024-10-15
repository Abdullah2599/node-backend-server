const express = require("express");
const app = express();
app.set("view engine", "ejs");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoute");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
 // res.status(200).json({message: 'OK'});
});

app.use('/api/v1/user', userRouter)

app.listen(process.env.PORT, function() {
console.log(`Server Started Running PORT on ${process.env.PORT}!`)
})