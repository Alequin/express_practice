//since we don't have a database we'll use our front end models at the moment
var express = require('express');
var filmRouter = new express.Router();
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

filmRouter.get('/films', function (req, res) {
  res.json(films);
});

filmRouter.get('/films/:id', function (req, res) {
  res.json(films[req.params.id]);
});

filmRouter.get('/films/:id', function (req, res) {
  res.json(films[req.params.id]);
});

filmRouter.post('/films', function(req, res){
  films.push(req.body.film);
  res.json(films);
});

filmRouter.put('/films/:id', function(req, res){
  films[req.params.id] = req.body.film;
  res.json(films);
});

filmRouter.delete('/films/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json(films);
});

module.exports = filmRouter;
