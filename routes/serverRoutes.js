const express = require('express');
const router = express.Router();
const serverController = require("../controllers/Server");
const secureRoute = require("../middleware/secureRoute");


router.post("/new", secureRoute, serverController.createServer);

router.get("/", secureRoute, serverController.getAllServers);

router.get("/:id", secureRoute, serverController.getServer);

router.put("/:id", secureRoute, serverController.updateServer);

router.delete("/:id", secureRoute, serverController.deleteServer);


// Channel Routes

router.post("/:serverId/channel/new", secureRoute, serverController.createChannel);

router.get("/:serverId/channel/", secureRoute, serverController.getAllChannelsInServer);

router.get("/:serverId/channel/:id", secureRoute, serverController.getChannel);

router.put("/:serverId/channel/:id", secureRoute, serverController.updateChannel);

router.delete("/:serverId/channel/:id", secureRoute, serverController.deleteChannel);

module.exports = router;