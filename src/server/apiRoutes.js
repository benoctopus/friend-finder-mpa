const routes = require('express').Router();
const friends = require('./friends');
const determineCompatibility = require('./compatibility');
const userData = friends.dummyGen();
const defaultPic = 'https://www.professionalclick.com/images/default.jpg';

routes.get('/api/friends', (req, res) => res.json(userData));

routes.post('/api/newfriend', (req, res) => {
  let user = req.body;
  user.scores = user.scores.map(s => parseInt(s));
  if (!user.photo) {
    user.photo = defaultPic
  }
  console.log(user);
  let newFriend = determineCompatibility(user, userData);
  res.render(
    'friendCard',
    {
      name: newFriend.friend.name,
      photo: newFriend.friend.photo,
      alt: defaultPic,
      scores: newFriend.friend.scores,
      compatibility: newFriend.compatibility
    }
  );
  userData.push(user);
});

module.exports = routes;
