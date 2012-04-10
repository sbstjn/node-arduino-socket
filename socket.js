define(['socket.io','./web'], function(socketio, app) {
  var io = socketio.listen(app);

  return io;
});