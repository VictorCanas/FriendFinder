// Set up our npm dependencies.
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Create our Express server.
var app = express();

// Set the port to listen on.
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define our routes.
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});