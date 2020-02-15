const mongoose = require("mongoose");
const express = require("express");
const app = express()

const DATABASE = "mongodb://mymongo:27017/multicontainerapp";

mongoose.connect(DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(()=> {
    console.log("DB connected")
})
.catch(() => {
    console.log("ERROR in db connection")
})

app.get("/", (req,res)=>{
    res.json({message: "this isjkhkjh root route"})
})

app.listen(8000,()=>console.log("server started at port 8000"))