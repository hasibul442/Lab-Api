import mongoose from "mongoose";

const DoctorsSchema = new mongoose.Schema(
  {
    unitId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Unit",
      required: true,
    },
    doctor_id: {
      type: String,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },

    specialization: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Specialties",
        required: [true, "At least one Specialty ID is required"],
      },
    ],
    phone_number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    education: { type: Array, required: true },
    profile_picture: {
      type: String, // URL or file path
    },
    license_number: {
      type: String,
    },
    password: { type: String, required: true },
    experience_years: { type: Number, required: true },
    available_days_and_times: { type: Array, required: true },
    consultation_fee: {
      type: Number,
    },
    isActive: { type: Boolean, default: true },
    last_login: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Doctors ||
  mongoose.model("Doctors", DoctorsSchema);
