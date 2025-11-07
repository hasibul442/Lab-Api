import mongoose from 'mongoose';

const PatientsSchema = new mongoose.Schema({
    unitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit', required: true },
    patientId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String }, // optional if OTP-only login
    dob: { type: Date },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    address: { type: String },
    medicalHistory: { type: Array },
    isActive: { type: Boolean, default: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.models.Patients || mongoose.model("Patients", PatientsSchema);
