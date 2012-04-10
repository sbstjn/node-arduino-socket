var isRunning = false;

function ISODateString(d){
 function padT(n){return (n<10 ? '0'+n : n); }
 function padH(n){return (n<10 ? '00'+n : (n<100 ? '0'+n : n)); }
 return padT(d.getUTCHours())+':'+padT(d.getUTCMinutes())+':'+padT(d.getUTCSeconds())+'Z'+padH(d.getUTCMilliseconds());
}

require(["jquery"], function($) {
  var socket = io.connect();
    socket.on('msg', function (data) {
      if ($("#socket li").length > 20) {
        $("#socket li:nth-child(1)").remove(); }
      
      $('#socket').append('<li>' + ISODateString(new Date()) + " " + data + '</li>');
    });
});