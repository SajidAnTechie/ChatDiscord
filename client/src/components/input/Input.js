import React, { useState } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const InputContainer = ({ sendMessage }) => {
  const [text, settext] = useState("");
  const [showEmoji, setEmoji] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      return;
    }

    sendMessage(text.trim());
    settext("");
  };

  const addEmoji = (e) => {
    // console.log(e.native);
    let emoji = e.native;
    settext(text + emoji);
  };
  const toogleEmoji = () => {
    setEmoji(!showEmoji);
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

      {showEmoji && (
        <span>
          <div style={{ margin: "10px" }}>
            <button
              style={{
                width: "50px",
                height: "30px",
                border: "none",
                borderRadius: "3px",
              }}
              onClick={toogleEmoji}
            >
              Close
            </button>
          </div>
          <Picker onSelect={addEmoji} emojiTooltip={true} title="CharDiscord" />
        </span>
      )}
      {!showEmoji && (
        <button style={{ margin: "10px" }} onClick={toogleEmoji}>
          {String.fromCodePoint(0x1f60a)}
        </button>
      )}
    </div>
  );
};

export default InputContainer;
