import Group from "../schemas/Group.js";
// import groupService from '../schemas/group-service.js'
import express from "express";
import mongoose from "mongoose";
import controller from "../controllers/group.controller.js";
import { requireAuth } from "../middleware/authJwt.js";
const router = express.Router();

router.use(requireAuth);

//getting all groups
router.get("/group/user", controller.getGroup);

//getting all users in group
router.get("/group/:groupid", controller.getGroupUsers);

//create a group
router.post("/group", controller.createGroup);

//joining a group
router.post("/group/join/:name", controller.joinGroup);

//removing user from group
router.delete("/group/:id", controller.deleteGroup);

export default router;
