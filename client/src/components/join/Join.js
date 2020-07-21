import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import "./join.css";

const Join = () => {
  useEffect(() => {
    const socket = io("http://localhost:5000");
  }, []);

  return (
    <div className="join-container">
      <header className="join-header">
        <h1>
          <i className="fas fa-smile"></i> ChatCord
        </h1>
      </header>
      <main className="join-main">
        <form action="chat.html">
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="room">Room</label>
            <select name="room" id="room">
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="Ruby">Ruby</option>
              <option value="Java">Java</option>
            </select>
          </div>
          <Link exact to="/chat-room">
            <button type="submit" className="btn">
              Join Chat
            </button>
          </Link>
        </form>
      </main>
    </div>
  );
};

export default Join;
