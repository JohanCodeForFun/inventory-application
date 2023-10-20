const express = require("express");
const router = express.Router();

// Require controller modules.
const staff_controller = require("../controllers/staffController");
// const author_controller = require("../controllers/authorController");
// const genre_controller = require("../controllers/genreController");
// const book_instance_controller = require("../controllers/bookinstanceController");

/// staff ROUTES ///

// GET staff home page.
router.get("/", staff_controller.staff_listing);
// router.get("/", function(req, res, next) {
//   res.send("NOT IMPLEMENTED: staff list"); 
// });

module.exports = router;