var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Code-Share : A platform for sharing your code and coding'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Code-Share : A platform for sharing your code and coding'});     									
});

router.route('/contact')
	.get(function(req, res, next) {
	  res.render('contact', { title: 'Code-Share : A platform for sharing your code and coding'});     									
	})
	.post(function(req, res, next){
		res.render('thank', { title: 'Code-Share : A platform for sharing your code and coding'});
	})

module.exports = router;