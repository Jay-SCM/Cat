// pages/api/messages.js

// import mysql from 'mysql';

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'Kliea',
//     password: 'Hisako1086',
//     database: 'klieachat'
// });

// export default function handler(req, res) {
//     if (req.method === 'POST') {
//         const { sender_id, receiver_id, message } = req.body;
//         // Insert message into the database
//         const query = 'INSERT INTO messages (sender_id, receiver_id, message) VALUES (?, ?, ?)';
//         connection.query(query, [sender_id, receiver_id, message], (error, results) => {
//             if (error) {
//                 res.status(500).json({ error: 'Internal Server Error' });
//             } else {
//                 res.status(200).json({ message: 'Message sent successfully' });
//             }
//         });
//     } else if (req.method === 'GET') {
//         // Retrieve messages from the database
//         const query = 'SELECT * FROM messages';
//         connection.query(query, (error, results) => {
//             if (error) {
//                 res.status(500).json({ error: 'Internal Server Error' });
//             } else {
//                 res.status(200).json(results);
//             }
//         });
//     } else {
//         res.status(405).json({ error: 'Method Not Allowed' });
//     }
// }

import { Server } from "socket.io";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method === "POST") {
    // Handle incoming messages and broadcast them using Socket.IO
    const io = new Server().of("/api/messages");
    io.on("connection", (socket) => {
      socket.on("message", (message) => {
        io.emit("message", message);
      });
    });

    res.status(200).json({ message: "Message sent successfully" });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
