define(['kickstart', 'path', 'module'], function (kickstart, path, module) {
  var __filename = module.uri;  
  var kickstart = kickstart.withConfig({'name': 'example.com', 'path': path.dirname(__filename)});
  var srv = kickstart.srv();

  srv.all('*', function(req, res) {
    res.render('home');
  });
  
  return srv;
});
