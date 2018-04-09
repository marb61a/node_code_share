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

router.get('/login', function(req, res, next){
	res.render('login', { title: 'Login your account' })
});

router.get('/register', function(req, res, next){
	res.render('register', { title: 'Register a new account'});
});

module.exports = router;