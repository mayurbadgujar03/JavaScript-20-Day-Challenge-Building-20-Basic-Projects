const http = require("http");
const express = require("express");
const path = require('path');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Handle user message
    socket.on('user-message', (message) => {
        // Broadcast message to all clients except the sender
        socket.broadcast.emit("message", { text: message, timestamp: new Date().toLocaleTimeString() });
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Serve static files (like index.html)
app.use(express.static(path.resolve('./public')));

// Serve index.html file
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'));
});

// Listen on port 9000
server.listen(9000, () => {
    console.log("Server started at http://localhost:9000");
});
