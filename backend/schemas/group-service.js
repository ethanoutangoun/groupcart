import mongoose from "mongoose"
import Group from "./Group.js"

async function createGroup(body, userid){
  try{
    const grouptoadd = new Group({
      name: body.name,
      people: [mongoose.Types.ObjectId(userid)]
    })
    const savedgroup = await grouptoadd.save();
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