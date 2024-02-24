// pages/api/profile.js

import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hisako1086',
    database: 'klieachat'
});

export default function handler(req, res) {
    if (req.method === 'GET') {
        const userId = req.query.id; // Assuming you pass user id as a query parameter
        // Retrieve user profile data from the database
        connection.query(
            'SELECT * FROM users WHERE id = ?',
            [userId],
            (error, results) => {
                if (error) {
                    res.status(500).json({ error: 'Internal Server Error' });
                } else if (results.length === 0) {
                    res.status(404).json({ error: 'User not found' });
                } else {
                    res.status(200).json(results[0]);
                }
            }
        );
    } else if (req.method === 'PUT') {
        const { id, name, email, status } = req.body; // Assuming you pass updated profile data in the request body
        // Update user profile data in the database
        connection.query(
            'UPDATE users SET name = ?, email = ?, status = ? WHERE id = ?',
            [name, email, status, id],
            (error) => {
                if (error) {
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    res.status(200).json({ message: 'Profile updated successfully' });
                }
            }
        );
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
