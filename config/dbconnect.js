const mongoose = require('mongoose')
require("dotenv").config();

const dbconnect = async () => {
    await mongoose.connect(process.env.MONGO_DB)
    .then((response) => {
        console.log("Connection established")
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB", error)
    })
}

module.exports = dbconnect;