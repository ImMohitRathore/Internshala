const express=require("express");
const  app = express();

const router = express.Router();
const cookie_parser = require("cookie-parser")

const student = require("./Router/Authentication")

const port = "5000"


app.use(cookie_parser())


require("./database/connection")


app.use(express.json())
// link the router 












app.use(student)





app.listen(port,()=>  console.log(`listening on port ${port}`))




