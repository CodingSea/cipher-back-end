const express = require('express');
const router = express.Router();
const MessageController = require("../controllers/Message");

router.post("/new", MessageController.createMessage);//create new Message
router.put("/:id", MessageController.updateMessage);//Update the Message
router.get("/", MessageController.getAllMessages);//all Message info
router.get("/:id", MessageController.getMessage);//get Message info
router.delete("/:id", MessageController.deleteMessage);//Delete Message




module.exports = router;