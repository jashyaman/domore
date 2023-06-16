var express = require('express');
var app = express();

app.use('/static', express.static('public'))

app.get('/', function (req, res) {
    res.redirect("/static/html/indext.html");
})

app.listen(3000);