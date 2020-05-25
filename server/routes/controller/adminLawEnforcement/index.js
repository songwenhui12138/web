var express = require('express');
var router = express.Router();
var controller = require("./adminLawEnforcement.controller");

router.get("", controller.adminLawEnforcement);
module.exports = router;

