import jwt from "jsonwebtoken";
import User from "../schemas/User.js";
import mongoose from "mongoose";

export async function requireAuth(req, res, next) {
  const { authorization } = req.headers;

  //if the path is /signup or /login go to next
  if (req.path == "/signup" || req.path == "/login") {
    next();
  }

  if (!authorization) {
    return res.status(401).json({ error: "Authorization Token Required" });
  }

  //headers are formatted like 'bearer asdhwuahsiudw' so we want the second part of string
  const token = authorization.split(" ")[1];

  try {
    // verify will return the correct ID from the payload
    const { _id } = jwt.verify(token, process.env.SECRET);
    //attaching user id to the request object
    const test = await User.findById(_id);
    req.user = test._id;
    //middleware needs a next() to go to the next function
    next();
  } catch (error) {
    //if the token is wrong, then the request will not be authorized
    res.status(401).json({ error: "Request is not authorized" });
  }
}
