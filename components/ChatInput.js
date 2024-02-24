//components/ChatInput
import React, { useState } from 'react';

const ChatInput = ({ sendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      sendMessage(inputText);
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="chat-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;


// import { useState } from "react";
// import io from "socket.io-client";

// const socket = io();

// const ChatInput = () => {
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     socket.emit("message", message);
//     setMessage("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={message} onChange={handleChange} />
//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default ChatInput;
