import mongoose from "mongoose";
const {Schema, model} = mongoose

const userSchema = new Schema({
  username: String,
  password: String,
  groups: [{type: mongoose.Types.ObjectId, ref: 'Group'}]
}, {collection: 'user-list'});

const User = model('User', userSchema)
export default User;