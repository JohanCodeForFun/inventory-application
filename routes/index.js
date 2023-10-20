var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("NOT IMPLEMENTED: homepage navigation");
});

module.exports = router;
