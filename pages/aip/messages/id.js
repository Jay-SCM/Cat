// pages/api/messages/id.js

import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Kliea',
    password: 'Hisako1086',
    database: 'klieachat'
});

export default function handler(req, res) {
    const messageId = req.query.id; // Assuming you pass message id as part of the URL path
    if (req.method === 'DELETE') {
        // Delete message from the database
        connection.query(
            'DELETE FROM messages WHERE id = ?',
            [messageId],
            (error) => {
                if (error) {
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    res.status(200).json({ message: 'Message deleted successfully' });
                }
            }
        );
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
