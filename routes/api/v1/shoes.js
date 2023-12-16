//require express
const express = require("express");
//require router
const router = express.Router();

//import controller
const createShoe = require("../../../controllers/api/v1/shoes");

router.post("/", createShoe.create);
router.get("/", createShoe.get);
router.delete("/:id", createShoe.remove);
router.get("/:id", createShoe.getById);
router.patch("/:id", createShoe.update);

module.exports = router;