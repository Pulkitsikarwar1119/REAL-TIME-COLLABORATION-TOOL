const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

let sharedText = ''; // Shared document

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("text-change", (data) => {
    socket.broadcast.emit("text-update", data);
  });

  socket.on("drawing-data", (data) => {
    socket.broadcast.emit("drawing-data", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});


const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Collab server running at http://localhost:${PORT}`);
});
