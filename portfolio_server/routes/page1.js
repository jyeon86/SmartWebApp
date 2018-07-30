var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page1',{ title: '청남대소개' });
});

module.exports = router;
