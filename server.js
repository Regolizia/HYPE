var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

let serveStatic = require("serve-static");

// make express look in the public directory for assets (css/js/img)
app.use(serveStatic(__dirname + '/public'));
app.use(serveStatic(__dirname + '/css'));
app.use(serveStatic(__dirname + '/fonts'));
app.use(serveStatic(__dirname + '/js'));
app.use(serveStatic(__dirname + '/img'));



app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});