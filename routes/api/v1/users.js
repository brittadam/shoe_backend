//require express
const express = require("express");
//require router
const router = express.Router();

//import controller for users
const createUser = require("../../../controllers/api/v1/users");

router.post("/", createUser.create);
//add patch to change password of user

router.patch("/:id", createUser.update);
//make login post request
router.post("/login", createUser.login);

module.exports = router;