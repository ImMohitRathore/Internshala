const express = require("express");
const router = express.Router();

const Middle = require("../Middleware/Middle")

const jwt = require("jsonwebtoken")
const cookie_parser = require("cookie-parser")


// import Userschma
const User = require("../model/Userschma")
// import database
require("../database/connection")



router.get("/home", (req ,res)=>{
    res.send("hello")
    console.log("ok");
    
    })



router.post("/login", async(req , res)=>{

        const { email , password} = req.body;
        const user = new User({ email ,password})


    const token = await  user.genratetoken()
    console.log(token)

    res.cookie("jwttoken",token ,{
        httpOnly:true
    })
    
    
    
    
    
    user.save().then(()=>{
        res.status(201).json(" login successful ")
        console.log("login successful");
    }).catch((e)=>{
        res.status(400).json(" not  login ")
        console.log("not login");
    }) 
    

    
    
})



router.get("/homee", (req ,res)=>{
res.send("hello")
console.log("ok");

})

// export rouer 
    module.exports = router;