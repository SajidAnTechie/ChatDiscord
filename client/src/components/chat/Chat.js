import React from "react";
import { Link } from "react-router-dom";
import "./chat.css";

const Chat = () => {
  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>
          <i className="fas fa-smile"></i> ChatCord
        </h1>
        <Link exact to="/" classNameName="btn">
          Leave Romm
        </Link>
      </header>
      <main className="chat-main">
        <div className="chat-sidebar">
          <h3>
            <i className="fas fa-comments"></i> Room Name:
          </h3>
          <h2 id="room-name">JavaScript</h2>
          <h3>
            <i className="fas fa-users"></i> Users
          </h3>
          <ul id="users">
            <li>Brad</li>
            <li>John</li>
            <li>Mary</li>
            <li>Paul</li>
            <li>Mike</li>
          </ul>
        </div>
        <div className="chat-messages">
          <div className="message">
            <p className="meta">
              Brad <span>9:12pm</span>
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              repudiandae.
            </p>
          </div>
          <div className="message">
            <p className="meta">
              Mary <span>9:15pm</span>
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              repudiandae.
            </p>
          </div>
        </div>
      </main>
      <div className="chat-form-container">
        <form id="chat-form">
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autocomplete="off"
          />
          <button className="btn">
            <i className="fas fa-paper-plane"></i> Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
