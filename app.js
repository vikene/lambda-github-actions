var express = require('express');
var app = express();
var serverlessHttp = require('serverless-http')


app.get("/", function(req, res){
    res.send("Yo man, auto deploy");
})

module.exports.handler = serverlessHttp(app)