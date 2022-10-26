// const express = require('express');
// const cors = require('cors');
const port = 5001;

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import Item from './schemas/Item.js'
import itemService from './schemas/item-service.js'

const app = express();

dotenv.config();
//geting URI
// const Db = dotenv.
// console.log(Db)
let URI = process.env.ATLAS_URI
let dbconnection = mongoose.connect(URI)

app.use(express.json());


//bogus items to check work
let items = [
  {
    key: '1',
    item: 'Pasta',
    quantity: '1'
  },
  {
    key: '2',
    item: 'tuna',
    quantity: '3'

  },
  {
    key: '3',
    item: 'beets',
    quantity: '10'
  },
  {
    key: '4',
    item: 'lettuce',
    quantity: '1'
  },
  {
    key: '5',
    item: 'cheetos',
    quantity: '4'
  }
]

//test
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//getting all items
app.get('/items', async (req, res) => {
  try{
    const result = await itemService.getItems();
    console.log(result)
    res.send(result)
  }catch(error){
    console.log(error)
    res.status(500).send('An error occured in the server.')
  }
})

//deleting items
app.delete('/items/:id', async (req, res) => {
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
app.post('/items', async (req, res) => {
  const item = req.body;
  const savedItem = await itemService.addItems(item);
  if(savedItem){
    res.status(201).send(savedItem);
  }
  else{
    res.status(500).end();
  }
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
