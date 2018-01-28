const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/semaine5');
const igdb = require('igdb-api-node').default;
const client = igdb("07befb29daf56098649bd017a11547db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRoutes = require('./api/routes/user-routes');
userRoutes(app);

var gameRoutes = require('./api/routes/game-routes');
gameRoutes(app);

var reviewRoutes = require('./api/routes/review-routes');
reviewRoutes(app);

app.listen(port);

console.log('GameTracker REST API started on: ' + port);