import { verifyToken } from "./jwt.js";
import asyncHandler from "express-async-handler";

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    try {
      const decoded = verifyToken(token);
      const username = decoded;
      req.username = username;
      next();
    } catch (err) {
      res.status(401);
      throw { Message: "User is Unauthorized" };
    }
  } else {
    res.status(400);
    throw { Message: "User is not Unauthorized" };
  }
});

export default validateToken;
