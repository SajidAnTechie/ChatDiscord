import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Socket from "../utilis/Socket";
import Messages from "../messages/Messages";
import InputContainer from "../input/Input";
import Users from "../users/Users";
import "./chat.css";

let socket;
const Chat = () => {
  const [messages, setmessages] = useState([]);
  const [room, setroom] = useState("");
  const [users, setusers] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    const name = queryParams.get("name").trim();

    const room = queryParams.get("room").trim();

    socket = Socket();

    socket.emit("joinRoom", { name, room });

    socket.on("message", (msg) => {
      setmessages((messages) => messages.concat(msg));
    });

    socket.on("roomUsers", ({ room, users }) => {
      setroom(room);
      setusers(users);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (msg) => {
    socket.emit("chatMessage", msg);
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>
          <i className="fas fa-smile"></i> ChatDiscord
        </h1>
        <Link to="/" className="btn">
          Leave Romm
        </Link>
      </header>
      <main className="chat-main">
        <div className="chat-sidebar">
          <h3>
            <i className="fas fa-comments"></i> Room Name:
          </h3>
          <h2 id="room-name">{room}</h2>
          <h3>
            <i className="fas fa-users"></i> Users
          </h3>
          <Users users={users} />
        </div>
        <Messages messages={messages} />
      </main>
      <InputContainer sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
