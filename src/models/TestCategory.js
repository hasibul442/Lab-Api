import mongoose from "mongoose";

const TestCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  status: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.models.TestCategory || mongoose.model("TestCategory", TestCategorySchema);
