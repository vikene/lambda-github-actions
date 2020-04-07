var express = require('express');
var app = express();
var serverlessHttp = require('serverless-http')


app.get("/", function(req, res){
    res.send("HELLO WORLD");
})

module.exports.handler = serverlessHttp(app)