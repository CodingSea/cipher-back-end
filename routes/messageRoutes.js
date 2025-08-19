const express = require('express');
const router = express.Router();
const MessageController = require("../controllers/Message");
const secureRoute = require("../middleware/secureRoute");


router.post("/new", secureRoute, MessageController.createMessage);//create new Message
router.put("/:id", secureRoute, MessageController.updateMessage);//Update the Message
router.get("/", secureRoute, MessageController.getAllMessages);//all Message info
router.get("/:id", secureRoute, MessageController.getMessage);//get Message info
router.delete("/:id", secureRoute, MessageController.deleteMessage);//Delete Message




module.exports = router;