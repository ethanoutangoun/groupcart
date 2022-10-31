import mongoose from "mongoose"
import User from "./User.js"

async function createUser(body){
  try{
    const usertoadd = new User(body)
    const addresponse = await usertoadd.save()
    return addresponse
  }catch(error){
    console.log(error)
    return false
  }
}

export default {
  createUser
}