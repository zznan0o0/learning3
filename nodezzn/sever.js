var http = require('http');
var fs = require('fs');

var mine = require('./config/mine.js');


http.createServer(function(req, res){
	if(req.path === '/'){
		fs.read(__dirname + '/views/index.html', function(err, data){
			if(err){
				res.writeHead(500);
			}
			else{
				res.writeHead(200);
				res.write(data);
			};
		});
	}
	else{
		fs.read(__dirname + '/public' + req.path, function(err, data){
			if(err){
				res.writeHead(500);
			}
			else{
				res.writeHead(200);
				res.write(data);
			};
		});
	};
}).listen(3000);