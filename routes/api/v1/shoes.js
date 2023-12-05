//require express
const express = require("express");
//require router
const router = express.Router();

//import controller
const createShoe = require("../../../controllers/api/v1/shoes");

router.post("/", createShoe.create);
router.get("/", createShoe.get);
router.get("/:id", createShoe.getById);

module.exports = router;