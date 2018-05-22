const questions = require('../data/questions');
const routes = require('express').Router();

routes.get('/survey', (req, res) => res.render('survey', {questions}));

routes.get('/allfriends', (req, res) => {
  res.render(
    'allFriends',
    {
    friends: require('../data/friends').get(),
    alt: 'https://www.professionalclick.com/images/default.jpg'
  })
});


routes.get('*', (req, res) => res.render('index'));

module.exports = routes;
