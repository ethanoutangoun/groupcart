import mongoose from "mongoose";
import User from "../schemas/User.js";

async function checkDuplicateUsername(username) {
  try {
    if(username === undefined){
      throw Error
    }
    const prevuser = await User.findOne({
      username: username,
    });
    if (prevuser === null) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default {
  checkDuplicateUsername,
};
