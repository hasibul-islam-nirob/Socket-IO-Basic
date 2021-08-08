const expressJS = require('express');
const http = require('http');

const multer = require('multer');
const multerInc = multer();

const app = expressJS();
const expressJsServer = http.createServer(app);


// Multer Start
var myStorage = multer.diskStorage({
    destination:function (request, file, callBack){
        callBack(null,'./img')
    },
    filename:function (request, file, callBack){
        callBack(null, file.originalname)
    }
})

var upload = multer({storage:myStorage}).single('myfile');

app.post("/img", function (request,response){

    upload(request, response, function (error) {
        if (error){
            response.send("File Upload Fail");
        }else {
            response.send("File Upload Success");
        }
    })

})
//Multer End

// Socket IO Configuration
const {Server} =require('socket.io');
const io = new Server(expressJsServer);

//Check Connection
io.on( "connection", function (socket) {
    console.log("New User Connected")


    socket.on("msgSendServer",function (chatMsg) {
        io.emit("magTransfer",chatMsg);
    })


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