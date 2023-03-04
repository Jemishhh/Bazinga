const { Mongoose, default: mongoose } = require("mongoose")
const Travel = require("../model/travel")

exports.create = (req,res)=>{
    // validate request
    console.log("req.body", req.body)
    // console.log(res)
    if(!req.body){
        res.status(400).send({message:"Content cannot be empty"})
        return
    }
    const user =req.query.id
    
    const travel = new Travel({
        userRef:user,
        mainLoc:req.body.mainLoc,
        arrivalDate:req.body.arrivalDate,
        departureDate:req.body.departureDate,
        arrivalTime:req.body.arrivalTime,
        departureTime:req.body.departureTime,
        planned:req.body.planned,
        sublocation:req.body.sublocation
    })
    console.log(travel.name)

    // save user in the database
    travel
        .save(travel)
        .then(data=>{
            res.status(201).json(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message
            })
        })
}   


// retrieve and return all users/a single user
exports.find = (req,res)=>{
    
    if(req.query.id){
        const id = req.query.id;

        Travel.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "<Error></Error> retrieving user with id " + id})
            })

    }else{
        Travel.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
}

// update a new identified user by user.id
exports.update = (req,res)=>{
    if(!req.body){
        res.status(400).send({message : "Data to update cannot be empty"})
    }

    const id =req.params.id
    Travel.findByIdAndUpdate(id,req.body,{returnOriginal:false})
        .then(data=>{
            if(!data){
                res.status(404).send({message : `Cannot Update user with ${id}, maybe user not found`})
            }
            else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message :err.message })
        })
}

// Delete a user with specified user id in the request
exports.delete = (req,res)=>{
    const id = req.params.id;

    Travel.findByIdAndDelete(id).then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        }).catch(err =>{
            res.status(500).send({message: err.message});
        });
}