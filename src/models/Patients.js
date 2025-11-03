import mongoose from 'mongoose';

const PatientsSchema = new mongoose.Schema({
    unitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit', required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
    phone: { type: String, required: true },
    passwordHash: { type: String }, // optional if OTP-only login
    dateOfBirth: { type: Date },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    address: { type: String },
    medicalHistory: { type: Array },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.models.Patients || mongoose.model("Patients", PatientsSchema);
