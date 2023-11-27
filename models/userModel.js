const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email:String,
    password:String,
    ipAddress:String,
})


const userModel = mongoose.model("dataInfo",userSchema)
module.exports = userModel          