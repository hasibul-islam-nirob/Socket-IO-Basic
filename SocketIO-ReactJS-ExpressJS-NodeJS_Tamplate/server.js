const expressJS = require('express');
const app = expressJS();
const http = require('http');
const expressJsServer = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(expressJsServer);

const path = require('path');
app.use(expressJS.static('client/build'));
// Resolved Path
app.get('*',function (request, response) {
    response.sendFile(path.resolve(__dirname,'client','build','index.html'));
})



app.get('/expressServer',function (req, res) {
    res.end("This is our Express JS Server");
})


io.on("connection", function (socket) {
    console.log("New User Connect");



    socket.on("disconnect", function (){
        console.log(" User Disconnect");
    })
})


expressJsServer.listen(4000, function (){
    console.log(" Server Run Success @4000 Port");
})