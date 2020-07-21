import React from "react";

const InputContainer = ({ sendMessage, onchange, text, ref }) => {
  return (
    <div className="chat-form-container">
      <form id="chat-form" onSubmit={sendMessage}>
        <input
          id="msg"
          type="text"
          placeholder="Enter Message"
          required
          value={text}
          autoComplete="off"
          onChange={onchange}
          ref={ref}
        />
        <button type="submit" className="btn">
          <i className="fas fa-paper-plane"></i> Send
        </button>
      </form>
    </div>
  );
};

export default InputContainer;
