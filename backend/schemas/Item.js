import mongoose from "mongoose";
const { Schema, model } = mongoose;

const itemSchema = new Schema(
  {
    item: String,
    quantity: String,
    user: { type: mongoose.Types.ObjectId, ref: "People" },
    group: { type: mongoose.Types.ObjectId, ref: "Group" },
  },
  { collection: "grocery_list" }
);

const Item = model("Item", itemSchema);
export default Item;
