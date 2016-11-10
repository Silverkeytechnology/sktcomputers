var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Silverkey Technologies:- reliable technology reliable financing passionate innovation' });
});



module.exports = router;
