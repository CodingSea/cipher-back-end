const express = require('express');
const router = express.Router();
const MessageController=require("../controllers/Message");

router.post("/newMessage", MessageController.createMessage);//create new Message
router.put("/Messages/:id", MessageController.updateMessage);//Update the Message
router.get("/Messages",MessageController.getAllMessages);//all Message info
router.get("/Messages/:id",MessageController.getMessage);//get Message info
router.delete("/Messages/:id",MessageController.deleteMessage);//Delete Message




module.exports = router;