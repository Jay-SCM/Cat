// pages/api/messages.js

import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hisako1086',
    database: 'klieachat'
});

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { message } = req.body;
        // Insert message into the database
        const query = 'INSERT INTO messages (message) VALUES (?)';
        connection.query(query, [message], (error, results) => {
            if (error) {
                console.error('Error inserting message:', error); // Log the error
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                console.log('Message inserted successfully');
                res.status(200).json({ success: true });
            }
        });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
