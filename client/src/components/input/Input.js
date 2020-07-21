import React, { useState } from "react";

const InputContainer = ({ sendMessage }) => {
  const [text, settext] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = text.trim().length;

    if (message === 0) {
      return;
    }

    sendMessage(message);
    settext("");
  };

  return (
    <div className="chat-form-container">
      <form id="chat-form" onSubmit={handleSubmit}>
        <input
          id="msg"
          type="text"
          placeholder="Enter Message"
          required
          value={text}
          autoComplete="off"
          onChange={(e) => settext(e.target.value)}
        />
        <button type="submit" className="btn">
          <i className="fas fa-paper-plane"></i> Send
        </button>
      </form>
    </div>
  );
};

export default InputContainer;
