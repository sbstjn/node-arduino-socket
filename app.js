var requirejs = require('requirejs');
requirejs.config({nodeRequire: require});

requirejs(['serial', 'web', 'socket'],function(serial, web, socket) {
  serial.connect(socket);
  web.listen(8080);
});