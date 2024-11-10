export default function handler(req, res) {
    if (req.method === 'POST') {
        // Clear the cookie by setting its expiration to the past
        res.setHeader('Set-Cookie', [
            `token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict`,
        ]);

        // Respond with success
        return res.status(200).json({ message: 'Logged out successfully' });
    } else {
        // Handle invalid method
        return res.status(405).json({ message: 'Method not allowed' });
    }
}