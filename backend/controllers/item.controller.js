import { MongoCursorExhaustedError } from "mongodb";
import mongoose from "mongoose";
import Item from "../schemas/Item.js";
import itemService from "../services/item-service.js";

//get items based on groupid

const getItems = async (req, res) => {
  const groupid = req.params.group
  if (!mongoose.Types.ObjectId.isValid(groupid)) {
    return res.status(404).send({ error: "groupid is not valid" });
  }
  let response = await itemService.getItems(groupid)
  if(response === undefined | response === null){
    return res.status(404).send({error: "can't find group items"})
  }
  return res.status(200).send(response)
};

//delete items

const deleteItems = async (req, res) => {
  const itemid = req.params.id
  if (!mongoose.Types.ObjectId.isValid(itemid)) {
    return res.status(404).send({ error: "itemid is not valid" });
  }
  const response = await itemService.deleteItems(itemid)
  if(response === undefined | response === null){
    return res.status(404).send({error: "can't delete item"})
  }
  return res.status(200).send(response)
};

//add items, add user and groupid
const addItems = async (req, res) => {
  const userid = req.user;
  const groupid = req.params.group
  const item = req.body.item
  const quant = req.body.quantity
  if (!mongoose.Types.ObjectId.isValid(req.params.group)) {
    return res.status(404).send({ error: "groupid is not valid" });
  }
  if (!mongoose.Types.ObjectId.isValid(userid)) {
    return res.status(404).send({ error: "userid is not valid" });
  }
  const response = await itemService.addItems(item, quant, groupid, userid)
  if(response === undefined | response === false){
    return res.status(404).send({error: "failed to add item"})
  }
  console.log(response)
  return res.status(200).send(response)
};

const updateItems = async(req, res) => {
  const itemid = req.params.id
  const currvalue = req.body.quantity
  const update = req.body.update
  if (!mongoose.Types.ObjectId.isValid(itemid)) {
    return res.status(404).send({ error: "itemid is not valid" });
  }
  const response = await itemService.changeQuantity(itemid, currvalue, update)
  if(response === undefined | response === false){
    return res.status(404).send({error: "failed to update"})
  }
  console.log(response)
  return res.status(200).send(response)

}

export default {
  getItems,
  deleteItems,
  addItems,
  updateItems
};
