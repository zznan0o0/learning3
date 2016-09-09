#socket.io
## 与express搭配
```javascript
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);
app.use('/', express.static(__dirname + '/public'));

http.listen(3000);
```

## 事件
```javascript
//connect事件
io.on('connection', function(socket){
    //...
}
//disconnect
socket.on('disconnect', function(){
    //''''
}
```

## emit
```javascript
//向当前客户端发送事件
socket.emit('login', {
      numUsers: numUsers
    });


//广播（不包含当前客户端）
socket.broadcast.emit('new message', {
  username: socket.username,
  message: data
});


//广播（且包含当前客户端）
io.sockets.emit('message', "this is a test");


//在房间广播（不包含当前客户端）
socket.broadcast.to('game').emit('message', 'nice game');


//在房间广播（包含当前客户端）
io.sockets.in('game').emit('message', 'cool game');


//发送给指定客户端
io.sockets.sockets[socketid].emit('message', 'for your eyes only');
```