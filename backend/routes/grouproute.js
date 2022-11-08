import Group from "../schemas/Group.js";
// import groupService from '../schemas/group-service.js'
import express from 'express'
import mongoose from 'mongoose'
import controller from '../controllers/group.controller.js'
const router = express.Router();


//making a group
router.post('/group/:id', controller.createGroup)

//joining a group
router.post('/group/:id/:name', controller.joinGroup)

export default router;