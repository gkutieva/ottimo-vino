var express = require("express");
var router = express.Router();
var vinosCtrl = require("../../controllers/api/vinos");

/* GET /api/puppies */
router.get('/', vinosCtrl.index);