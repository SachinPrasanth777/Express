import jwt from "jsonwebtoken";

export function generateToken(payload) {
  return jwt.sign(payload, process.env.ACCESS_TOKEN);
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.ACCESS_TOKEN);
}
