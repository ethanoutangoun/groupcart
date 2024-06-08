import userservice from "../services/user-service.js";
import express from "express";
import mongoose from "mongoose";
import controller from "../controllers/user.controller.js";
const router = express.Router();

//login route
router.post("/login", controller.loginUser);

//signup route
router.post("/signup", controller.signupUser);

export default router;
