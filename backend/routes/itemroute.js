import Item from '../schemas/Item.js'
import itemService from '../schemas/item-service.js'
import express from 'express'
import mongoose from 'mongoose'
import controller from '../controllers/item.controller.js'
import  { requireAuth } from '../middleware/authJwt.js'
const router = express.Router();

router.use(requireAuth)

//getting all items
router.get('/items/:group', controller.getItems)

//deleting items
router.delete('/items/:id', controller.deleteItems)

//posting items
router.post('items/:id/:group', controller.addItems)

export default router;