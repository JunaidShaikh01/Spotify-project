require("dotenv").config();

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log("authHeader", authHeader);
  // console.log("jwt Secret", JWT_SECRET);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ message: "Missing auth headers" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // console.log("Decode ", decoded);
    req.userId = decoded.userId;
    // console.log("user id", userId);
    next();
  } catch (error) {
    return res.status(403).json({ message: `Some error occured: ${error}` });
  }
};

module.exports = {
  authMiddleware,
};
