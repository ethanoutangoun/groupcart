import mongoose from "mongoose"
import Item from './Item.js'

async function getItems(){
  let result;
  result = await Item.find();
  return result;
}

async function addItems(item){
  try{
    const itemtoadd = new Item(item);
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