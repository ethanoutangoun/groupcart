import { ConnectionClosedEvent } from "mongodb";
import mongoose from "mongoose";
import Group from "../schemas/Group.js";
import User from "../schemas/User.js";

//function that returns all groups a user is in
async function findUserGroups(userid) {
  try {
    let user = await User.findById(userid).populate({
      path: "groups",
      model: "Group",
    });
    return user.groups;
  } catch (error) {
    console.log("findusergroups", error);
    return undefined;
  }
}

//function that returns all users in a group
async function findGroupUsers(groupid) {
  try {
    if (groupid === undefined) {
      throw Error;
    }
    let group = await Group.findById(mongoose.Types.ObjectId(groupid)).populate(
      { path: "people", model: "User" }
    );
    return group.people;
  } catch (error) {
    console.log("findGroupUsers, error");
    return undefined;
  }
}

async function createGroup(userid, name, password) {
  try {
    let grouptoadd = new Group({
      name: name,
      password: password,
      people: [userid],
    });
    const savedgroup = await grouptoadd.save();
    // const groupid = savedgroup._id;
    // const user = await User.updateOne(
    //   { _id: mongoose.Types.ObjectId(userid) },
    //   { $push: { groups: groupid } }
    // )
    // const user = await addGrouptoUser(userid, groupid);
    return savedgroup;
  } catch (error) {
    console.log("creategroup error", error);
    return undefined;
  }
}

async function checkGroupExists(name) {
  try {
    if (name === undefined) {
      throw Error;
    }
    let duplicategroup = await Group.findOne({ name: name });
    if (duplicategroup !== null) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function checkUserInGroup(userid, groupname) {
  try {
    if ((userid === undefined) | (groupname === undefined)) {
      throw Error;
    }
    let user = await User.findById(userid).populate({
      path: "groups",
      model: "Group",
    });
    console.log(user, groupname);
    let duplicate = false;
    user.groups.forEach((group) => {
      if (group.name === groupname) {
        duplicate = true;
      }
    });
    console.log(duplicate);
    return duplicate;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function addUsertoGroup(name, password, userid) {
  try {
    const grouptojoin = await Group.findOneAndUpdate(
      { name: name, password: password },
      { $push: { people: userid } }
    );
    return grouptojoin;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function addGrouptoUser(userid, groupid) {
  try {
    const updateduser = await User.updateOne(
      { _id: mongoose.Types.ObjectId(userid) },
      { $push: { groups: groupid } }
    );
    return updateduser;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function removeUserFromGroup(groupid, userid) {
  try {
    //remove a user from group
    const removedgroup = await Group.findByIdAndUpdate(
      { _id: mongoose.Types.ObjectId(groupid) },
      { $pull: { people: userid } }
    );
    //check if group is now empty
    if (removedgroup.people.length <= 1) {
      await Group.deleteOne({ _id: mongoose.Types.ObjectId(groupid) });
    }
    return removedgroup;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function removeGroupFromUser(groupid, userid) {
  try {
    //remove group from user
    const user = await User.findByIdAndUpdate(
      { _id: userid },
      { $pull: { groups: mongoose.Types.ObjectId(groupid) } }
    );
    return user;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export default {
  findUserGroups,
  findGroupUsers,
  createGroup,
  checkGroupExists,
  addUsertoGroup,
  addGrouptoUser,
  removeUserFromGroup,
  removeGroupFromUser,
  checkUserInGroup,
};
