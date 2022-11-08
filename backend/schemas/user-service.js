import mongoose from "mongoose"
import User from "./User.js"

async function createUser(body){
  try{
    if(checkDuplicateUsername(body.username)){
      return false
    }
    else{
      const usertoadd = new User(body)
      const addresponse = await usertoadd.save()
      return addresponse
    }
  }catch(error){
    console.log(error)
    return false
  }
}

// async function addGrouptoUser(groupid, userid){
//   try{
//     const user = await User.updateOne(
//       {_id: mongoose.Types.ObjectId(userid)},
//       {$push: {groups: mongoose.Types.ObjectId(groupid)}}
//     );
//     return user
//   }catch(error){
//     console.log(error)
//     return false
//   }
// }

async function checkDuplicateUsername(username){
  try{
    const prevuser = await User.findOne({
      username: username
    })
    if(prevuser === undefined){
      return true
    }else{
      return false
    }
  }catch(error){
    console.log(error)
    return false
  }
}

export default {
  createUser
}