import mongoose from "mongoose";
import User from "./User.js"
const {Schema, model} = mongoose

const groupSchema = new Schema({
  name: String,
  password: String,
  people: [{type: Schema.Types.ObjectId, ref : 'User'}],

});

const Group = model('Group', groupSchema)
export default Group;