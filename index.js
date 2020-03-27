'use strict';

var fs = require('fs'),
    path = require('path'),
    http = require('http');
var bcrypt = require('bcrypt');

var app = require('connect')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = process.env.PORT || 3000;


// const express = require('express');
// const app = express();
// const path = require('path');
// const port = process.env.PORT || 3000;
// const bodyParser = require('body-parser');

////////
let serveStatic = require("serve-static");

let { setupDataLayer } = require("./service/DataLayer");

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);
////////


app.use(serveStatic(__dirname + "/public"));

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());



  //first setup the datalayer then start the server
  setupDataLayer().then(() => {
    // Start the server
    http.createServer(app).listen(serverPort, function () {
      console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
      console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    });
  });

});


// app.listen(port, () => console.log(`listening on port ${port}!`));
// app.use(express.static(__dirname + '/public'));
//
//
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });
//
// app.get('/index.html', function(req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });
//
// app.get('/travel_destination.html', function(req, res) {
//   res.sendFile(path.join(__dirname + '/public/pages/travel_destination.html'));
// });
//
// app.get('/contact.html', function(req, res) {
//   res.sendFile(path.join(__dirname + '/public/pages/contact.html'));
// });




