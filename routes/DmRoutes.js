const express = require('express');
const router = express.Router();
const DMController = require("../controllers/DM")


router.post("/new/dm", DMController.createDM);//create new DM
router.get("/dms/:id", DMController.getDM);// DM info
router.get("/dms", DMController.getAllDM);// all DM info



module.exports = router;