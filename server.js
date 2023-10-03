// load express
const express = require('express');
const path = require('path');

//require the languages 'database'
const langDb = require('./data/languages-db');

// create our express app
const app = express();

// configure the app(app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// mount middlware(app.use)

// mount routes

// define a 'root' route directly on app
app.get('/', function(req, res) {
    //path must start with leading slash
    res.redirect('/languages');
});

app.get('/home', function(req, res) {
    // never being the name of the template with a forward slash
    res.render('home');
});

app.get('/languages', function(req, res) {
    const languages = langDb.getAll();
    res.render('languages/index', {languages});
});

// tell app to listen on port 3000 for HTTP from clients
app.listen(3000, function() {
    console.log('Listening on port 3000');
});