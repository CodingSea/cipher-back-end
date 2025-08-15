const express = require('express');
const router = express.Router();
const UserController = require("../controllers/User");


router.post("/new",UserController.createdUser);

module.exports=router;