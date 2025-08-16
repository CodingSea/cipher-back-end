const express = require('express');
const router = express.Router();
const channelController = require("../controllers/Channel");


router.post("/new", channelController.createChannel);

router.get("/", channelController.getAllChannels);

router.get("/:id", channelController.getChannel);

router.put("/:id", channelController.updateChannel);

router.delete("/:id", channelController.deleteChannel);

module.exports = router;