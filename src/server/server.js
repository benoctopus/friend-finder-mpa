const express = require('express');
const path = require('path');
const parser = require('body-parser');
const friends = require('./friends');
const questions = require('./questions');
const app = express();


app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../client/views'));

const userData = friends.dummyGen();
const defaultPic = 'https://www.professionalclick.com/images/default.jpg';

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use(express.static('public'));

app.get('/api/friends', (req, res) => res.json(userData));
require('./htmlRoutes')(app);

//
// app.get('/api/questions', (req, res) => res.json(questions));
//
app.post('/api/newfriend', (req, res) => {
  let user = req.body;
  user.scores = user.scores.map(s => parseInt(s));
  if (!user.photo) {
    user.photo = defaultPic
  }
  console.log(user);
  res.json(determineCompatibility(user));
  userData.push(user);
});




app.listen(process.env.PORT || 8000, () => console.log('Listening on port 8000!'));

function determineCompatibility(bachelor) {
  //loop through friends and return lowest compatibility value

  let bestFriend;
  let potential = 99;
  userData.forEach(person => {

    let compatibility = person.scores.reduce((acc, val, i) => (
      acc + Math.abs(val - bachelor.scores[i])
    ));

    if (potential > compatibility && person.name !== bachelor.name) {
      bestFriend = person;
      potential = compatibility
    }
  });

  return {
    friend: bestFriend,
    compatibility: Math.round((1 - (potential - 1) / 40) * 100)
  };
}
