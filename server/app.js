const express = require("express");
const colors = require("colors");
const socketio = require("socket.io");
const app = express();

const PORT = 5000 || process.env.PORT;

const server = app.listen(
  PORT,
  console.log(
    `Server is running on development mode at port ${PORT}`.yellow.bold
  )
);

const io = socketio(server);
io.on("connection", (socket) => {
  console.log("user is connected");
  socket.emit("msg", "user is connected");

  socket.on("msg", (message) => {
    console.log(message);
  });
});
