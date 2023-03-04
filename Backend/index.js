const express = require("express")
const app = express()
const morgan = require("morgan")
const route = require("./server/routes/routes")
const connectDB=require("./server/db/conn")
const bodyparser = require("body-parser");

// Log Requests
app.use(morgan('tiny'))
// mongodb connection
connectDB()

app.use(bodyparser.urlencoded({ extended : true}))




app.use("/",route)





app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`)
})