require('request')(
  {
    url: 'http://nodejs.org/logo.png', 
    encoding: 'binary'
  }, function (e,r,b) {
    var type    = r.headers["content-type"];
    var prefix  = "data:" + type + ";base64,";
    var base64  = new Buffer(b, 'binary').toString('base64');
    var dataURI = prefix + base64;

    console.log(dataURI);
  }
);