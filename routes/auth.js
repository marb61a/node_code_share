var express = require('express');
var router = express.Router();
var passport = require('passport');

router.route('/login')
	.get(function(req, res, next){
		res.render('login', { title: 'Login your account'});
	})

module.exports = router;