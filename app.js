var path = require('path'),
	http = require('http')
	express = require('express'),
	app = express(),
	
	url = require('url');



//Renders homepage
app.get('*', function(req, res) {
	var site = url.parse(req.url,true).pathname
  res.sendfile(__dirname + '/Public' + site);
});








http.createServer(app).listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port " + app.get('port'));
});



