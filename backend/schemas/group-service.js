import mongoose from "mongoose"
import Group from "./Group.js"
import User from "./User.js"

async function createGroup(body, userid){
  try{
    const grouptoadd = new Group({
      name: body.name,
      people: [mongoose.Types.ObjectId(userid)]
    })
    const savedgroup = await grouptoadd.save();
    const groupid = savedgroup.ObjectId;
    console.log(groupid)
    const user = await User.updateOne(
      {_id: mongoose.Types.ObjectId(userid)},
      {$push: {groups: mongoose.Types.ObjectId(groupid)}}
    )
    return savedgroup
  }catch(error){
    console.log(error)
    return false
  }
}


async function joinGroup(name, userid){
  try{
    const grouptojoin = await Group.findOneAndUpdate(
      {name: name}, 
      {$push: {"people": mongoose.Types.ObjectId(userid)}})
    const group = await Group.findOne({name: name})
    const user = await User.updateOne(
      {_id: mongoose.Types.ObjectId(userid)},
      {$push: {groups: group._id}}
    )
    return grouptojoin
  }catch(error){
    console.log(error)
    return false
  }
}

export default {
  createGroup,
  joinGroup
}