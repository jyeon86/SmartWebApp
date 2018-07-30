var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page2', { title: '"청남대소개"' });//여기서 이미 지정
});

module.exports = router;
