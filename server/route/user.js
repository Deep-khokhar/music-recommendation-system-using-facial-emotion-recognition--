import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  viewmyProfile,
} from "../controller/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.post("/user/register-user", registerUser);
router.post("/user/login-user", loginUser);
router.get("/user/my-profile", isAuthenticated, viewmyProfile);
router.get("/user/logout-user", logoutUser);
export default router;
