# friend finder mpa

A simple survey and compatibility matching service populated with dummy data.

Deployed at https://friend-finder-mpa.herokuapp.com/

This app is a conversion of my friend-finder-react project in mpa format with refined backend code and pug templating. see https://github.com/benoctopus/friend-finder-react.

## TL;DR

See the heroku link above for a fully function deployed version of this app. In order to run from source code, install npm dependencies and run `npm start` or `npm dev`(for nodemon) in the project's base directory.

## instructions 

The app is a multiple page web application served from express with page templates and partials rendered using pug. The route route and catch-all will lead to the sign in page where users must provide a username and photo url to continue. For convenience the app will not break if the user to provide an invalid url or some random text. Once sign in is completed, the user will be taken to the survey page, where they will answer 10 multiple choice personality based questions. After submission of this form, the results will be posted to the server. A rendered modal will be provided as a response and placed in the center of the survey page. From here the user will either be able to return to the sign in page or got to a seperate view where they can view all 'potential friends' in the same format the survey modal was presented plus their survey answers. As this app is a test all 'potential friends' are randomly generated from dummy data on server start.

## dependencies

Various npm Packages:
- express
- nodemon
- body-parser
- pug

As well as:
- jquery
- sass/scss (compiled manually)
    