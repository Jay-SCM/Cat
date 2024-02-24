// ChatInput.js

import React, { useState } from 'react';
import axios from 'axios'; // Assuming axios is used for HTTP requests

const ChatInput = ({ sendMessage }) => {
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      try {
        // Make a POST request to send the message
        const response = await axios.post('/api/messages', { message: inputText });
        if (response.status === 200 && response.data.success) {
          // Message sent successfully
          sendMessage(inputText);
          setInputText('');
          setError(''); // Reset error state
        } else {
          setError('Failed to send message'); // Set error state
        }
      } catch (error) {
        setError('Error sending message: ' + error.message); // Set error state
      }
    } else {
      setError('Message cannot be empty'); // Set error state for empty message
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default ChatInput;










// // ChatInput.js

// import React, { useState } from 'react';
// import axios from 'axios'; // Assuming axios is used for HTTP requests

// const ChatInput = ({ sendMessage }) => {
//   const [inputText, setInputText] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (inputText.trim() !== '') {
//       try {
//         // Make a POST request to send the message
//         const response = await axios.post('/api/messages', { message: inputText });
//         if (response.status === 200) {
//           // Message sent successfully
//           sendMessage(inputText);
//           setInputText('');
//         } else {
//           console.error('Failed to send message:', response.data.error);
//         }
//       } catch (error) {
//         console.error('Error sending message:', error);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="chat-input">
//       <input
//         type="text"
//         placeholder="Type a message..."
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default ChatInput;






// //components/ChatInput
// import React, { useState } from 'react';

// const ChatInput = ({ sendMessage }) => {
//   const [inputText, setInputText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputText.trim() !== '') {
//       sendMessage(inputText); // Send the message
//       setInputText(''); // Clear the input field after sending
//     } else {
//       // Display an error message or handle empty message case
//       console.error('Cannot send an empty message');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="chat-input">
//       <input
//         type="text"
//         placeholder="Type a message..."
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default ChatInput;



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
