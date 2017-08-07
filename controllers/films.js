//since we don't have a database we'll use our front end models at the moment
var express = require('express');
var filmRouter = new express.Router();
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

filmRouter.get('/films', function (req, res) {
  res.json(films);
});

module.exports = filmRouter;
