import Group from "../schemas/Group.js";
import User from "../schemas/User.js";
import mongoose from "mongoose";

//creating group

const createGroup = async(req, res) => {
  const name = req.body.name;
  const id = mongoose.Types.ObjectId(req.params.id);
  // check if valid
  if(!mongoose.Types.ObjectId.isValid(id))
  {
    res.status(404).send({error: "userid is not valid"})

  }
  try{
    //create the group
    const grouptoadd = new Group({
        name: req.body.name,
        people: [mongoose.Types.ObjectId(req.params.id)]
      })
    const savedgroup = await grouptoadd.save();
    //add group to users group array
    const groupid = savedgroup.ObjectId;
    const user = await User.updateOne(
      {_id: id},
      {$push: {groups: mongoose.Types.ObjectId(groupid)}}
      )
    res.status(200).json(savedgroup);
  }catch(error){
    res.status(500).json({error: error.message})
  }
}


//joining group

const joinGroup = async(req, res) => {
  const id = req.params.id;
  const name = req.params.name;
  //check for valid user-id
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).send({error: "userid is invalid"})
  }
  try{
    //add userid to group
    const grouptojoin = await Group.findOneAndUpdate(
      {name: name}, 
      {$push: {"people": mongoose.Types.ObjectId(id)}})
    //if group dne, send error
    if(!grouptojoin){
      res.status(404).send({error: "no such groupname"})
    }
    //get group to find id
    const group = await Group.findOne({name: name})
    //add groupid to the user
    const user = await User.updateOne(
      {_id: mongoose.Types.ObjectId(id)},
      {$push: {groups: group._id}}
    )
    res.status(201).send(grouptojoin);
  }
  catch(error){
    res.status(500).json({error: error.message})
  }
}




export default {
  createGroup,
  joinGroup
}