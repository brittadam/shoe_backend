const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "No token provided",
    });
  }

  // Extract the token without the "Bearer " prefix
  token = token.replace("Bearer ", "");

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: "error",
        message: "Invalid token",
      });
    }

    //check if user is an admin
    if (!decoded.admin) {
      return res.status(403).json({
        status: "FORBIDDEN",
        message: "Only admins are allowed to perform this operation",
      });
    }

    req.user = decoded;
    next();
  });
};

//export authentication middleware
module.exports = authentication;