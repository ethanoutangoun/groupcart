import mongoose from "mongoose";
const { Schema, model } = mongoose

const itemSchema = new Schema({
  item: String,
  quantity: String
}, {collection: 'grocery_list'});

const Item = model('Item', itemSchema)
export default Item;
