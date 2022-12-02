import mongoose from "mongoose";
import User from "../schemas/User";
import Group from "../schemas/Group";
import itemService from "../services/item-service";
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


  //creating a fake user to create group
  let responsetwo = await User.signup(
    "nomo",
    "nandate",
    "nomonandate",
    "password"
  )

  //create a group
  let responsethree = await groupService.createGroup(responsetwo._id, "beforegroup", "password")

  usertwoid = responsetwo._id
  beforegroupid = responsethree._id

  // userModel = conn.model("User", User);

  // userServices.setConnection(conn);
});

afterAll(async () => {
  // await conn.dropDatabase();
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

test("addingitems", async() => {
  let response = await itemService.addItems("carrot", "1", beforegroupid, usertwoid);
  expect(response).toBeDefined();
  expect(response.item).toEqual("carrot")
  expect(response.quantity).toEqual(1)
  expect(response.user).toEqual(mongoose.Types.ObjectId(usertwoid))
  expect(response.group).toEqual(mongoose.Types.ObjectId(beforegroupid))
})

test("addingitemserror", async() => {
  let response = await itemService.addItems()
  expect(response).toBeDefined()
  expect(response).toEqual(false)
})

test("gettingitems", async() => {
  let response = await itemService.getItems(beforegroupid)
  expect(response).toBeDefined()
  expect(response).toHaveLength(1)
  expect(response[0].item).toEqual("carrot")
})

test("gettingitemerror", async() => {
  let response = await itemService.getItems(undefined)
  expect(response).toBeUndefined()
})

test("changingquantityplus", async() => {
  let response = await itemService.getItems(beforegroupid)
  let itemid = response[0]._id;
  console.log(itemid)
  let responsetwo = await itemService.changeQuantity(itemid, "1", "1")
  let responsethree = await itemService.getItems(beforegroupid)
  expect(responsethree).toBeDefined
  expect(responsethree).toHaveLength(1)
  expect(responsethree[0].quantity).toEqual(2)
})

test("changingquantityminus", async() => {
  let response = await itemService.getItems(beforegroupid)
  let itemid = response[0]._id;
  console.log(itemid)
  let responsetwo = await itemService.changeQuantity(itemid, "2", "-1")
  let responsethree = await itemService.getItems(beforegroupid)
  expect(responsethree).toBeDefined
  expect(responsethree).toHaveLength(1)
  expect(responsethree[0].quantity).toEqual(1)
})

test("changingquantityminus", async() => {
  await itemService.addItems("deleted", "1", beforegroupid, usertwoid)
  let response = await itemService.getItems(beforegroupid)
  let itemid = response[1]._id;
  console.log(itemid)
  let responsetwo = await itemService.changeQuantity(itemid, "1", "-1")
  let responsethree = await itemService.getItems(beforegroupid)
  expect(responsethree).toBeDefined
  expect(responsethree).toHaveLength(1)
})

test("changingquantityerror", async() => {
  let response = await itemService.changeQuantity(1, "a", "b")
  expect(response).toBeUndefined
})

test("deletingitemserror", async() => {
  let response = await itemService.deleteItems(".")
  expect(response).toEqual(false)
})



