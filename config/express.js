var express = require('express');
var app     = express();
var consign = require('consign');

app.set('view engine', 'ejs');
app.set('views', './app/views');


consign({cwd: 'app' })    
    .include('controllers')
    .then('routes')
    .then('../config/log')
    .into(app);

module.exports = app;


