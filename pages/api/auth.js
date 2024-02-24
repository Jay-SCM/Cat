// pages/api/auth.js

import mysql from 'mysql';

// Configure MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hisako1086',
    database: 'klieachat'
});

// Handle user login
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        // Authenticate user using MySQL query
        const query = 'SELECT id, name, email FROM users WHERE email = ? AND password = ?';
        connection.query(query, [email, password], (error, results) => {
            if (error) {
                console.error('MySQL Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            } else if (results.length === 0) {
                res.status(401).json({ error: 'Invalid email or password' });
            } else {
                // User authenticated successfully
                res.status(200).json({ message: 'Login successful', user: results[0] });
            }
        });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
