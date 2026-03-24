const jwt = require('jsonwebtoken');

// Middleware to protect API routes
function verifyToken(req, res, next) {
    // Get token from headers
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send({ message: 'A token is required for authentication' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send({ message: 'Invalid Token' });
    }
    return next();
}

module.exports = verifyToken;
