const express = require("express")
const app = express()
const cors = require("cors")
// const morgan = require("morgan")
const route = require("./server/routes/routes")
const connectDB=require("./server/db/conn")
// const bodyparser = require("body-parser");

// Log Requests
// app.use(morgan('tiny'))
// mongodb connection

// 👇️ configure CORS
app.use(cors());
app.use(express.json())
app.use(express.urlencoded())

connectDB()



app.use("/",route)





app.listen(8000,()=>{
    console.log(`Server is running on http://localhost:8000`)
})