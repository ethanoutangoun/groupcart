import mongoose from "mongoose";
const { Schema, model } = mongoose;

const itemSchema = new Schema(
  {
    item: String,
    quantity: Number,
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    group: { type: mongoose.Types.ObjectId, ref: "Group" },
  }
);

const Item = model("Item", itemSchema);
export default Item;
