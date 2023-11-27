const userModel = require("./userModel")

const createUser = async(email,password,ipAddress)=>{
    console.log("creatingUser")
    let user = new userModel()
    user.email = email
    user.password = password
    user.ipAddress = ipAddress
    await user.save()
    return user
}

module.exports.createUser = createUser

