const mongoose = require ("mongoose")

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
    gender:{
        type:String,
        required:true,
    },
    Birth:{
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
    Bio:{
        type:String,
    },
    refTravel:{
        type:Schema.Types.ObjectId,
        ref:"travelSchema"
    }
})

const travelSchema = new mongoose.Schema({
    userRef:{
        type:Schema.Types.ObjectId,
        ref:"userSchema"
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
        required:true,
        default:false
    },
    refPlanned:{
        type:Schema.Types.ObjectId,
        ref:"plannedSchema"
    }

})

const plannedSchema = new mongoose.Schema({
    refTravel:{
        type:Schema.Types.ObjectId,
        ref:"travelSchema"
    },
    sublocation:[
        {
            location:String,
            time: Date
        }
    ]
})

const User = mongoose.model("User",userSchema)
const Travel = mongoose.model("Travel",travelSchema)
const Planned = mongoose.model("Planned",plannedSchema)

module.exports={
    User,Travel,Planned
}