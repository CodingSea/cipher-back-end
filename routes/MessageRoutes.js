const express = require('express');
const router = express.Router();
const MessageController=require("../controllers/Message");

router.post("/newMessage", MessageController.createMessage);//create new Message
router.put("/Messages/:id", MessageController.UpdateMessage);//Update the Message
router.get("/Messages",MessageController.AllMessageInfo);//all Message info
router.get("/Messages/:id",MessageController.singleMessageInfo);//single Message info
router.delete("/Messages/:id",MessageController.DeleMessage);//Delete Message




module.exports = router;