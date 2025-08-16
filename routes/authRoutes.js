const express = require('express');
const router = express.Router();
const UserController = require("../controllers/User");


router.post("/new", UserController.createUser);//create new user
router.put("/users/:id", UserController.updateUser);//Update the user
router.get("/users", UserController.allUsers);//all user info
router.get("/users/:id", UserController.getUser);// user info

module.exports = router;