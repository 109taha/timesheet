const jwt = require('jsonwebtoken');

// Middleware function to verify the token and check user role
const verifyToken = (req, res, next) => {
  // Get the token from the request header, query parameter, or body
  const token = req.headers.authorization || req.query.token || req.body.token;

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided 1.' });
  }

  try {
    // Verify the token using your secret key
    const decoded = jwt.verify(token, admin_jwt_secret);

    // Check the user role
    if (decoded.role === 'admin') {
      req.userRole = 'admin';
    } else if (decoded.role === 'superadmin') {
      req.userRole = 'superadmin';
    } else {
      req.userRole = 'user';
    }

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    // Token verification failed
    return res.status(403).json({ message: 'Invalid token.' });
  }
};

// Example usage of the middleware in an Express route
const adminAuth =  ( verifyToken, (req, res) => {
  // Check the user role from the middleware
  if (req.userRole !== 'admin' && req.userRole !== 'superadmin') {
    return res.status(403).json({ message: 'Access denied. Not authorized 2.' });
  }

  // Handle the request for admin or superadmin
  // ...

  res.json({ message: 'token verify' });
});

// Example usage of the middleware in an Express route
const superAdminAuth =  ( verifyToken, (req, res) => {
    // Check the user role from the middleware
    if ( req.userRole !== 'superadmin') {
      return res.status(403).json({ message: 'Access denied. Not authorized 3.' });
    }
  
    // Handle the request for admin or superadmin
    // ...
  
    res.json({ message: 'token verify' });
  });

  module.exports = {adminAuth, superAdminAuth}