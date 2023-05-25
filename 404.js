var http = require('http');
var express=require('express');
var app=express();



app.get('/',(req,res)=>
{
  res.send("test");
})

app.get("*",(req,res)=>
{
  res.sendFile(__dirname +"/404.html");
})
app.listen(4001,()=>
{
  console.log("App port 4000")
})
/*
app.use(function(req,res,next){
    res.status(404).render("404");
})*/

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(3004);*/
