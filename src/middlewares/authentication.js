import { verifyToken } from "./jwt.js";
import asyncHandler from "express-async-handler";

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    try {
      const decoded = verifyToken(token);
      const username = decoded;
      req.username = username;
      next();
    } catch (err) {
      res.status(401).json({ statusCode: 401, Message: "User is unauthorized" });
    }
  } else {
    res.status(400).json({statusCode:400,Message:"Unauthorized Jwt"})
  }
});

export default validateToken;
