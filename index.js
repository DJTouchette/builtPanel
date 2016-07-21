const express = require('express');
const app = express();
const path = require('path');
const adminPort = 62102;
// const adminPort = 8022;


app.use(express.static(path.join(__dirname)));

app.get('*',function(req, res) {
		const fullurl = req.hostname + req.originalUrl;
		console.log(fullurl);

    res.sendFile( fullurl + '/index.html');
});

app.listen(adminPort, () => {
  console.log(`listening on ${adminPort}`);
});
