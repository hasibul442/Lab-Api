import mongoose from "mongoose";

const EducationsSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    short_name: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Educations ||
  mongoose.model("Educations", EducationsSchema);
