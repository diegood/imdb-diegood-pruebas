const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
var io = require('socket.io')(server);

app.use(express.static("./public"));


io.on('connection', function(socket){
  socket.broadcast.emit('message', "<b>Se conecto: "+socket.id+"</b>");

  console.log('a user connected: ', socket.id);
  socket.on('disconnect', function(){
    console.log('user disconnected: ', socket.id);
  });

  socket.on('message', function(msg){
  	if(msg == "//alegria"){
  		io.emit('message', '<img src="https://secure.static.tumblr.com/343beed4cb99d9e3a420284a8be1b201/4zjjwox/jymo5mo95/tumblr_static_tumblr_static_filename_640.gif">');
  	}else{
  		if(msg.indexOf(socket.id)!=-1){
  			 console.log('existis: Flaco');
	    	 io.emit('message', '<b style="color:red">'+socket.id+" ten menciono:</b> "+msg);
  		}else{
    		socket.broadcast.emit('message', "<b>"+socket.id+" Dice:</b> "+msg);
  		}
    	socket.emit('message', '<b style="color:blue">'+socket.id+" Dice:</b> "+msg);
  	}
  });

});

server.listen(3000, function(){
  console.log('listening on *:3000');
});