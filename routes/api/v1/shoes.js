//require express
const express = require("express");
//require router
const router = express.Router();

//require authentication middleware
const authentication = require("../../../middleware/authentication");

//import controller
const createShoe = require("../../../controllers/api/v1/shoes");

router.post("/", createShoe.create);
router.get("/", authentication, createShoe.get);
router.delete("/:id", authentication, createShoe.remove);
router.get("/:id", authentication, createShoe.getById);
router.patch("/:id", authentication, createShoe.update);

module.exports = router;