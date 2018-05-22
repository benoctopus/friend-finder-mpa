const questions = require('../data/questions');
const routes = require('express').Router();

routes.get('/survey', (req, res) => res.render('survey', {questions}));

routes.get('/allfriends', (req, res) => {
  res.json(require('../data/friends').get())
});


routes.get('*', (req, res) => res.render('index'));

module.exports = routes;
