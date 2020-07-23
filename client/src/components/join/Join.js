import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./join.css";

const Join = () => {
  const [username, setusername] = useState("");
  const [room, setroom] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    if (username === "" || room === "") {
      return;
    }

    history.push(`/chat-room?name=${username}&room=${room}`);
  };

  return (
    <div className="join-container">
      <header className="join-header">
        <h1>
          <i className="fas fa-smile"></i> ChatDiscord
        </h1>
      </header>
      <main className="join-main">
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
              required
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="room">Room</label>
            <select
              name="room"
              id="room"
              onChange={(e) => setroom(e.target.value)}
            >
              <option value="JavaScript">...</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="Ruby">Ruby</option>
              <option value="Java">Java</option>
            </select>
          </div>

          <button type="submit" className="btn">
            Join Chat
          </button>
        </form>
      </main>
    </div>
  );
};

export default Join;
