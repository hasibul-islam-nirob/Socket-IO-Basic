const expressJS = require('express');
const app = expressJS();

const http = require('http');
const expressJsServer = http.createServer(app);

// Socket IO Configuration
const {Server} =require('socket.io');
const ioServer = new Server(expressJsServer);

app.get('/', function (request, response){
    response.sendFile(__dirname+"/index.html");
})


expressJsServer.listen(3000, function (){
    console.log("Serveer Run Success on @3000 Port");
})