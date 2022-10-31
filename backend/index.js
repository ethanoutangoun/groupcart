// const express = require('express');
// const cors = require('cors');
const port = 5001;

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import Item from './schemas/Item.js'
import itemService from './schemas/item-service.js'
import itemroute from './routes/itemroute.js'
import userroute from './routes/userroute.js'
import grouproute from './routes/grouproute.js'

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


app.use('/', userroute)
app.use('/', grouproute)
app.use('/', itemroute)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
