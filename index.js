const express = require('express');
const app= express();
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);


io.on('connection', (socket) => {
    console.log('a user connected', socket.id);


    io.on('from_client', () =>{
        console.log("event coming from client");
    })


    setInterval(()=>{
        socket.emit("from_server");
    },2000)
  });


app.use('/', express.static(__dirname + '/public'));

server.listen(3000, () =>{
    console.log(`Server started`);
});
