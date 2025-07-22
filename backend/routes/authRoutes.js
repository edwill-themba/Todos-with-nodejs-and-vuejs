import express from "express";
import { signUp, signIn, signOut } from "../controller/authController.js";
import { protect } from "../middleware/authMiddliware.js";

const router = express.Router();
// register user
router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.route("/signOut").post(protect, signOut);

export default router;
