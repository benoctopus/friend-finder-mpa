module.exports = function determineCompatibility(bachelor, userData) {
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
};


