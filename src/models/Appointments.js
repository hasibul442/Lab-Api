import mongoose from 'mongoose';

const AppointmentsSchema = new mongoose.Schema({
  unitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit', required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patients', required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctors', required: true },
  appointmentDate: { type: Date, required: true },
  appointmentTime: { type: String, required: true },
  serialNumber: { type: Number, required: true },
  type: { type: String, enum: ['Consultation', 'Test'], default: 'Consultation' },
  status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled', 'Pending', 'Confirmed'], default: 'Scheduled' }
}, { timestamps: true });

export default mongoose.models.Appointments || mongoose.model("Appointments", AppointmentsSchema);
