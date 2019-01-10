let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io').listen(server);
let users = [];
let connections = [];

server.listen(process.env.PORT || 8080);
console.log('Server running...');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

io.sockets.on('connection', function(socket) {
  connections.push(socket);
  console.log(`Connected: ${connections.length} sockets connected`);

  // Disconnect
  socket.on('disconnect', function(data) {
    if (!socket.username) return;
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
    connections.splice(connections.indexOf(socket), 1);
    console.log(`Disconnected: ${connections.length} sockets connected`);
  })

  // Send Message
  socket.on('send message', function(data) {
    io.sockets.emit('new message', { user: data.username, msg: data.message });
  })

  // New User
  socket.on('new user', function(data, callback) {
    callback(true);
    socket.username = data;
    users.push(socket.username);
    updateUsernames();
  })

  function updateUsernames() {
    io.sockets.emit('get users', users);
  }
})