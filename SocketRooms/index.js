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

    socket.join("group1");
    io.sockets.in("group1").emit("g1Event1","I'm From Group 1 Using Event 1");
    io.sockets.in("group1").emit("g1Event2","I'm From Group 1 Using Event 2");

    socket.join("group2");
    io.sockets.in("group2").emit("g2Event1","I'm From Group 2 Using Event 1");
    io.sockets.in("group2").emit("g2Event2","I'm From Group 2 Using Event 2");

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