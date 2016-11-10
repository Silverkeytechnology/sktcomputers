var express = require('express');
var router = express.Router();

/* GET financing Options */
router.get('/', function(req, res, next) {
	res.render('financing', {title: "Silverkey Financing Options"});
});

module.exports = router;