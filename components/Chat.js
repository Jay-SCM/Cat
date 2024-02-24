//components/Chat
// import React from 'react';
// import MessageList from './MessageList';
// import ChatInput from './ChatInput';

// const Chat = () => {
//   return (
//     <div className="chat-container">
//       <MessageList />
//       <ChatInput />
//     </div>
//   );
// };

// export default Chat;


// components/ChatApp.js
import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from backend and update state
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      // Make a GET request to fetch messages from the backend
      const response = await fetch('/api/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data); // Update messages state with fetched data
      } else {
        console.error('Failed to fetch messages');
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async (messageContent) => {
    try {
      // Make a POST request to send message to the backend
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageContent }),
      });
      if (response.ok) {
        // Message sent successfully, fetch updated messages
        fetchMessages();
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-container">
      <MessageList messages={messages} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;