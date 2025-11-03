import mongoose from 'mongoose';

const LabReportsSchema = new mongoose.Schema({
  unitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Units', required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patients', required: true },
  appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointments', required: true },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tests', required: true },
  reportDate: { type: Date, required: true },
  results: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Completed', 'Reviewed'], default: 'Pending' }
}, { timestamps: true });

export default mongoose.models.LabReports || mongoose.model("LabReports", LabReportsSchema);
