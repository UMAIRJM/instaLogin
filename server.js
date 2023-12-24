const express = require('express');
const app = express();
const mongoose = require("mongoose")
const {createUser} = require("./models/operations")
const bodyParser = require("body-parser");
const userModel = require('./models/userModel');
app.set('view engine', 'ejs');// for setting up ejs
app.use(express.static('public'));//  for telling express about statiic pucblic folders
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.render('index')// for rendering ejs files
})


mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connected to mongoDB sucessfully")
}).catch((error)=>{
    console.log(error)
    console.log("Error connecting to database")
})

app.post("/submit",async (req,res)=>{
    const data = req.body;
    console.log(data.email)
    let userIP = req.connection.remoteAddress
    let email = data.email
    let password = data.password
    let user = await createUser(email,password,userIP)
    console.log(user)
    // res.send(userIP)
    //res.render('index')
    // res.send("Internet Anomly")
})




app.listen(3000,()=>{

    console.log("server is started")
})