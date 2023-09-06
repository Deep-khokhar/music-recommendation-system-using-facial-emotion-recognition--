import express from "express";
import { loginUser, registerUser, viewmyProfile } from "../controller/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.post("/user/register-user", registerUser);
router.post("/user/login-user", loginUser);
router.get("/user/my-profile", isAuthenticated, viewmyProfile);
export default router;
