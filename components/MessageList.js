//components/MessageList
// import React from 'react';
// import Message from './Message';

// const MessageList = ({ messages }) => {
//   return (
//     <div className="message-list">
//       {messages.map((message) => (
//         <Message key={message.id} message={message} />
//       ))}
//     </div>
//   );
// };

// export default MessageList;


import React, { useState, useEffect } from 'react';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('/api/messages')
      .then(response => response.json())
      .then(data => setMessages(data.messages))
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

  return (
    <div className="message-list">
      {messages.map(message => (
        <div key={message.id}>
          <p>{message.content}</p>
          <p>{message.sender}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
