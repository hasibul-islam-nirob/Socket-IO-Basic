const expressJS = require('express');
var app = expressJS();

const http = require('http');
var expressJsServer = http.createServer(app);


app.get('/', function (request, response){
    response.sendFile(__dirname+"/index.html");
})


expressJsServer.listen(3000, function (){
    console.log("Serveer Run Success on @3000 Port");
})