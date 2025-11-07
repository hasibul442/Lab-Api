import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email must be unique"],
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: [true, "Phone number must be unique"],
    },
    password: { type: String, required: true },
    profileImage: { type: String, required: true },
    address: { type: String, required: true },
    isActive: { type: Boolean, default: true },

    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
    userType: { type: mongoose.Schema.Types.ObjectId, ref: "UserType" },
    unit: { type: mongoose.Schema.Types.ObjectId, ref: "Unit" },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
