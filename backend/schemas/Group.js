import mongoose from "mongoose";
const {Schema, model} = mongoose

const groupSchema = new Schema({
  name: String,
  people: [{type: mongoose.Types.ObjectId, ref : 'User'}],

}, {collection: 'group_list'});

const Group = model('Group', groupSchema)
export default Group;