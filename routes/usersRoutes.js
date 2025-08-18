const express = require('express');
const router = express.Router();
const UserController = require("../controllers/User");
const secureRoute = require('../middleware/secureRoute')

const storage = multer.memoryStorage
    ({
        destination: (req, file, cb) =>
        {
            cb(null, './public/images/');
        },
        filename: (req, file, cb) =>
        {
            cb(null, file.originalname);
        }
    });
const upload = multer({ storage });

router.post("/new", UserController.createUser);//create new user
router.put("/:id",secureRoute ,UserController.updateUser);//Update the user
router.get("/", secureRoute, UserController.allUsers);//all user info
router.get("/:id", secureRoute, UserController.getUser);// user info

module.exports = router;