import React, { useRef, useEffect } from "react";
import Message from "../message/Message";

const Messages = ({ messages }) => {
  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [messages]);

  const ref = useRef();
  return (
    <div ref={ref} className="chat-messages">
      {messages.map((message, index) => {
        return <Message key={index} message={message} />;
      })}
    </div>
  );
};

export default Messages;
