import mongoose from "mongoose";

const SpecialtiesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Specialties ||
  mongoose.model("Specialties", SpecialtiesSchema);
