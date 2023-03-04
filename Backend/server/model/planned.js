const mongoose = require("mongoose")
const userSchema = require("./user")
const travelSchema = require("./travel")


const plannedSchema = new mongoose.Schema({
    refTravel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Travel"
    },
    sublocation:[
        {
            location:String,
            time: Date
        }
    ]
})

const Planned = mongoose.model("Planned",plannedSchema)

module.exports=Planned