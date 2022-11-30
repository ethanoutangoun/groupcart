import userService from "../services/user-service.js";
import User from "../schemas/User.js";
import jwt from "jsonwebtoken";

//creating json token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//loginuser
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);
    console.log(user)
    //create token
    const token = createToken(user._id);
    
    //send back a proper object

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

//signup
const signupUser = async (req, res) => {
  const { first, last, username, password } = req.body;
  try {
    const user = await User.signup(first, last, username, password);
    //create token
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  loginUser,
  signupUser,
};
