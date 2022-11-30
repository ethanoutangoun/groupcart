import { MongoCursorExhaustedError } from "mongodb";
import mongoose from "mongoose";
import Item from "../schemas/Item.js";

//get items based on groupid

const getItems = async (req, res) => {
  const groupid = req.params.group
  if (!mongoose.Types.ObjectId.isValid(groupid)) {
    res.status(404).send({ error: "groupid is not valid" });
  }
  try {
    const result = await Item.find({
      group: mongoose.Types.ObjectId(groupid)
    });
    if (!result) {
      res.status(404).send({ error: "no such group or user" });
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete items

const deleteItems = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send({ error: "itemid is not valid" });
  }
  try {
    const id = req.params.id;
    const result = await Item.findByIdAndDelete(mongoose.Types.ObjectId(id));
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//add items, add user and groupid
const addItems = async (req, res) => {
  const userid = req.user;
  console.log('inadditems', userid)
  if (!mongoose.Types.ObjectId.isValid(req.params.group)) {
    res.status(404).send({ error: "groupid is not valid" });
  }
  if (!mongoose.Types.ObjectId.isValid(userid)) {
    res.status(404).send({ error: "userid is not valid" });
  }
  try {
    console.log(userid)
    const groupid = mongoose.Types.ObjectId(req.params.group);
    const newid = mongoose.Types.ObjectId(userid);
    const item = req.body.item;
    const quantity = req.body.quantity;
    const saved = await Item.create({
      item: item, 
      quantity: quantity, 
      user: newid, 
      group: groupid 
    });
    res.status(201).send(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getItems,
  deleteItems,
  addItems,
};
