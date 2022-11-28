// const mongoose = require("mongoose");
// const UserSchema = require("../schemas/User.js");
import mongoose from "mongoose"
import User from "../schemas/User"
import userController from "../controllers/user.controller";
import { JsonWebTokenError } from "jsonwebtoken";
// const userServices = require("../controllers/user.controller.js");
const { MongoMemoryServer } = require("mongodb-memory-server");


let mongoServer;
let conn;
let userModel;

jest.setTimeout(500000)

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  conn = await mongoose.createConnection(uri, mongooseOpts);
  // userModel = conn.model("User", User);

  // userServices.setConnection(conn);
});

afterAll(async () => {
  await conn.dropDatabase();
  await conn.close();
  await mongoServer.stop();
})

// afterEach(async() => {
//   await User.deleteMany();
// })

test('Signing Up', async () => {
  let dummyUser = {
    "first" : "Masato",
    "last" : "Nandate",
    "username" : "masatonandate",
    "password" : "password"
  }
  try{
    let result = await User.signup("Masato", "Nandate", "masatonandate", "password")
    console.log(result)
  }
  catch(error){
    console.log(error)
  }

})


test("Signing In", async() => {
  let req = {
    body: {
      "username" : "masatonandate",
      "password" : "password"
    }
  }
  var res = {};
  userController.loginUser(req, res);
  console.log(res)
  expect(res.data).toBeDefined();
  expect(res.data.user.username).toBe("masatonandate")
  expect(res.data.user.first).toBe("Masato")
  expect(res.data.user.last).toBe("Nandate")
  expect(res.data.token).toBeDefined();


})