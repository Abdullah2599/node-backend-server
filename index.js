const express = require("express");
const app = express();
app.set("view engine", "ejs");
const cors =require('cors');
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoute");
const dbconnect = require("./config/dbconnect");
const Authentication = require("./middlewares/Authentication");
const authRouter = require("./routes/authRoute");
require("dotenv").config();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dbconnect();

app.get("/", (req, res) => {
  res.render("index");
});

app.use('/api/v1/user',Authentication.VerifyToken, userRouter);
app.use('/api/v1/auth', authRouter);
app.listen(process.env.PORT, function() {
console.log(`Server Started Running PORT on ${process.env.PORT}!`)
})