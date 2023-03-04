const mongoose = require("mongoose")
// const userSchema = require("./user")
const plannedSchema = require("./planned")

const travelSchema = new mongoose.Schema({
    userRef:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    mainLoc:{
        type:String,
        required:true
    },
    arrivalDate:{
        type:Date,
        required:true
    },
    departureDate:{
        type:Date,
        required:true
    },
    arrivalTime:{
        type:Date,
        required:true
    },
    departureTime:{
        type:Date,
        required:true
    },
    planned:{
        type:Boolean,
        default:false
    },
    sublocation:[
        {
            location:String,
            time: Date
        }
    ]
})

const Travel = mongoose.model("Travel",travelSchema)

module.exports=Travel