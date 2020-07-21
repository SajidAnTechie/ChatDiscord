const express = require("express");
const colors = require("colors");
const socketio = require("socket.io");
const { userJoin, userLeave, getCurrentUser } = require("./utilis/users");
const formattedMessage = require("./utilis/messages");
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
  socket.on("joinRoom", ({ name, room }) => {
    const user = userJoin(socket.id, name, room);

    socket.join(user.room);

    //welcome current user
    socket.emit(
      "message",
      formattedMessage("ChartCord", "Welcom to the ChatCord")
    );

    //Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formattedMessage("ChartCord", `${user.name} has joined the chat`)
      );

    //Liten for chat message
    socket.on("chatMessage", (msg) => {
      console.log(msg);
      const user = getCurrentUser(socket.id);

      io.to(user.room).emit("message", formattedMessage(user.name, msg));
    });

    //Runs when user disconnect
    socket.on("disconnect", () => {
      const user = userLeave(socket.id);
      if (user) {
        io.to(user.room).emit(
          "message",
          formattedMessage("ChartCord", `${user.name} has left the chat`)
        );
      }
    });
  });
});
