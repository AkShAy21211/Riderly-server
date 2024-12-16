import jwt from "jsonwebtoken";
import SECRETS from "../config/index.js";


const verifyToken = async (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  
  
  if (!token) {
    return res.status(401).json({ message: "Token is required" });
  }



  try {
    const decoded =  jwt.verify(token, SECRETS.JWT_SECRET);

    console.log(decoded);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token is invalid" });
  }
};

export default verifyToken;
