const questions = require('./questions');
module.exports = function (app) {

  app.get('/survey', (req, res) => res.render('survey', {questions}));

  app.get('*', (req, res) => res.render('index'));
};

