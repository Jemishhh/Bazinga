const axios = require("axios")
const User = require("../model/user")



exports.homeRoutes = (req,res)=>{
    // Make a get req to /api/user
    // axios.get("http://localhost:3000/api/users")
    //     .then(response=>{
    //         res.render("index",{users:response.data})
    //     }).catch(err=>{ 
    //         res.send(err)
    //     })
    res.send("hello")
}

exports.add_user = (req,res)=>{
    res.send("add_user")
}

exports.update_user = (req,res)=>{
    res.send("update_user")
}
 

