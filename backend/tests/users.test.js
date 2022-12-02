import mongoose from "mongoose";
import User from "../schemas/User";
import userService from "../services/user-service";
import { JsonWebTokenError } from "jsonwebtoken";
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;
let conn;
let userid;
let usertwoid;
let beforegroupid;


beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };


  conn = mongoose.connect(uri);

});

afterAll(async () => {
  // await conn.dropDatabase();
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

test("UserSignUp", async() => {
  let response = await User.signup("masato", "nandate", "masatonandate", "password")
  expect(response).toBeDefined()
  expect(response.first).toEqual("masato")
  expect(response.last).toEqual("nandate")
  expect(response.username).toEqual("masatonandate")
})

test("UserSignUpErrorOne", async() => {
  await expect(User.signup())
  .rejects
  .toThrow()
})

test("UserSignUpErrorTwo", async() => {
  await expect(User.signup("masato", "nandate", "masatonandate", "password"))
  .rejects
  .toThrow()
})

test("checkDuplicateUser", async() => {
  let response = await userService.checkDuplicateUsername("masatonandate")
  expect(response).toEqual(false)
})

test("checkDuplicateUser", async() => {
  let response = await userService.checkDuplicateUsername("b")
  expect(response).toEqual(true)
})

test("checkDuplicateUserError", async() => {
  let response = await userService.checkDuplicateUsername()
  expect(response).toEqual(false)
})

test("UserSignIn", async() => {
  let response = await User.login("masatonandate", "password")
  expect(response).toBeDefined()
  expect(response.first).toEqual("masato")
  expect(response.last).toEqual("nandate")
  expect(response.username).toEqual("masatonandate")
})

test("UserSignUpErrorOne", async() => {
  await expect(User.login())
  .rejects
  .toThrow()
})


test("UserSignUpErrorOne", async() => {
  await expect(User.login("fakeuser", "fakepassword"))
  .rejects
  .toThrow()
})

test("UserSignUpErrorTwo", async() => {
  await expect(User.login("masatonandate", "fakepassword"))
  .rejects
  .toThrow()
})