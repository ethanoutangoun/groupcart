import mongoose from "mongoose"
import Item from './Item.js'

async function getItems(group){
  let result;
  result = await Item.find({group: mongoose.Types.ObjectId(group)});
  return result;
}

async function addItems(item, group, id){
  try{
    const itemtoadd = new Item({
      item: item.item,
      quantity : item.quantity,
      user: mongoose.Types.ObjectId(id),
      group: mongoose.Types.ObjectId(group)});
    const savedItem = await itemtoadd.save();
    return savedItem
  }catch(error){
    console.log(error);
    return false;
  }
}

async function deleteItems(id){
  try{
    const deletedItem = await Item.findByIdAndRemove(id)
    return deletedItem
  }catch(error){
    console.log(error)
    return false
  }
}

export default{
  getItems,
  addItems,
  deleteItems
}