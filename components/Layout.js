//components/ Layout.js
import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const Layout = ({ children }) => {
  useEffect(() => {
    // Event listeners
    socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from socket server');
    });

    socket.on('chat message', (msg) => {
      console.log('Received message:', msg);
      // Handle received message (e.g., update state)
    });

    // Clean-up
    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>{children}</div>;
};

export default Layout;
