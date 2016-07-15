var app = require('express')();

app.get('*', function(req, res) {

		var fullurl = req.hostname + req.originalUrl;
			console.log(fullurl);

      res.sendFile( __dirname + '/build/index.html');


});

app.listen(62102, () => {
  console.log('listening 3000');
});
