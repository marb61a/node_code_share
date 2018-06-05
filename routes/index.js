var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var config = require('../config');
var transporter = nodemailer.createTransport(config.mailer);

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
		req.checkBody('name', 'Empty name').notEmpty();
    	req.checkBody('email', 'Invalid email').isEmail();
    	req.checkBody('message', 'Empty message').notEmpty();

	})

module.exports = router;