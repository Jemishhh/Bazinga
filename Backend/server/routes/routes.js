const express = require("express")
const route = express.Router()
const services=require("../services/services")
const userController = require("../controller/userController")
const travelController = require("../controller/travelController")
const plannedController = require("../controller/plannedController")

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

/**
 *  @description Root Route
 *  @method GET /
 */
route.get("/",services.homeRoutes)

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get("/add-user",services.add_user)    

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get("/update-user",services.update_user)

// routes for user
route.post("/api/users",upload.single('image'),userController.create)
route.get("/api/users",userController.find)
route.put("/api/users/:id",userController.update)
route.get("/api/users/:id",userController.delete)

// routes for traveller
route.post("/api/travel",travelController.create)
route.get("/api/travel",travelController.find)
route.put("/api/travel/:id",travelController.update)
route.get("/api/travel/:id",travelController.delete)

// routes for Planned
route.post("/api/plan",plannedController.create)
route.get("/api/plan",plannedController.find)
route.put("/api/plan/:id",plannedController.update)
route.get("/api/plan/:id",plannedController.delete)



module.exports=route