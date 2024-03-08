import express from "express";
import { handleLogin, handleSignUp } from "./auth.service.js";

export async function signup(req, res, next) {
  try {
    const { username, password } = req.body;
    await handleSignUp(username, password);
    res
      .status(200)
      .json({ success: true, message: "User Signed Up Successfully" });
  } catch (error) {
    res.status(400).json({ message: "User Already Exists" });
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const token = await handleLogin(username, password);
    res
      .status(200)
      .json({ success: true, message: "Logged In Successfully", token });
  } catch (error) {
    res.status(400).json({ message: "Logged in Failed" });
    next(error);
  }
}

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
export default router;
