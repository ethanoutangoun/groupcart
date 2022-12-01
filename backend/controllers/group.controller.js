import Group from "../schemas/Group.js";
import User from "../schemas/User.js";
import groupService from "../services/group-service.js";
import mongoose, { mongo, Schema } from "mongoose";
import userService from "../services/user-service.js";

//getting all groups user is in

const getGroup = async (req, res) => {
  const id = req.user;
  console.log("req.user", id);
  //check if valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: "userid is not valid" });
  }
  let result = await groupService.findUserGroups(id);
  console.log("getGroupcontroller", result);
  if (result === undefined || result === null) {
    return res.status(404).send("User Groups not found.");
  } else {
    return res.send(JSON.stringify(result));
  }
};

//getting all users in a group
const getGroupUsers = async (req, res) => {
  const groupid = req.params.groupid;
  console.log("getgroup", groupid);

  //check if valid
  if (!mongoose.Types.ObjectId.isValid(groupid)) {
    return res.status(404).send({ error: "groupid is not valid" });
  }
  let result = await groupService.findGroupUsers(groupid);
  console.log("getGroupUserController", result);
  if (result === undefined || result === null) {
    return res.status(404).send("Group Users not found.");
  } else {
    return res.send(JSON.stringify(result));
  }
};

//creating group

const createGroup = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const id = req.user;

  // check if valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: "userid is not valid" });
  }
  //check if group already exists with same name
  let responseone = await groupService.checkGroupExists(name);
  if (responseone === true) {
    return res.status(402).send({ error: "group exists already" });
  }
  if(responseone === undefined){
    return res.status(402).send({error: "name not defined"});
  }
  //create a new group
  let responsetwo = await groupService.createGroup(id, name, password);
  console.log("createGroupController", responsetwo);

  //deal with errors
  if ((responsetwo === undefined) | (responsetwo === null)) {
    return res.status(404).send({ error: "creating group error." });
  }

  //add group to user schema
  let responsethree = await groupService.addGrouptoUser(id, responsetwo._id)
  console.log("create group controller: responsethree", responsethree)
  if(responsethree === undefined | responsethree === null){
    return res.status(404).send({error: "adding group to user. "})
  }
  return res.status(202).send(responsetwo)
};

//joining group

const joinGroup = async (req, res) => {
  const id = req.user;
  const name = req.params.name;
  const password = req.body.password;
  //check for valid user-id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: "userid is invalid" });
  }
  //check is group dne
  if (groupService.checkGroupExists(name) === false) {
    return res.status(402).send({ error: "group does not exist" });
  }
  //check if user is already in group
  if (groupService.checkUserInGroup(id, name)) {
    return res.status(402).send({ error: "user already in group" });
  }
  //add user to group
  let responseone = await groupService.addUsertoGroup(name, password, id);
  console.log("responseone", responseone);
  if ((responseone === undefined) | (responseone === null)) {
    return res.status(404).send({ error: "could not add user to group" });
  }
  //get group to find id
  const group = await Group.findOne({ name: name });
  //add group to user
  let responsetwo = await groupService.addGrouptoUser(id, group._id);
  console.log("responsetwo", responsetwo);
  if ((responsetwo === undefined) | (responsetwo === null)) {
    return res.status(404).send({ error: "could not add group to user" });
  }
  return res.status(201).send(responseone);
};

//deleting group
const deleteGroup = async (req, res) => {
  const groupid = req.params.id;
  const id = req.user;
  if (!mongoose.Types.ObjectId.isValid(groupid)) {
    return res.status(404).send({ error: "groupid is invalid" });
  }
  //remove user from group
  const responseone = await groupService.removeUserFromGroup(groupid, id);
  if ((responseone === undefined) | (responseone === null)) {
    return res.status(404).send({ error: "could not remove user from group" });
  }

  //remove group from user
  const responsetwo = await groupService.removeGroupFromUser(groupid, id);
  if ((responsetwo === undefined) | (responsetwo === null)) {
    return res.status(404).send({ error: "could not remove group from user" });
  }
  return res.status(201).send(responseone);
};

export default {
  getGroup,
  getGroupUsers,
  createGroup,
  joinGroup,
  deleteGroup,
};
