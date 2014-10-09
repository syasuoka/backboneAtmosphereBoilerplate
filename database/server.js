'use strict';

var express = require('express');
var app = express();
var fs = require('fs');

var database = require('./database');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);

// list all items
app.get('/items', function(req, res) {
    database.getItems(function(err, items) {
        if (err) {
            res.json(400, {error: err.message});
        } else {
            res.json(items);
        }
    });
});

var port = process.env.PORT || 8001;
var host = process.env.HOST || '0.0.0.0';
console.log('Starting dev REST server on http://%s:%d/', host, port);
app.listen(port, host);