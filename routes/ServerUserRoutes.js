const express = require('express');
const router = express.Router();
const ServerUsereController = require("../models/ServerUser");

router.post("/newServerUser", ServerUsereController.createServerUser);//make new ServerUser
router.get("/ServerUsers",ServerUsereController.AllServerUsers);//all ServerUser info
router.put("/ServerUsers/:id", ServerUsereController.UpdateServerUser);//Update the Serveruser
router.get("/ServerUsers/:id",ServerUsereController.ServerUserInfo);//single ServerUser info




module.exports = router;