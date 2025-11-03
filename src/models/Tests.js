import mongoose from "mongoose";

const TestsSchema = new mongoose.Schema(
  {
    unit_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Units",
        required: [true, "At least one Unit ID is required"],
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TestCategory",
      required: [true, "Category is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    status: {
      type: Boolean,
      default: true,
    },
    description: { type: String },
  },
  { timestamps: true }
);

// Ensure name is unique at the database level
TestsSchema.index({ name: 1 }, { unique: true });

export default mongoose.models.Tests || mongoose.model("Tests", TestsSchema);
