const express = require('express');
const path = require('path');
const parser = require('body-parser');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const app = express();


app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../client/views'));


app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use(express.static('app/client/public'));

app.use(apiRoutes);
app.use(htmlRoutes);



app.listen(process.env.PORT || 8000, () => console.log('Listening on port 8000!'));

