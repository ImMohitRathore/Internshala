const jwt = require("jsonwebtoken");
const User = require("../model/Userschma")


const Middle = (req ,res , next) =>{
try{
const token = req.cookies.jwttoken;
const verifytoken = jwt.verify(token,"MYNAMEISMOHITRATHOREANDIAMWEBDEVLOPER");
console.log(verifytoken);
// const rootuser =  User.findOne({_id : verifytoken._id , "Tokens.token": token })

// if(!rootuser){ new Error('user not found')}

// req.rootuser = rootuser;


// next();


}catch(e){
    res.status(401).send("Unauthorized acses")
console.log(e);
}
}


module.exports = Middle;


