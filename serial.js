define(['child_process', 'serialport'], function(child, serialport) {
  var serial = {
    'connect': function(socket) {
      board = new serialport.SerialPort('/dev/tty.usbmodem1a21', {
        baudrate: 9600,
        parser: serialport.parsers.readline("\n")
      });
      
      var io = socket;
      board.on('data', function(data) {
        data = data.toString();
        if (data.replace(/^\s*([\S\s]*?)\s*$/, '$1') != "") {
          io.sockets.emit('msg', data); }
      });
    }
  };

  return serial;
});
