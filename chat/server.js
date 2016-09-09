var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);

var userList = {};
var userNum = 0;

app.use('/', express.static(__dirname + '/public'));

http.listen(3000);

io.on('connection', function(socket){
	socket.on('adduser', function(data){
		if(userList[data]){
			io.sockets.sockets[socket.id].emit('exist');
		}
		else{
			userNum ++;
			userList[data] = socket.id;
			socket.name = data;
			io.sockets.emit('add new', [data, userNum]);
		};
	});

	socket.on('speak', function(data){
		socket.broadcast.emit('tell other', [data, socket.name]);
		socket.emit('my speak', [data, socket.name]);
	});

	socket.on('disconnect', function(){
		userNum --;
		delete userList[socket.name];
		socket.broadcast.emit('user leave', [socket.name, userNum]);
	});
});