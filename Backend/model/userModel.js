import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobDescription:{
        type:String,
        required:true
    }
})
const userModel=mongoose.model("jobPosting" , userSchema);
export default userModel;