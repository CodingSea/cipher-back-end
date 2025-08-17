const express = require('express');
const router = express.Router();
const serverController = require("../controllers/Server");


router.post("/new", serverController.createServer);

router.get("/", serverController.getAllServers);

router.get("/:id", serverController.getServer);

router.put("/:id", serverController.updateServer);

router.delete("/:id", serverController.deleteServer);


// Channel Routes

router.post("/:serverId/channel/new", serverController.createChannel);

router.get("/:serverId/channel/", serverController.getAllChannelsInServer);

router.get("/:serverId/channel/:id", serverController.getChannel);

module.exports = router;