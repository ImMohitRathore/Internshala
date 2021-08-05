const mongoose = require("mongoose");

const jwt = require("jsonwebtoken")


// creating userSchema 
 
const stucture =   mongoose.Schema({
    email:{
        type :String,
    required : true},
    password:{
        type :String,
    required : true},
    Tokens :[   { token:{ }  } ]
});




stucture.methods.genratetoken = async function(){
    try{
        let tokenMohit = jwt.sign({_id: this._id},"MYNAMEISMOHITRATHOREANDIAMWEBDEVLOPER");
        this.Tokens = this.Tokens.concat({token:tokenMohit})
       await this.save()
       return tokenMohit
     }
   catch(e){
    console.log(e)}


   }



const User = mongoose.model("USER",stucture);
module.exports = User;
