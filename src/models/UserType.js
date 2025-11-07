import mongoose from "mongoose";

const userTypeSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [ true, 'User type name is required'], 
    unique: [ true, 'User type name must be unique'], 
  },
  description: { type: String },
  defaultRole: { type: mongoose.Schema.Types.ObjectId, ref: "Role" }, // optional
  isGlobal: { type: Boolean, default: false }, // true = applies to all units (e.g. Super Admin)
});

export default mongoose.model("UserType", userTypeSchema);
