var router = require('express').Router();

/* GET Contact Page */
router.get('/', function(req, res, next) {
	res.render('contact', {title: "Silverkey Contact Details"});
});

module.exports = router;