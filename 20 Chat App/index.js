const http = require("http");
const express = require("express");
const path = require('path');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('user-message', (message) => {
        socket.broadcast.emit("message", { text: message, timestamp: new Date().toLocaleTimeString() });
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

app.use(express.static(path.resolve('./public')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'));
});

server.listen(9000, () => {
    console.log("Server started at http://localhost:9000");
});
