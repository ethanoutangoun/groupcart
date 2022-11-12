import mongoose from "mongoose";
import bcrypt from "bcrypt"
const {Schema, model} = mongoose

const userSchema = new Schema({
  first: {
    type: String
    },
  last: {
    type: String
    },
  username: {
    type: String,
    required: true,
    unique: true
    },
  password: {
    type: String,
    required: true
    },
  groups: [{type: mongoose.Types.ObjectId, ref: 'Group'}]
}, {collection: 'user-list'});

// static sign-up method
// if we try to do () => syntax this. will not work
userSchema.statics.signup = async function(first , last, username, password){
  if(!first || !last || !username || !password){
    throw Error("all fields must be filled")
  }
  const exists = await this.findOne({username})
  if(exists) {
    throw Error('username already in use')
  }

  //a salt is a way of making sure that identical passwords
  //do not have the same hash key
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)


  //this creates the user
  const user = await this.create({first, last, username, password: hash})

  return user
}

//static log-in method
userSchema.statics.login = async function(username, password){
  //if not all field filled
  if(!username || !password){
    throw Error("all fields must be filled")
  }
  
  //if user DNE throw error
  const user = await this.findOne({username})
  if(!user){
    throw Error("incorrect user")
  }
  
  //check if hashed password match
  const match = await bcrypt.compare(password, user.password)
  if(!match){
    throw Error("incorrect password")
  }

  return user
}

const User = model('User', userSchema)
export default User;