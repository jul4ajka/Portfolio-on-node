const express = require('express');
const app = express();
var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/public'));

app.listen(port, function (err) {
    if (err) throw err;
    console.log('Server starts on port 8000');
});



