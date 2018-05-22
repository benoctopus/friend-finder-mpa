$(document).ready(listeners);


function listeners() {
  const signIn = $('#sign-in');
  const survey = $('#survey');

  if (signIn.length) {
    signInForm()
  }

  else if (survey.length) {
    surveyForm()
  }


  function signInForm() {
    signIn.on('submit', e => {
      e.preventDefault();
      localStorage.name = e.target.userName.value;
      localStorage.photoUrl = e.target.photoUrl.value;
      window.location = '/survey'
    })
  }

  function surveyForm() {
    survey.on('submit', e => {
      e.preventDefault();
      let results = [];

      for (let i = 1; i <= 10; i++) {
        let input = $(`input[name=${i}]:checked`).val();
        if (!input) {
          alert('please fill out all fields');
          return
        }
        results.push(input)
      }
      postResults(results)
    })
  }
}

function postResults(scores) {
  if (localStorage.name) {
    $.post('/api/newfriend',
      {
        name: localStorage.name,
        photo: localStorage.photoUrl,
        scores
      }, res => console.log(res))
  }
  else {
    alert('Please provide a name and re-complete the survey');
    window.location = '/'
  }
}
