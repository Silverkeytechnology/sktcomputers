var router = require('express').Router();

/* GET About Us Page */
router.get('/', function(req, res, next) {
	res.render('about', {title: "About Us"});
});

module.exports = router;