const mongoose = require("mongoose")


const DB = "mongodb+srv://Mohit:2Ql7JGwQBuL3JNxg@cluster0.f4h6g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology : true,
    useFindAndModify: false
}).then(()=>{
    console.log(" Connection  successful to the database ");
}).catch((e)=>{
    console.log("not connnected to the database");
})