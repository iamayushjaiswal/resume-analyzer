const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"username already exists"],
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:[true,"Acccou already exists with this email address"],
        required:true
    }


})

const userModel=mongoose.model("users",userSchema)
module.exports=userModel