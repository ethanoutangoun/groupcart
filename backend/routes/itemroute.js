import Item from '../schemas/Item.js'
import itemService from '../schemas/item-service.js'
import express from 'express'
import mongoose from 'mongoose'
const router = express.Router();

//getting all items
router.get('/items/:group', async (req, res) => {
  try{
    const group = req.params.group;
    const result = await itemService.getItems(group);
    console.log(result)
    res.send(result)
  }catch(error){
    console.log(error)
    res.status(500).send('An error occured in the server.')
  }
})

//deleting items
router.delete('/items/:id', async (req, res) => {
  const id = req.params['id'];
  console.log(id);
  const result = await itemService.deleteItems(id);
  console.log(result)
  if(result){
    res.status(202).end();
  }
  else{
    res.status(500).end();
  }
})

//posting items
router.post('items/:id/:group', async (req, res) => {
  const item = req.body;
  const group = req.params.group;
  const id = req.params.id;
  const savedItem = await itemService.addItems(item, group, id);
  if(savedItem){
    res.status(201).send(savedItem);
  }
  else{
    res.status(500).end();
  }
})

export default router;