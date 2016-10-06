var express = require('express');
var app     = express();
var consign = require('consign');

consign({cwd: 'app' })    
    .include('controllers')
    .then('routes')
    .then('../config/log')
    .into(app);

module.exports = app;


