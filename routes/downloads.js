var router = require('express').Router();

/* GET Download Page */
router.get('/', function(req, res, next) {
	res.render('downloads', {title: "downloads"});
});

module.exports = router;