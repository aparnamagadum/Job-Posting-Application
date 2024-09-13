import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import router from "./router/router.js";
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port=process.env.port || 4000;

mongoose.connect(process.env.uri)
        .then(()=>{
        app.listen(port , ()=>console.log(`server running on port ${port}`))
        })
        .catch((err)=> console.log(err)); 
app.use('/',router);      
