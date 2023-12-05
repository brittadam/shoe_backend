//require express
const express = require("express");
//require router
const router = express.Router();

//import controller for users
const createUser = require("../../../controllers/api/v1/users");

router.post("/", createUser.create);
//add put to change password of user
router.put("/:id", createUser.update);

module.exports = router;