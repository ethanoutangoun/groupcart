import userService from "../schemas/user-service.js"
import User from "../schemas/User.js"
import jwt from "jsonwebtoken"

//creating json token
const createToken = (_id) =>{
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//loginuser
const loginUser = async(req, res) => {
  const {username, password} = req.body
  try{
    const user = await User.login(username, password)
    //create token
    const token = createToken(user._id)

    res.status(200).json({username, token})
  }catch(error){
    res.status(400).json({error: error.message})
  }

}


//signup
const signupUser = async(req, res) => {
  const {username, password} = req.body
  try{
    const user = await User.signup(username, password)
    //create token
    const token = createToken(user._id)

    res.status(200).json({username, token})
  }catch(error){
    res.status(400).json({error: error.message})
  }
}

export default {
  loginUser,
  signupUser
}