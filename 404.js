var http = require('http');
var express=require('express');
var app=express();

app.use(function(req,res,next){
    res.status(404).render("404");
})

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(3004);
