var path = require('path');
var fs = require('fs');

// Load our json data.
var friendsArray = require(path.join(__dirname, '../data/friends'));

// Build our routes.
module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post('/api/friends', function (req, res) {

        friendsArray.push(req.body);
        res.json(true);

    });
}