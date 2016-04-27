var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz', github:'<a href="https://github.com/fontangui/quiz">Proyecto en github</a>'});
});

router.get('/author', function(req, res, next){
	res.render('author', { github:'<a href="https://github.com/fontangui/quiz">Proyecto en github</a>',
		title: 'Quiz', autores: 'Javier Fontán : @fontangui',
		video1:'<iframe width="560" height="315" src="https://www.youtube.com/watch?v=NBB8PDenGJM" frameborder="0" allowfullscreen></iframe>',

		foto1: '<img src="/images/javier.jpg" alt="Club Deportivo Etsit">',
		foto2: '<img src="/images/satelec.jpg" alt="Satelec 2016" >'
	})
});

module.exports = router;
