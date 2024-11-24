const isAuthorized = (roles) => (req, res, next) => {
    const userRole = req.user.role; // Assume req.user is populated via authentication middleware
    if (!roles.includes(userRole)) {
      return res.status(403).json({ error: 'Forbidden: Insufficient permissions.' });
    }
    next();
  };
  
  module.exports = { isAuthorized };
  