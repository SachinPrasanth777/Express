import validateToken from "../middlewares/authentication.js";
import express from "express";

export async function getUser(req, res, next) {
  try {
    const user = req.username;
    res.status(200).json({
      success: true,
      message: "User Fetched Successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
}

const router = express.Router();
router.get("/", validateToken, getUser);
export default router;
