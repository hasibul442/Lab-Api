import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  description: String,
});

export default mongoose.model("Permission", permissionSchema);
