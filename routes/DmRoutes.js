const express = require('express');
const router = express.Router();
const DMController = require("../controllers/Dm")


router.post("/new/dm", DMController.createDm);//create new DM
router.get("/dms/:id", DMController.getDm);// DM info
router.get("/dms", DMController.getAllDm);// all DM info



module.exports = router;