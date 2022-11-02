import Group from "../schemas/Group.js";
import groupService from '../schemas/group-service.js'
import express from 'express'
import mongoose from 'mongoose'
const router = express.Router();


//making a group
router.post('/group/:id', async(req,res) => {
  const body = req.body;
  const id = req.params.id;
  const savedgroup = await groupService.createGroup(body, id)
  if(savedgroup){
    res.status(201).send(savedgroup);
  }else{
    res.status(500).end();
  }
})

//joining a group
router.post('/group/:id/:name', async(req, res) => {
  const id = req.params.id;
  const name = req.params.name;
  const joinedgroup = await groupService.joinGroup(name, id)
  if(joinedgroup){
    res.status(201).send(joinedgroup);
  }else{
    res.status(500).end();
  }
  
})

export default router;