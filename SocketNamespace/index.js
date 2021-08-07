const expressJS = require('express');
const app = expressJS();

const http = require('http');
const expressJsServer = http.createServer(app);

// Socket IO Configuration
const {Server} =require('socket.io');
const io = new Server(expressJsServer);


//Create Namespace Group One
let group1 = io.of("/groupOne");
group1.on( "connection", function (socket) {
    console.log("New Group 1 Connected")

    group1.emit("group1","Hello Group One");

    socket.on("disconnect", function (){
        console.log("Group 1 Disconnected")
    })
})

//Create Namespace Group Two
let group2 = io.of("/groupTwo");
group2.on( "connection", function (socket) {
    console.log("New Group 2 Connected")

    group2.emit("group2","Hello Group Two");

    socket.on("disconnect", function (){
        console.log("Group 2 Disconnected")
    })
})


app.get('/', function (request, response){
    response.sendFile(__dirname+"/index.html");
})


expressJsServer.listen(3000, function (){
    console.log("Serveer Run Success on @3000 Port");
})