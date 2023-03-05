const mongoose = require ("mongoose")
const travelSchema = require("./travel")
const plannedSchema = require("./planned")


const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    gender:{
        type:String,
        required:true,
    },
    birth:{
        type:Date,
        required:true
    },
    hobbies:{
        type : [String],
        required:true
    },
    image:{
        data: Buffer,
        contentType: String  
    },
    bio:{
        type:String,
    },
    refTravel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Travel"
    }
})


const User = mongoose.model("User",userSchema)

module.exports=User