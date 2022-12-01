import mongoose from "mongoose";
import User from "../schemas/User";
import Group from "../schemas/Group";
import groupservice from "../services/group-service";
import { JsonWebTokenError } from "jsonwebtoken";
import groupController from "../controllers/group.controller";
import groupService from "../services/group-service";
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;
let conn;
let userid;

jest.setTimeout(500000);

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  conn = mongoose.connect(uri);

  //create a fake user
  let response = await User.signup(
    "masato",
    "nandate",
    "masatonandate",
    "password"
  );
  console.log(response);
  userid = response._id;
  // userModel = conn.model("User", User);

  // userServices.setConnection(conn);
});

afterAll(async () => {
  // await conn.dropDatabase();
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

// afterEach(async() => {
//   await User.deleteMany();
// })

//testing that group does not already exist
test("GroupDoesNotExist", async () => {
  let response = await groupservice.checkGroupExists("testgroup")
  expect(response).toBeDefined();
  expect(response).toEqual(false)
})


//testing for group creation
test("CreatingGroupNoError", async () => {
  //test that group got created properly
  let response = await groupservice.createGroup(
    userid,
    "testgroup",
    "password"
  );
  expect(response).toBeDefined();
  expect(response.name).toEqual("testgroup");
  expect(response.password).toEqual("password");
  expect(response.people).toHaveLength(1);
  expect(response.people).toEqual([mongoose.Types.ObjectId(userid)]);
  
  //test that group does exist
  let responsetwo = await groupservice.checkGroupExists("testgroup")
  expect(responsetwo).toBeDefined();
  expect(responsetwo).toEqual(true);


});

test("CreatingGroupError", async () => {
  //test that group do not get created properly is userid is wrong
  let response = await groupservice.createGroup(
    123,
    "testgroup",
    "password"
  );
  expect(response).toBeUndefined;
});

test("CheckingUserinGroupFail", async() => {
  let response = await groupservice.checkUserInGroup(userid, "testgroup")
  expect(response).toBeDefined();
  expect(response).toEqual(false);
})

test("AddingGrouptoUser", async() => {
  let group = Group.findOne({name: "testgroup"})
  let response = await groupservice.addGrouptoUser(userid, group._id)
  expect(response).toBeDefined()
  expect(response.groups).toHaveLength(1)
})

