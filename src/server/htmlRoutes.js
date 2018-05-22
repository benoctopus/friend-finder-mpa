const questions = require('./questions');
const routes = require('express').Router();

routes.get('/survey', (req, res) => res.render('survey', {questions}));

routes.get('*', (req, res) => res.render('index'));

module.exports = routes;
