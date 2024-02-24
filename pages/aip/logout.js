// pages/api/logout.js

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Implement logout logic here (e.g., remove session or token from client-side storage)using session-based authentication, destroy session:
        req.session.destroy((err) => {
            if (err) {
                res.status(500).json({ error: 'Failed to logout' });
            } else {
                res.status(200).json({ message: 'Logout successful' });
            }
        });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
