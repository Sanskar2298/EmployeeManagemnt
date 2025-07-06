import express from "express";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

// ✅ Use controller functions only
router.post("/signup", signup);
router.post("/login", login);
console.log("🔁 Hitting /register-employee route");
// router.post("/register-employee", registerEmployee);

export default router;
