const express = require('express');
const router = express.Router();
const DMController = require("../controllers/DM")


router.post("/new", DMController.createDM);//create new DM
router.get("/:id", DMController.getDM);// DM info
router.get("/", DMController.getAllDM);// all DM info



module.exports = router;