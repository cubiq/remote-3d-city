var io = require('socket.io').listen(8008);

io.sockets.on('connection', function (socket) {
	socket.on('remoteControl', function (msg) {
		io.sockets.emit('location', msg);
	});
});

