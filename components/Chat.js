//components/Chat
import React from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

const Chat = () => {
  return (
    <div className="chat-container">
      <MessageList />
      <ChatInput />
    </div>
  );
};

export default Chat;
