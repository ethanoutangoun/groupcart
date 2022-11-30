import mongoose from "mongoose";
import Item from "../schemas/Item.js";

async function getItems(group) {
  try{
    let result;
    result = await Item.find({ group: mongoose.Types.ObjectId(group) });
    return result;

  }catch(error){
    console.log(error)
    return undefined

  }
}

async function addItems(item, quantity, group, id) {
  try {
    const itemtoadd = new Item({
      item: item,
      quantity: parseInt(quantity),
      user: mongoose.Types.ObjectId(id),
      group: mongoose.Types.ObjectId(group),
    });
    const savedItem = await itemtoadd.save();
    return savedItem;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteItems(id) {
  try {
    const deletedItem = await Item.findByIdAndRemove(id);
    return deletedItem;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function changeQuantity(id, currvalue, update){
  try {
    let newvalue = parseInt(currvalue) + parseInt(update)
    //if we made it zero quantity, delete it
    if(newvalue === 0){
      let changedItem = await deleteItems(id)
      return changedItem
    }
    else{
      let changedItem = await Item.findByIdAndUpdate(
        {_id: id},
        {quantity: newvalue}
      )
      return changedItem
    }
  }catch(error){
    console.log(error)
    return undefined
  }
}

export default {
  getItems,
  addItems,
  deleteItems,
  changeQuantity
};
