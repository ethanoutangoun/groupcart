import userservice from "../schemas/user-service.js";
import express from "express";
import mongoose from "mongoose";
import controller from "../controllers/user.controller.js";
const router = express.Router();

router.post("/user", async (req, res) => {
  const item = req.body;
  const saveduser = await userservice.createUser(item);
  console.log(saveduser);
  if (saveduser) {
    res.status(201).send(saveduser);
  } else {
    res.status(500).end();
  }
});

//login route
router.post("/login", controller.loginUser);

//signup route
router.post("/signup", controller.signupUser);

export default router;
