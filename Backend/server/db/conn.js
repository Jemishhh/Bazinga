const mongoose = require("mongoose")

const CONN_URL = "mongodb+srv://user-1:qsJVseEPhxA5OUpU@cluster0.ydlfb.mongodb.net/test"
const connectDB = async () => {
    try{
        console.log("Hello")
        // mongodb connection string
        const con = await mongoose.connect((CONN_URL), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB