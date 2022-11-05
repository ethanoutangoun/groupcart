import { verify } from "jsonwebtoken";
import config from "../config/auth.config"
import User from "../schemas/User";

// an example of middleware, user-defined middleware gets called every time a req, res,
// gets called
// verify token is checking if token is provided, legal or not
// we use jsonwebtokens verify() function to determine if provided
verifyToken = (req,res,next)=> {
  let token = req.session.token;

  if(!token){
    return res.status(403).send({message: "No Token Provided!"})
  }

  verify(token, config.secret, (err, decoded) => {
    if(err){
      return res.status(401).send({message: "Unauthorized!"})
    }
    req.userId = decoded.id;
    next();
  })
}
export default{
  verifyToken
}