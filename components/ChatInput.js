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
