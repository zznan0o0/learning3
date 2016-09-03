var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
	console.log(req.body);
	console.log(req.files.file.path)
	fs.readFile(req.files.file.path, function(err, data){
		if(err) console.log(err);
		fs.writeFile(__dirname + '1.png', data, function(err){
			if(err){
				console.log(err)
			}
			else{
				console.log('success');
			}
		})
	})
})

module.exports = router;
