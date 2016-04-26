var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz', github:'<a href="https://github.com/davideandres95/quiz2">Proyecto en github</a>'});
});



module.exports = router;
