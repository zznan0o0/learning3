var port = 3000;
var http = require('http');
var fs = require('fs');
var io = require('socket.io')(http);
var url = require('url');

var userList = [];
console.log('socket.io start at' + port);

var typeReg = /\.\w+$/;

var mime = {
    ".css": "text/css",
    ".gif": "image/gif",
    ".html": "text/html",
    ".ico": "image/x-icon",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".js": "text/javascript",
    ".json": "application/json",
    ".pdf": "application/pdf",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".swf": "application/x-shockwave-flash",
    ".tiff": "image/tiff",
    ".wav": "audio/x-wav",
    ".wma": "audio/x-ms-wma",
    ".wmv": "video/x-ms-wmv",
    ".xml": "text/xml"
};


http.createServer(function(req, res){
	var pathname = url.parse(req.url).pathname;
	console.log(pathname)
	if(req.url === '/'){
		fs.readFile(__dirname + '/index.html', function(err, data){
			if(err){
				console.log(err);
				res.writeHead(500);
			}
			else{
				res.writeHead(200);
				res.write(data);
			};
		});
	}
	else{
		console.log(1111)
		var type = typeReg.exec(pathname)[0];
		fs.readFile(__dirname + '/public' + pathname, function(err, data){
			if(err){
				console.log(err);
				res.writeHead(500);
			}
			else{
				res.writeHead(200, mime[type]);
				res.write(data);
				console.log(mime[type]);
			};
		});
	};
}).listen(port);

io.on('connection', function(socket){
	console.log('connect success');
});