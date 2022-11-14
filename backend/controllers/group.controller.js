import Group from "../schemas/Group.js";
import User from "../schemas/User.js";
import mongoose, { mongo, Schema } from "mongoose";

//getting all groups user is in

const getGroup = async (req, res) => {
  const id = req.user;
  console.log(id);
  //check if valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send({ error: "userid is not valid" });
  }
  try {
    User.findById(id)
      .populate({ path: "groups", model: "Group" })
      .exec(function (err, user) {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json(user.groups);
        }
      });
  } catch (error) {
    res.status(500).json({ error: error.message }).send();
  }
};

//creating group

const createGroup = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const id = req.user;

  // check if valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send({ error: "userid is not valid" });
  }
  try {
    //create the group
    const grouptoadd = new Group({
      name: req.body.name,
      password: password,
      people: [id],
    });
    const savedgroup = await grouptoadd.save();
    //add group to users group array
    const groupid = savedgroup._id;
    console.log(savedgroup);
    console.log(groupid);
    const user = await User.updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      { $push: { groups: groupid } }
    );
    res.status(200).json(savedgroup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//joining group

const joinGroup = async (req, res) => {
  const id = req.user;
  const name = req.params.name;
  //check for valid user-id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send({ error: "userid is invalid" });
  }
  try {
    //add userid to group
    const grouptojoin = await Group.findOneAndUpdate(
      { name: name },
      { $push: { people: id } }
    );
    //if group dne, send error
    if (!grouptojoin) {
      res.status(404).send({ error: "no such groupname" });
    }
    //get group to find id
    const group = await Group.findOne({ name: name });
    console.log(group);
    //add groupid to the user
    const user = await User.updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      { $push: { groups: group._id } }
    );
    res.status(201).send(grouptojoin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//deleting group
const deleteGroup = async (req, res) => {
  const groupid = req.params.id;
  console.log("Groupid", groupid);
  const id = req.user;
  if (!mongoose.Types.ObjectId.isValid(groupid)) {
    res.status(404).send({ error: "groupid is invalid" });
  }
  try {
    //remove group from user
    const removedgroup = await Group.findByIdAndUpdate(
      { _id: mongoose.Types.ObjectId(groupid) },
      { $pull: { people: id } }
    );
    //if group dne send error
    if (!removedgroup) {
      res.send(404).send({ error: "no such groupid" });
    }
    console.log("peoplelength", removedgroup.people.length);
    if (removedgroup.people.length <= 1) {
      await Group.deleteOne({ _id: mongoose.Types.ObjectId(groupid) });
    }
    const user = await User.findByIdAndUpdate(
      { _id: id },
      { $pull: { people: mongoose.Types.ObjectId(groupid) } }
    );
    res.status(201).send(removedgroup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getGroup,
  createGroup,
  joinGroup,
  deleteGroup,
};
