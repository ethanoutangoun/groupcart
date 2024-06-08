import mongoose from "mongoose";
import User from "../schemas/User";
import Group from "../schemas/Group";
import groupservice from "../services/group-service";
import { JsonWebTokenError } from "jsonwebtoken";
import groupService from "../services/group-service";
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

  //create a fake user to make groups with
  let response = await User.signup(
    "masato",
    "nandate",
    "masatonandate",
    "password"
  );

  //creating a fake user to join groups with
  let responsetwo = await User.signup(
    "nomo",
    "nandate",
    "nomonandate",
    "password"
  );

  //create a group
  let responsethree = await groupservice.createGroup(
    responsetwo._id,
    "beforegroup",
    "password"
  );

  userid = response._id;
  usertwoid = responsetwo._id;
  beforegroupid = responsethree._id;

  await groupservice.addGrouptoUser(usertwoid, beforegroupid);
});

afterAll(async () => {
  // await conn.dropDatabase();
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

test("checkuseringroup", async () => {
  let response = await groupservice.checkUserInGroup(usertwoid, "dnegroup");
  expect(response).toEqual(false);
});

//testing that group does not already exist
test("GroupDoesNotExist", async () => {
  let response = await groupservice.checkGroupExists("testgroup");
  expect(response).toBeDefined();
  expect(response).toEqual(false);
});

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
  let responsetwo = await groupservice.checkGroupExists("testgroup");
  expect(responsetwo).toBeDefined();
  expect(responsetwo).toEqual(true);
});

test("CreatingGroupError", async () => {
  //test that group do not get created properly is userid is wrong
  let response = await groupservice.createGroup(123, "testgroup", "password");
  expect(response).toBeUndefined;
});

test("CheckingUserinGroupFail", async () => {
  let response = await groupservice.checkUserInGroup(userid, "testgroup");
  expect(response).toBeDefined();
  expect(response).toEqual(false);
});

test("AddingGrouptoUser", async () => {
  let group = await Group.findOne({ name: "testgroup" });
  let response = await groupservice.addGrouptoUser(userid, group._id);
  let usersgroup = await User.findOne({ _id: userid });
  expect(usersgroup).toBeDefined();
  expect(usersgroup.groups).toHaveLength(1);
  expect(usersgroup.groups[0]).toEqual(mongoose.Types.ObjectId(group._id));
});

test("AddingGrouptoUserError", async () => {
  let response = await groupservice.addGrouptoUser("4", "5");
  expect(response).toBeUndefined();
});

test("CheckingUserinGroupPass", async () => {
  let response = await groupservice.checkUserInGroup(userid, "testgroup");
  expect(response).toBeDefined();
  expect(response).toEqual(true);
});

test("CheckingGroupExists", async () => {
  let response = await groupservice.checkGroupExists("testgroup");
  expect(response).toBeDefined();
  expect(response).toEqual(true);
});

test("CheckingGroupDoesNotExist", async () => {
  let response = await groupservice.checkGroupExists("dne");
  expect(response).toBeDefined();
  expect(response).toEqual(false);
});

test("AddingUsertoGroup", async () => {
  let response = await groupservice.addUsertoGroup(
    "beforegroup",
    "password",
    userid
  );
  let responsetwo = await groupservice.findGroupUsers(response._id);
  expect(response).toBeDefined();
  expect(responsetwo).toBeDefined();
  expect(responsetwo).toHaveLength(2);
  expect(responsetwo[0]._id).toEqual(mongoose.Types.ObjectId(usertwoid));
  expect(responsetwo[1]._id).toEqual(mongoose.Types.ObjectId(userid));
});

test("AddingUsertoGroupError", async () => {
  let response = await groupservice.addUsertoGroup("error", "error", 3);
  expect(response).toBeUndefined();
});

test("removeUserFromGroup", async () => {
  let responseone = await groupservice.removeUserFromGroup(
    beforegroupid,
    userid
  );
  expect(responseone).toBeDefined();
  let responsetwo = await groupservice.findGroupUsers(beforegroupid);
  expect(responsetwo).toBeDefined();
  expect(responsetwo).toHaveLength(1);
  expect(responsetwo[0]._id).toEqual(usertwoid);
});

test("removeUserFromGroupError", async () => {
  let response = await groupservice.removeUserFromGroup(1, 1);
  expect(response).toBeUndefined();
});

test("removeGroupFromUser", async () => {
  let response = await groupservice.removeGroupFromUser(
    beforegroupid,
    usertwoid
  );
  let responsetwo = await groupservice.findUserGroups(usertwoid);
  expect(responsetwo).toBeDefined();
  expect(responsetwo).toHaveLength(0);
});

test("removeGroupFromUserError", async () => {
  let response = await groupservice.removeGroupFromUser(1, 2);
  expect(response).toBeUndefined();
});

test("findUserGroupsError", async () => {
  let response = await groupservice.findUserGroups(1);
  expect(response).toBeUndefined();
});

test("removeUserFromGrouptwo", async () => {
  let response = await groupservice.removeUserFromGroup(
    beforegroupid,
    usertwoid
  );
  expect(response).toBeDefined();
  let responsetwo = await Group.findById(beforegroupid);
  expect(responsetwo).toEqual(null);
});

test("findgroupuserserror", async () => {
  let response = await groupservice.findGroupUsers();
  expect(response).toBeUndefined();
});

test("checkgroupexistserror", async () => {
  let response = await groupservice.checkGroupExists();
  expect(response).toBeUndefined();
});

test("checkuseringrouperror", async () => {
  let response = await groupservice.checkUserInGroup();
  expect(response).toEqual(false);
});
