var express = require('express');
var router = express.Router();

router.get('/createTask', function(req, res){
	var newTask = new Task();

	newTask.save(function(err, data){
		if(err){
			console.log(err);
			res.render('error');
		} else {
			res.redirect('/task/' + data._id);
		}

	});
});