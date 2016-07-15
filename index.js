const express = require('express');
const app = express();
const path = require('path');

app.get('*',function(req, res) {
		const fullurl = req.hostname + req.originalUrl;
		console.log(fullurl);

    res.sendFile( __dirname + '/index.html');
});
app.use(express.static(path.join(__dirname)));

app.listen(8080, () => {
  console.log('listening 3000');
});
