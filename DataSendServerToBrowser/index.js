const expressJS = require('express');
const app = expressJS();

const http = require('http');
const expressJsServer = http.createServer(app);

// Socket IO Configuration
const {Server} =require('socket.io');
const io = new Server(expressJsServer);

//Check Connection
io.on( "connection", function (socket) {
    console.log("New User Connected")

    //Data Send Server To Client Continues
    setInterval(function (){
        let date = new Date();
        let time = date.getTime();
        socket.send(time);
    },10)

    socket.on("disconnect", function (){
        console.log("User Disconnected")
    })
})


app.get('/', function (request, response){
    response.sendFile(__dirname+"/index.html");
})


expressJsServer.listen(3000, function (){
    console.log("Serveer Run Success on @3000 Port");
})