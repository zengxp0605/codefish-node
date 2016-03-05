var express = require('express'),
app = express(),
port = process.env.PORT || 5001;

var server = require('http').Server(app);

  // app.set('views', __dirname + '/views');
  // app.engine('html', require('ejs').renderFile);
  // app.get('/', function(req, res) {
  //   res.render('index.html');
  // });
  app.use('/',express.static(__dirname + '/views')); //指定静态资源目录

  var io = require('socket.io').listen(server);
  io.on('connection',function(socket){
  	console.log('io connection [ok]');
  	socket.on('login',function(data){
  		console.log('server login: ',data);
  		io.sockets.emit('router','Login a user,nickname is: '+ data.nickname);
  	});
  });

//app.listen(port);
server.listen(port,function(){
	console.log('server listen *',port);
});