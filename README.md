Simple Node.js application for piping serial communication from your arduino to a modern web browser with WebSockets.

![arduino-socket](http://semu.mp/screenshots/arduino-socket-20120410-173825.png)

See `serial.js` for setting your serial port and needed baud rate

    define(['child_process', 'serialport'], function(child, serialport) {
      var serial = {
        'connect': function(socket) {
          board = new serialport.SerialPort('/dev/tty.usbmodem1a21', {
            baudrate: 9600,
            parser: serialport.parsers.readline("\n")
          });
      
Install dependencies with `npm install`, start the application with `node app.js` and point your web browser to [http://localhost:8080](http://localhost:8080) to see your arduino's serial output…

Using Node.js, Express.js, Socket.IO, bootstrap by twitter and some more libs…