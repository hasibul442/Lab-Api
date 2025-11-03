import mongoose from 'mongoose';

const UserRoleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  unitId: { type: mongoose.Schema.Types.ObjectId, ref: "Unit", required: true },
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
  assignedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.models.UserRole || mongoose.model("UserRole", UserRoleSchema);
