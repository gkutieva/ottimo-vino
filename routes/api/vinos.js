var express = require("express");
var router = express.Router();
var vinosCtrl = require("../../controllers/api/vinos");

/* GET /api/vinos */
router.get('/', vinosCtrl.index);
router.get('/:id', vinosCtrl.show);

module.exports = router;