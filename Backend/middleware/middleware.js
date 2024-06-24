require("dotenv").config();

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(404).json({
      msg: "Access Denied",
    });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.adminId = decoded.adminId;
    next();
  } catch (error) {
    return res.status(404).json({
      msg: `Some error occured :${error}`,
    });
  }
};

module.exports = {
  authMiddleware,
};
