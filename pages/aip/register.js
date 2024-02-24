// pages/api/register.js

import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Kliea',
    password: 'Hisako1086',
    database: 'klieachat'
});

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        // Check if user with the same email already exists
        connection.query(
            'SELECT * FROM users WHERE email = ?',
            [email],
            (error, results) => {
                if (error) {
                    res.status(500).json({ error: 'Internal Server Error' });
                } else if (results.length > 0) {
                    res.status(400).json({ error: 'User with this email already exists' });
                } else {
                    // Insert new user into the database
                    connection.query(
                        'INSERT INTO users (email, password) VALUES (?, ?)',
                        [email, password],
                        (error) => {
                            if (error) {
                                res.status(500).json({ error: 'Internal Server Error' });
                            } else {
                                res.status(200).json({ message: 'User registration successful' });
                            }
                        }
                    );
                }
            }
        );
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
