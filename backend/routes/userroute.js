import userservice from '../schemas/user-service.js'
import express from 'express'
import mongoose from 'mongoose'
const router = express.Router();

router.post('/user', async (req, res) => {
  const item = req.body;
  const saveduser = await userservice.createUser(item);
  console.log(saveduser)
  if(saveduser){
    res.status(201).send(saveduser);
  }
  else{
    res.status(500).end();
  }
})

export default router;